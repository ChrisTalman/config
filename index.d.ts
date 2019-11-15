/// <types="joi">

// External Modules
import { EventEmitter } from 'events';
import * as Joi from 'joi';

declare module '@chris-talman/config'
{
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
    }
	export default class Store <Config> extends EventEmitter
    {
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
    	/** Parses, validates, and stores config.json. */
    	private applySource({source}: {source: string}): Config;
        /** Add event listener. */
        public on(eventName: 'loaded', callback: (config: Store <Config>) => void): this;
    }
}