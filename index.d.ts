declare module '@bluecewe/config'
{
	export default class Store <Config>
    {
        public initialise(): Config;
    }
}