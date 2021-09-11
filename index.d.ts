/// <types="joi">

// External Modules
import { EventEmitter } from 'events';
import * as Joi from '@hapi/joi';

declare module '@chris-talman/config'
{
    export interface Options
    {
    	/** Schema to validate config. If `false`, no validation will occur. */
    	schema: Joi.Schema | object | false;
    	/** Determines whether data is initialised at instance instantiation. Default: `true`. */
    	initialise?: boolean;
    	/** Custom path to config file. */
    	file?: string;
    	/** Config data object is updated as changes are applied to the config file. Default: `false`. */
    	live?: boolean;
    	/** If specified, this is treated as raw JSON source for the conifg, instead of the default behaviour of reading from the file system. */
    	source?: string;
    }
	export default class Store <Config> extends EventEmitter
    {
    	/** The Joi class used by the module for validation. */
    	public static Joi: typeof Joi;
        /** Initialises instance. */
    	constructor(options: Options);
        /** Indicates whether data has been initialised. */
		public readonly initialised: boolean;
		/** The stored config object. */
		public readonly data: Config;
		/** Retrieves, parses, validates, and stores config.json. */
        public initialise(): Promise<Config>;
    	/** Retrieves, parses, validates, and stores config.json synchronously. */
        public initialiseSync(): Config;
        /** Add event listener. */
        public on(eventName: 'loaded', callback: (config: Store <Config>) => void): this;
    }
}