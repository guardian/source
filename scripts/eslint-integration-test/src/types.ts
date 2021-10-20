export interface Test {
	name: string;
	contents: string;
	fix: boolean;
	expectedErrors?: string[];
	expectedOutput?: string;
}

export interface TestResult extends Test {
	pass: boolean;
	failureMessage?: string;
}

export interface ExecError {
	message: string;
	stdout: string;
}
