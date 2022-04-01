let sourceIdIndex = 0;

export const generateSourceId = (): string =>
	`src-component-${sourceIdIndex++}`;
