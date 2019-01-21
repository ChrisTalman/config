'use strict';

// External Modules
import * as FileSystem from 'fs';
import * as Joi from 'joi';

// Types
export interface Options
{
	/** Schema by which config object should be validated. If false, data will not be validated. */
	schema: Joi.Schema | false;
	/** Determines whether store data is initialised at instance instantiation. Default: true. */
	initialise?: boolean;
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
	initialise: Joi.boolean().default(true)
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
		if (this.options.initialise) this.initialise();
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
	public initialise()
	{
		if (this._initialised)
		{
			return this._data;
		};
		let file: string;
		try
		{
			file = FileSystem.readFileSync('./config.json', {encoding: 'utf8'});
		}
		catch (error)
		{
			throw new ConfigError(error);
			return;
		};
		let data: Config;
		try
		{
			data = JSON.parse(file);
		}
		catch (error)
		{
			throw new ConfigError({message: 'Failed to parse config file as JSON.', code: 'parseFailure'});
			return;
		};
		if (typeof this.options.schema === 'object')
		{
			const validated = Joi.validate(data, this.options.schema);
			if (validated.error)  throw new ConfigError({message: 'Config invalid.', code: 'configInvalid'});
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