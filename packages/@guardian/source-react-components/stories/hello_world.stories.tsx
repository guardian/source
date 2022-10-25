import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { HelloWorld } from './HelloWorld';

export default {
	component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

export const Main: ComponentStory<typeof HelloWorld> = (props) => (
	<HelloWorld {...props} />
);

Main.args = { name: 'World!' };
