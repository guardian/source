export class Log {
	static error = (message: string) => {
		console.error(`\x1b[31m${message}\x1b[0m`);
	};
}
