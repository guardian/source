import type { HTMLAttributes } from 'react';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import { Container } from '../container/Container';
import { Column } from './Column';
import type { ColumnsProps } from './Columns';
import { Columns } from './Columns';

const style = { backgroundColor: 'rgba(255, 0, 0, 0.25)' };
const Code = (args: HTMLAttributes<HTMLElement>) => (
	<code style={{ whiteSpace: 'nowrap' }} {...args} />
);

export default {
	title: 'Packages/source-react-components/Columns',
	component: Columns,
	subcomponents: { Column },
};

const Template: Story<ColumnsProps> = (args) => (
	<Columns {...args} style={style}>
		<Column style={style}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus nibh
			erat, eget rutrum ligula vehicula sit amet. Etiam scelerisque dapibus
			pulvinar. Integer non accumsan justo. Duis et vehicula risus. Nulla ligula
			eros, consequat sodales lectus eget, eleifend venenatis neque.
		</Column>
		<Column style={style}>
			Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla
			facilisi. Phasellus id aliquam odio. Aliquam tempus eu enim in fermentum.
			Donec ut velit vel purus rutrum vulputate ut scelerisque lacus.
		</Column>
		<Column style={style}>
			Pellentesque id ornare turpis. Aliquam laoreet aliquet pharetra. Donec nec
			erat ac libero interdum sollicitudin. Nullam imperdiet ut dolor non
			cursus. Integer et ante fringilla, luctus magna nec, consequat est.
		</Column>
		<Column style={style}>
			Nunc nec dapibus quam. Praesent nec neque vel velit mollis tempor.
			Suspendisse justo eros, pharetra et elit sit amet, hendrerit laoreet dui.
			Curabitur ut libero nibh. Duis finibus sollicitudin tortor, ac viverra
			urna commodo et.
		</Column>
		<Column style={style}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur
			potestis voluptate omnia dirigentes aut tueri aut retinere virtutem. Hoc
			Hieronymus summum bonum esse dixit.
		</Column>
	</Columns>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
Default.parameters = {
	viewport: { defaultViewport: 'tablet' },
	layout: 'fullscreen',
	outline: true,
};
asChromaticStory(Default);

// *****************************************************************************

export const CollapseUntilTabletWithNoSpacing = Template.bind({});
CollapseUntilTabletWithNoSpacing.args = {
	collapseUntil: 'tablet',
};
CollapseUntilTabletWithNoSpacing.parameters = {
	viewport: { defaultViewport: 'phablet' },
	layout: 'fullscreen',
	outline: true,
};
asChromaticStory(CollapseUntilTabletWithNoSpacing);

// *****************************************************************************

export const CollapseUntilTabletWithSpace1 = Template.bind({});
CollapseUntilTabletWithSpace1.args = {
	collapseUntil: 'tablet',
	spaceY: '1',
};
CollapseUntilTabletWithSpace1.parameters = {
	viewport: { defaultViewport: 'phablet' },
	layout: 'fullscreen',
	outline: true,
};
asChromaticStory(CollapseUntilTabletWithSpace1);

// *****************************************************************************

export const CollapseUntilTabletWithSpace2 = Template.bind({});
CollapseUntilTabletWithSpace2.args = {
	collapseUntil: 'tablet',
	spaceY: '2',
};
CollapseUntilTabletWithSpace2.parameters = {
	viewport: { defaultViewport: 'phablet' },
	layout: 'fullscreen',
	outline: true,
};
asChromaticStory(CollapseUntilTabletWithSpace2);

// *****************************************************************************

export const CollapseUntilTabletWithSpace3 = Template.bind({});
CollapseUntilTabletWithSpace3.args = {
	collapseUntil: 'tablet',
	spaceY: '3',
};
CollapseUntilTabletWithSpace3.parameters = {
	viewport: { defaultViewport: 'phablet' },
	layout: 'fullscreen',
	outline: true,
};
asChromaticStory(CollapseUntilTabletWithSpace3);

// *****************************************************************************

export const CollapseUntilTabletWithSpace4 = Template.bind({});
CollapseUntilTabletWithSpace4.args = {
	collapseUntil: 'tablet',
	spaceY: '4',
};
CollapseUntilTabletWithSpace4.parameters = {
	viewport: { defaultViewport: 'phablet' },
	layout: 'fullscreen',
	outline: true,
};
asChromaticStory(CollapseUntilTabletWithSpace4);

// *****************************************************************************

export const CollapseUntilTabletWithSpace5 = Template.bind({});
CollapseUntilTabletWithSpace5.args = {
	collapseUntil: 'tablet',
	spaceY: '5',
};
CollapseUntilTabletWithSpace5.parameters = {
	viewport: { defaultViewport: 'phablet' },
	layout: 'fullscreen',
	outline: true,
};
asChromaticStory(CollapseUntilTabletWithSpace5);

// *****************************************************************************

export const CollapseUntilTabletWithSpace6 = Template.bind({});
CollapseUntilTabletWithSpace6.args = {
	collapseUntil: 'tablet',
	spaceY: '6',
};
CollapseUntilTabletWithSpace6.parameters = {
	viewport: { defaultViewport: 'phablet' },
	layout: 'fullscreen',
	outline: true,
};
asChromaticStory(CollapseUntilTabletWithSpace6);

// *****************************************************************************

export const CollapseUntilTabletWithSpace9 = Template.bind({});
CollapseUntilTabletWithSpace9.args = {
	collapseUntil: 'tablet',
	spaceY: '9',
};
CollapseUntilTabletWithSpace9.parameters = {
	viewport: { defaultViewport: 'phablet' },
	layout: 'fullscreen',
	outline: true,
};
asChromaticStory(CollapseUntilTabletWithSpace9);

// *****************************************************************************

export const CollapseUntilTabletWithSpace12 = Template.bind({});
CollapseUntilTabletWithSpace12.args = {
	collapseUntil: 'tablet',
	spaceY: '12',
};
CollapseUntilTabletWithSpace12.parameters = {
	viewport: { defaultViewport: 'phablet' },
	layout: 'fullscreen',
	outline: true,
};
asChromaticStory(CollapseUntilTabletWithSpace12);

// *****************************************************************************

export const CollapseUntilTabletWithSpace24 = Template.bind({});
CollapseUntilTabletWithSpace24.args = {
	collapseUntil: 'tablet',
	spaceY: '24',
};
CollapseUntilTabletWithSpace24.parameters = {
	viewport: { defaultViewport: 'phablet' },
	layout: 'fullscreen',
	outline: true,
};
asChromaticStory(CollapseUntilTabletWithSpace24);

// *****************************************************************************

export const WithContainer: Story<ColumnsProps> = (args) => (
	<Container style={style}>{Template(args)}</Container>
);
WithContainer.parameters = {
	layout: 'fullscreen',
};
asChromaticStory(WithContainer);

// *****************************************************************************

export const ResponsiveAtPhablet: Story<ColumnsProps> = (args) => (
	<Container style={style}>
		<Columns {...args}>
			<Column width={[1 / 2, 1 / 4]} style={style}>
				<p>default 50% wide, 25% from tablet</p>
				<Code>{'width={[1 / 2, 1 / 4]}'}</Code>
			</Column>
			<Column width={[1 / 2, 3 / 4]} style={style}>
				<p>default 50% wide, 75% from tablet</p>
				<Code>{'width={[1 / 2, 3 / 4]}'}</Code>
			</Column>
		</Columns>
	</Container>
);
ResponsiveAtPhablet.parameters = {
	viewport: { defaultViewport: 'phablet' },
	layout: 'fullscreen',
	outline: true,
};
asChromaticStory(ResponsiveAtPhablet);

// *****************************************************************************

export const ResponsiveAtTablet: Story<ColumnsProps> = (args) => (
	<Container style={style}>
		<Columns {...args}>
			<Column width={[1 / 2, 1 / 4]} style={style}>
				<p>default 50% wide, 25% from tablet</p>
				<Code>{'width={[1 / 2, 1 / 4]}'}</Code>
			</Column>
			<Column width={[1 / 2, 3 / 4]} style={style}>
				<p>default 50% wide, 75% from tablet</p>
				<Code>{'width={[1 / 2, 3 / 4]}'}</Code>
			</Column>
		</Columns>
	</Container>
);
ResponsiveAtTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
	layout: 'fullscreen',
};
asChromaticStory(ResponsiveAtTablet);

// *****************************************************************************

export const ResponsiveHideAtTablet: Story<ColumnsProps> = (args) => (
	<Container style={style}>
		<Columns {...args}>
			<Column width={[0, 1 / 4]} style={style}>
				<p>hidden at mobile, 25% from tablet</p>
				<Code>{'width={[0, 1 / 4]}'}</Code>
			</Column>
			<Column width={[1, 3 / 4]} style={style}>
				<p>default 100% wide, 75% from tablet</p>
				<Code>{'width={[1, 3 / 4]}'}</Code>
			</Column>
		</Columns>
	</Container>
);
ResponsiveHideAtTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
	layout: 'fullscreen',
};
asChromaticStory(ResponsiveHideAtTablet);

// *****************************************************************************

export const ResponsiveHideAtMobile: Story<ColumnsProps> = (args) => (
	<Container style={style}>
		<Columns {...args}>
			<Column width={[0, 1 / 4]} style={style}>
				<p>hidden at mobile, 25% from tablet</p>
				<Code>{'width={[0, 1 / 4]}'}</Code>
			</Column>
			<Column width={[1, 3 / 4]} style={style}>
				<p>default 100% wide, 75% from tablet</p>
				<Code>{'width={[1, 3 / 4]}'}</Code>
			</Column>
		</Columns>
	</Container>
);
ResponsiveHideAtMobile.parameters = {
	viewport: { defaultViewport: 'mobile' },
	layout: 'fullscreen',
};
asChromaticStory(ResponsiveHideAtMobile);

// *****************************************************************************

export const WithSpan: Story<ColumnsProps> = () => (
	<>
		<p>
			Elements with a <Code>{'span'}</Code> prop will scale at our{' '}
			<a href="https://theguardian.design/2a1e5182b/p/41be19-grids">
				established breakpoints
			</a>
			:
		</p>
		<Container style={style}>
			<Columns>
				<Column style={style} span={1}>
					<Code>{'span={1}'}</Code>
				</Column>
				<Column style={style} span={1}>
					<Code>{'span={1}'}</Code>
				</Column>
				<Column style={style} span={2}>
					<Code>{'span={2}'}</Code>
				</Column>
			</Columns>
		</Container>
		<p></p>
		<Container style={style}>
			<Columns>
				<Column style={style} span={2}>
					<Code>{'span={2}'}</Code>
				</Column>
				<Column style={style} />
				<Column style={style} span={1}>
					<Code>{'span={1}'}</Code>
				</Column>
			</Columns>
		</Container>
		<p>
			An array of <Code>{'span'}</Code> values can be specified for relevant
			breakpoints:
		</p>
		<Container style={style}>
			<Columns>
				<Column style={style} span={4}>
					<Code>{'span={4}'}</Code>
				</Column>
				<Column style={style} span={[0, 4, 4]}>
					<Code>{'span={[0, 4]}'}</Code>
				</Column>
				<Column style={style} span={[0, 4, 4, 6, 8]}>
					<Code>{'span={[0, 0, 4, 6, 8]}'}</Code>
				</Column>
			</Columns>
		</Container>
		<p>
			An element with a <Code>{'span'}</Code> will not extend beyond 100% of the
			browser width:
		</p>
		<Container style={style}>
			<Columns>
				<Column style={style} span={12}>
					<Code>{'span={12}'}</Code>
				</Column>
			</Columns>
		</Container>
		<p>
			A <Code>{'span'}</Code> of 0 will cause the element not to be displayed.
		</p>
		<Container style={style}>
			<Columns>
				<Column style={style}>*</Column>
				<Column style={style} span={[0, 0, 2]}>
					<Code>{'span={[0, 0, 2]}'}</Code>
				</Column>
				<Column style={style} span={[0, 0, 2]}>
					<Code>{'span={[0, 0, 2]}'}</Code>
				</Column>
			</Columns>
		</Container>
		<p>
			<Code>{'span'}</Code> is overruled by <Code>{'width'}</Code> prop:
		</p>
		<Container style={style}>
			<Columns>
				<Column style={style} span={2} width={3 / 4}>
					<Code>{'span={2} width={3 / 4}'}</Code>
				</Column>
				<Column style={style} width={1 / 4}>
					<Code>{'width={1 / 4}'}</Code>
				</Column>
			</Columns>
		</Container>
	</>
);
WithSpan.parameters = {
	layout: 'fullscreen',
};
asChromaticStory(WithSpan);

// *****************************************************************************

export const WithWidth: Story<ColumnsProps> = () => (
	<>
		<Container style={style}>
			<Columns>
				<Column width={1 / 4} style={style}>
					<Code>{'width={1 / 4}'}</Code>
				</Column>
				<Column style={style} />
				<Column style={style} />
			</Columns>
		</Container>
		<p></p>
		<Container style={style}>
			<Columns>
				<Column width={1 / 3} style={style}>
					<Code>{'width={1 / 3}'}</Code>
				</Column>
				<Column style={style} />
				<Column style={style} />
			</Columns>
		</Container>
		<p></p>
		<Container style={style}>
			<Columns>
				<Column width={1 / 2} style={style}>
					<Code>{'width={1 / 2}'}</Code>
				</Column>
				<Column style={style} />
				<Column style={style} />
			</Columns>
		</Container>
		<p></p>
		<Container style={style}>
			<Columns>
				<Column width={3 / 4} style={style}>
					<Code>{'width={3 / 4}'}</Code>
				</Column>
				<Column style={style} />
				<Column style={style} />
			</Columns>
		</Container>
	</>
);
WithWidth.parameters = {
	layout: 'fullscreen',
};
asChromaticStory(WithWidth);
