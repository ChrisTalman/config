'use strict';

// External Modules
import * as FileSystem from 'fs';

// Types
export interface ConfigErrorParameters
{
	message: string;
	code: string;
};

// To Do: Allow the user to optionally provide a Joi schema to validate the config object.

/** Store for config.json. */
export default class Store <Config>
{
	private _data: Config;
	private initialised: boolean = false;
	public get data()
	{
		if (this.initialised)
		{
			return this._data;
		}
		else
		{
			ConfigError.throw({message: 'Config not initialised.', code: 'notInitialised'});
		};
	};
	/** Retrieves, parses, validates, and stores config.json. */
	public initialise()
	{
		if (this.initialised)
		{
			return this._data;
		};
		let file;
		try
		{
			file = FileSystem.readFileSync('./config.json', {encoding: 'utf8'});
		}
		catch (error)
		{
			ConfigError.throw(error);
			return;
		};
		let object: Config;
		try
		{
			object = JSON.parse(file);
		}
		catch (error)
		{
			ConfigError.throw({message: 'Failed to parse config file as JSON.', code: 'parseFailure'});
			return;
		};
		this._data = object;
		this.initialised = true;
		return this._data;
	};
};

export class ConfigError extends Error
{
	public message: string;
	public code: string;
	static throw(parameters: ConfigErrorParameters)
	{
		throw new this(parameters);
	};
	constructor(parameters: ConfigErrorParameters)
	{
		super(parameters.message);
		this.message = parameters.message;
		this.code = parameters.code;
	};
};