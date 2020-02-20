declare module 'gaze'
{
	export class Gaze
	{
		constructor(filePathPattern: string);
		on(eventType: ChangeType, callback: (filepath: string) => void): void;
		on(eventType: 'all', callback: (changeType: ChangeType, filepath: string) => void): void;
	}
	export type ChangeType = 'added' | 'changed' | 'deleted';
}