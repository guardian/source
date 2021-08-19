import { Story } from '../../../../@types/storybook-emotion-10-fixes';
import { asChromaticStory, asPlayground } from '../../../../lib/story-intents';
import { Tiles, TilesProps } from '../index';

export default {
	title: 'Source/src-layout/Tiles',
	component: Tiles,
	args: {
		columns: '2',
	},
};

const Template: Story<TilesProps> = (args: TilesProps) => (
	<Tiles {...args}>
		<div>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus
			nibh erat, eget rutrum ligula vehicula sit amet. Etiam scelerisque
			dapibus pulvinar. Integer non accumsan justo. Duis et vehicula
			risus. Nulla ligula eros, consequat sodales lectus eget, eleifend
			venenatis neque.
		</div>
		<div>
			Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla
			facilisi. Phasellus id aliquam odio. Aliquam tempus eu enim in
			fermentum. Donec ut velit vel purus rutrum vulputate ut scelerisque
			lacus.
		</div>
		<div>
			Pellentesque id ornare turpis. Aliquam laoreet aliquet pharetra.
			Donec nec erat ac libero interdum sollicitudin. Nullam imperdiet ut
			dolor non cursus. Integer et ante fringilla, luctus magna nec,
			consequat est.
		</div>
		<div>
			Nunc nec dapibus quam. Praesent nec neque vel velit mollis tempor.
			Suspendisse justo eros, pharetra et elit sit amet, hendrerit laoreet
			dui. Curabitur ut libero nibh. Duis finibus sollicitudin tortor, ac
			viverra urna commodo et.
		</div>
		<div>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur
			potestis voluptate omnia dirigentes aut tueri aut retinere virtutem.
			Hoc Hieronymus summum bonum esse dixit.
		</div>
	</Tiles>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Columns2 = Template.bind({});
Columns2.args = {
	columns: '2',
};
asChromaticStory(Columns2);

// *****************************************************************************

export const Columns3 = Template.bind({});
Columns3.args = {
	columns: '3',
};
asChromaticStory(Columns3);

// *****************************************************************************

export const Columns4 = Template.bind({});
Columns4.args = {
	columns: '4',
};
asChromaticStory(Columns4);

// *****************************************************************************

export const Columns5 = Template.bind({});
Columns5.args = {
	columns: '5',
};
asChromaticStory(Columns5);

// *****************************************************************************

export const Columns5CollapseUntilTabletAtMobile = Template.bind({});
Columns5CollapseUntilTabletAtMobile.args = {
	columns: '5',
	collapseUntil: 'Tablet',
};
Columns5CollapseUntilTabletAtMobile.parameters = {
	viewport: { defaultViewport: 'mobile' },
};
asChromaticStory(Columns5CollapseUntilTabletAtMobile);

// *****************************************************************************

export const Columns5CollapseUntilTabletAtTablet = Template.bind({});
Columns5CollapseUntilTabletAtTablet.args = {
	columns: '5',
	collapseUntil: 'Tablet',
};
Columns5CollapseUntilTabletAtTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
};
asChromaticStory(Columns5CollapseUntilTabletAtTablet);
