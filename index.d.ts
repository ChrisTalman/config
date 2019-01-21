/// <types="joi">

// External Modules
import * as Joi from 'joi';

declare module '@bluecewe/config'
{
    export interface Options
    {
    	/** Schema by which config object should be validated. */
    	schema?: Joi.Schema;
    	/** Determines whether store data is initialised at instance instantiation. Default: true. */
    	initialise?: boolean;
    }
	export default class Store <Config>
    {
        /** Initialises instance. */
    	constructor(options?: Options);
        /** Indicates whether data has been initialised. */
		public readonly initialised: boolean;
		/** The stored config object. */
		public readonly data: Config;
		/** Retrieves, parses, validates, and stores config.json. */
        public initialise(): Config;
    }
}