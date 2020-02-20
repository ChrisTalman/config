'use strict';

// Types
interface PermissionError
{
	errno: number;
	syscall: 'watch';
	code: 'EPERM';
	filename: string | null;
};

export function suppressSpuriousPermissionErrors()
{
	process.on('uncaughtException', handleUncaughtException);
};

function handleUncaughtException(error: any)
{
	const permissionError: PermissionError = error;
	const isSpurious =
		'errno' in permissionError
		&&
		'syscall' in permissionError
		&&
		'code' in permissionError
		&&
		'filename' in permissionError
		&&
		permissionError.errno === -4048
		&&
		permissionError.syscall === 'watch'
		&&
		permissionError.code === 'EPERM'
		&&
		permissionError.filename === null
	;
	if (isSpurious) return;
	console.error(error.stack || error);
	process.exit(1);
};