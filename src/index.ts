'use strict';

// External Modules
import { readFileSync, promises as FileSystemPromises } from 'fs';
const { readFile } = FileSystemPromises;
import * as Joi from 'joi';

// Types
import { ValidationOptions as JoiValidationOptions } from 'joi';
export interface Options
{
	/** Schema by which config object should be validated. If false, data will not be validated. */
	schema: Joi.Schema | object | false;
	/** Determines whether store data is initialised at instance instantiation. Default: true. */
	initialise?: boolean;
	/** Path to config file. */
	file?: string;
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
	initialise: Joi.boolean().default(true),
	file: Joi.string().default('./config.json')
};
const CONFIG_DATA_SCHEMA_JOI_OPTIONS: JoiValidationOptions =
{
	presence: 'required'
};

/** Store for config.json. */
export default class Store <Config>
{
	private _initialised: boolean = false;
	private _data: Config;
	public readonly options: Options;
	/** Initialises instance. */
	constructor(options: Options)
	{
		this.options = this.validateOptions(options);
		if (this.options.initialise) this.initialiseSync();
	};
	/** Validates and transforms options. */
	private validateOptions(options: Options)
	{
		const validated = Joi.validate(options, OPTIONS_SCHEMA);
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
			return this._data;
		}
		else
		{
			throw new ConfigError({message: 'Config not initialised.', code: 'notInitialised'});
		};
	};
	/** Retrieves, parses, validates, and stores config.json. */
	public async initialise()
	{
		if (this._initialised) return this._data;
		let source: string;
		try
		{
			source = await readFile(this.options.file, 'utf8');
		}
		catch (error)
		{
			throw new ConfigError(error);
		};
		this.applySource({source});
	};
	/** Retrieves, parses, validates, and stores config.json synchronously. */
	public initialiseSync()
	{
		if (this._initialised) return this._data;
		let source: string;
		try
		{
			source = readFileSync(this.options.file, 'utf8');
		}
		catch (error)
		{
			throw new ConfigError(error);
		};
		this.applySource({source});
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
			if (validated.error)  throw new ConfigError({message: 'Config invalid: ' + validated.error.message + '.', code: 'configInvalid'});
			data = validated.value;
		};
		this._data = data;
		this._initialised = true;
		return this._data;
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