declare module '@bluecewe/config'
{
	export default class Store <Config>
    {
		/** The stored config object. */
		public data(): Config;
		/** Retrieves, parses, validates, and stores config.json. */
        public initialise(): Config;
    }
}