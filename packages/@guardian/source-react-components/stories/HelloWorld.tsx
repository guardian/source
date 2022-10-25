export interface HelloWorldProps {
	/**
	 * Name of the person to say Hello to
	 */
	name: string;
}

export const HelloWorld = ({ name }: HelloWorldProps) => <p>Hello {name}!</p>;
