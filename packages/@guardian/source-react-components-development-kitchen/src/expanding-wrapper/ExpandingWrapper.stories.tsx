import { css } from '@emotion/react';
import { neutral } from '@guardian/source-foundations';
import type { ReactElement } from 'react';
import { ExpandingWrapper } from './ExpandingWrapper';

/**
 * [Storybook](https://guardian.github.io/source/?path=/story/packages-source-react-components-development-kitchen-expandingwrapper--expanding-wrapper
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components-development-kitchen/src/expanding-wrapper/ExpandingWrapper.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * An Expanding Wrapper surrounds a bit of content that can be collapsed and expanded
 * Note: When collapsed, there should be no focusable elements within the wrapper.
 *
 * The following themes are supported: `light`.
 * */

const loremStyles = css`
	padding: 10px;
	background: ${neutral[97]};
	font-family: GuardianTextSans;
`;

const Lorem = (
	<div css={loremStyles}>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis
			lorem velit. Mauris semper in velit vitae tempor. Fusce eu eros pretium,
			commodo tellus nec, cursus risus. Nullam venenatis odio eu fringilla
			pretium. Nullam quis dignissim eros, sed maximus orci. Fusce pharetra,
			elit eu ultrices vulputate, sem eros accumsan arcu, et vulputate ante
			ipsum mattis elit. Ut euismod nec massa vel congue. Phasellus laoreet
			mauris et enim finibus viverra. Nulla a nunc rutrum, auctor felis nec,
			pharetra massa. Aenean placerat, leo nec volutpat consequat, risus diam
			sagittis sem, eu placerat mauris leo vestibulum tellus. Donec sed odio sit
			amet diam consectetur consequat. Etiam luctus placerat orci, vitae
			sagittis turpis blandit eget. Sed tempor mi ut urna vehicula, vel posuere
			ipsum egestas.
		</p>
		<input placeholder="Basic Input" />

		<br />
		<p>
			Fusce a tincidunt magna. Curabitur non libero vel nisl efficitur mattis.
			Etiam pulvinar mi est, vel semper nibh aliquet id. Morbi lobortis elit
			tortor, et facilisis massa placerat non. Quisque sollicitudin dolor in
			elit dapibus, sit amet vehicula turpis mattis. Mauris tempor magna turpis,
			sed vulputate turpis pharetra vel. Curabitur aliquam mi neque, non aliquam
			elit condimentum ac. Integer in sapien eget urna tristique iaculis.
			Maecenas luctus, mauris eget mattis feugiat, eros justo malesuada nunc,
			vel aliquam ipsum tellus non neque. Donec tempus tincidunt egestas.
			Integer dapibus pulvinar condimentum. Pellentesque ultricies ligula et
			facilisis pulvinar.
		</p>
		<button onClick={() => window.alert('HELLO')}>Sound the alarm</button>
		<br />
		<p>
			Phasellus vel dapibus ex. Orci varius natoque penatibus et magnis dis
			parturient montes, nascetur ridiculus mus. Ut vehicula arcu non erat
			iaculis efficitur. Donec sit amet varius lacus. Etiam lacinia tincidunt
			ante a suscipit. Vestibulum iaculis, ipsum non euismod faucibus, ex ipsum
			vehicula massa, a malesuada enim nunc et mauris. Suspendisse rhoncus ipsum
			eros, accumsan ornare ex placerat id. Ut blandit, sapien eget fermentum
			hendrerit, ipsum risus vulputate velit, sed lacinia lacus ipsum sed quam.
			Pellentesque lacinia velit libero, at volutpat risus pharetra imperdiet.
			Morbi a lacinia felis. Pellentesque ac risus neque. Nulla at arcu
			ultrices, tincidunt urna vehicula, egestas felis. Nulla laoreet risus
			urna, a efficitur metus vulputate nec.
		</p>
		<br />
		<p>
			Pellentesque tincidunt blandit turpis, convallis facilisis massa fringilla
			cursus. Praesent neque odio, porta sodales imperdiet a, aliquam eu ante.
			Maecenas id placerat turpis, quis finibus odio. Integer sed nisi vitae
			nulla euismod mattis quis condimentum lorem. Suspendisse potenti. Nam
			lobortis vehicula ex, vitae ultricies purus dictum sed. Fusce id faucibus
			justo. Quisque nec sagittis felis. Nulla tellus velit, ornare nec turpis
			et, pretium tincidunt tellus. Integer non mauris venenatis, consequat
			massa porta, molestie ante. Nulla nisi magna, gravida sit amet massa id,
			vehicula fermentum leo. Nunc quis odio a eros ullamcorper sodales. Donec
			eu arcu ornare, dapibus erat placerat, rhoncus mauris. Sed ante neque,
			interdum eget purus eget, maximus pharetra ante. Cras hendrerit pulvinar
			enim, at rutrum quam faucibus vel. Integer nisl velit, rhoncus id turpis
			eu, ultricies venenatis elit.
		</p>
		<br />
		<p>
			Pellentesque tincidunt blandit turpis, convallis facilisis massa fringilla
			cursus. Praesent neque odio, porta sodales imperdiet a, aliquam eu ante.
			Maecenas id placerat turpis, quis finibus odio. Integer sed nisi vitae
			nulla euismod mattis quis condimentum lorem. Suspendisse potenti. Nam
			lobortis vehicula ex, vitae ultricies purus dictum sed. Fusce id faucibus
			justo. Quisque nec sagittis felis. Nulla tellus velit, ornare nec turpis
			et, pretium tincidunt tellus. Integer non mauris venenatis, consequat
			massa porta, molestie ante. Nulla nisi magna, gravida sit amet massa id,
			vehicula fermentum leo. Nunc quis odio a eros ullamcorper sodales. Donec
			eu arcu ornare, dapibus erat placerat, rhoncus mauris. Sed ante neque,
			interdum eget purus eget, maximus pharetra ante. Cras hendrerit pulvinar
			enim, at rutrum quam faucibus vel. Integer nisl velit, rhoncus id turpis
			eu, ultricies venenatis elit.
		</p>
	</div>
);

const renderUpdatedText = () => (
	<span
		style={{
			background: 'yellow',
			padding: '2px',
			fontFamily: 'GuardianTextSans',
		}}
	>
		Last updated yesterday
	</span>
);

const expandingWrapper = (): ReactElement => {
	return (
		<>
			<ExpandingWrapper renderExtra={renderUpdatedText} name="Lorem Ipsum Text">
				{Lorem}
			</ExpandingWrapper>
			<button>Click me!</button>
		</>
	);
};

export default {
	component: expandingWrapper,
	title:
		'Packages/source-react-components-development-kitchen/ExpandingWrapper',
};

export { expandingWrapper };
