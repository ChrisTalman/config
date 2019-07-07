'use strict';

// External Modules
import { readFileSync, promises as FileSystemPromises } from 'fs';
const { readFile } = FileSystemPromises;
import Joi from 'joi';
import { Gaze } from 'gaze';

// Types
import { ChangeType as GazeChangeType } from 'gaze';
import { ValidationOptions as JoiValidationOptions } from 'joi';
export interface Options
{
	/** Schema by which config object should be validated. If false, data will not be validated. */
	schema: Joi.Schema | object | false;
	/** Determines whether store data is initialised at instance instantiation. Default: true. */
	initialise?: boolean;
	/** Path to config file. */
	file?: string;
	/** Config data object is updated as changes are applied to the config file. */
	live?: boolean;
};
export interface ConfigErrorParameters
{
	message: string;
	code: string;
};

// Constants
const OPTIONS_SCHEMA =
{
	schema: Joi.alternatives(Joi.object(), Joi.valid(false)).required(),
	initialise: Joi.boolean().default(true).optional(),
	file: Joi.string().default('./config.json').optional(),
	live: Joi.boolean().default(false).optional()
};
const JOI_OPTIONS: Joi.ValidationOptions =
{
	presence: 'required'
};
const CONFIG_DATA_SCHEMA_JOI_OPTIONS: JoiValidationOptions =
{
	presence: 'required'
};

/** Store for config.json. */
export default class Store <Config>
{
	private _initialised: boolean = false;
	/** Live object containing current data. */
	private readonly _proxy: Config = {} as Config;
	public readonly options: Options;
	/** Initialises instance. */
	constructor(options: Options)
	{
		this.options = this.validateOptions(options);
		if (this.options.initialise) this.initialiseSync();
		this.listenUnhandledRejections();
	};
	/** Validates and transforms options. */
	private validateOptions(options: Options)
	{
		if (typeof options !== 'object' || options === null)
		{
			throw new Error('Constructor must specify \'options\' object.');
		};
		const validated = Joi.validate(options, OPTIONS_SCHEMA, JOI_OPTIONS);
		if (validated.error) throw new ConfigError({message: validated.error.message, code: 'optionsInvalid'});
		const transformed = validated.value;
		return transformed;
	};
	/** Indicates whether data has been initialised. */
	public get initialised()
	{
		return this._initialised;
	};
	/** The stored config object. */
	public get data()
	{
		if (this._initialised)
		{
			return this._proxy;
		}
		else
		{
			throw new ConfigError({message: 'Config not initialised.', code: 'notInitialised'});
		};
	};
	/** Retrieves, parses, validates, and stores config.json. */
	public async initialise()
	{
		if (this._initialised) return this._proxy;
		const data = await this.load();
		this.listenSource();
		this._initialised = true;
		return data;
	};
	/** Loads and applies config file source. */
	private async load()
	{
		let source: string;
		try
		{
			source = await readFile(this.options.file, 'utf8');
		}
		catch (error)
		{
			throw new ConfigError(error);
		};
		const data = this.applySource({source});
		return data;
	};
	/** Retrieves, parses, validates, and stores config.json synchronously. */
	public initialiseSync()
	{
		if (this._initialised) return this._proxy;
		let source: string;
		try
		{
			source = readFileSync(this.options.file, 'utf8');
		}
		catch (error)
		{
			throw new ConfigError(error);
		};
		const data = this.applySource({source});
		this.listenSource();
		this._initialised = true;
		return data;
	};
	/** Parses, validates, and stores config.json. */
	private applySource({source}: {source: string})
	{
		let data: Config;
		try
		{
			data = JSON.parse(source);
		}
		catch (error)
		{
			throw new ConfigError({message: 'Failed to parse config file as JSON.', code: 'parseFailure'});
		};
		if (typeof this.options.schema === 'object')
		{
			const validated = Joi.validate(data, this.options.schema, CONFIG_DATA_SCHEMA_JOI_OPTIONS);
			if (validated.error) throw new ConfigError({message: 'Config invalid: ' + validated.error.message + '.', code: 'configInvalid'});
			data = validated.value;
		};
		this.purgeProxy();
		this.applyDataToProxy({data});
		return this._proxy;
	};
	/** Listens to changes to config file. */
	private listenSource()
	{
		if (!this.options.live) return;
		const gaze = new Gaze(this.options.file);
		gaze.on('all', (changeType) => this.handleSourceChange(changeType));
	};
	/** Handles changes to config file. */
	private async handleSourceChange(changeType: GazeChangeType)
	{
		if (changeType === 'added' || changeType === 'changed')
		{
			await this.load();
		}
		else if (changeType === 'deleted')
		{
			throw new ConfigError({message: 'Config file deleted.', code: 'fileDeleted'});
		}
		else
		{
			throw new ConfigError({message: 'Unexpected file change type.', code: 'unexpected'});
		};
	};
	/** Assigns properties from data object to proxy object as computed properties through get() methods. */
	private applyDataToProxy({data}: {data: Config})
	{
		for (let { 0: key, 1: value } of Object.entries(data))
		{
			this._proxy[key] = value;
		};
	};
	/** Deletes all members in proxy object, leaving it completely empty. */
	private purgeProxy()
	{
		const keys = Object.keys(this._proxy);
		for (let key of keys)
		{
			delete this._proxy[key];
		};
	};
	/** Listen to unhandled promise rejections. */
	private listenUnhandledRejections()
	{
		process.on('unhandledRejection', this.throwUnhandledRejection);
	};
	/** Throw an unahandled promise rejection as an exception. */
	private throwUnhandledRejection(rejection)
	{
		if (!(rejection instanceof ConfigError)) return;
		throw rejection;
	};
};

export class ConfigError extends Error
{
	public message: string;
	public code: string;
	constructor({message, code}: {message: string, code: string})
	{
		super(message);
		this.message = message;
		this.code = code;
	};
};