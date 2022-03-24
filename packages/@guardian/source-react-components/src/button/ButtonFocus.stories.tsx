import { Button } from './Button';
import { Inline } from '../inline/Inline';
import { palette } from '@guardian/source-foundations';
import { ThemeProvider, css } from '@emotion/react';
import {
	buttonThemeBrand,
	buttonThemeBrandAlt,
	buttonThemeDefault,
} from './theme';

export default {
	title: 'Button Focus',
	component: Button,
};

const center = css`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 200px;
	padding: 10px;
`;

const defaultBackground = css`
	background-color: ${palette.neutral[100]};
`;
const brandBackground = css`
	background-color: ${palette.brand[400]};
`;
const brandAltBackground = css`
	background-color: ${palette.brandAlt[400]};
`;

export const allTheButtons = () => {
	return (
		<div>
			<ThemeProvider theme={buttonThemeDefault}>
				<div css={[defaultBackground, center]}>
					<Inline space={5}>
						<Button priority="primary">Button primary</Button>
						<Button priority="secondary">Button secondary</Button>
						<Button priority="tertiary">Button tertiary</Button>
						<Button priority="subdued">Button subdued</Button>
					</Inline>
				</div>
			</ThemeProvider>
			<ThemeProvider theme={buttonThemeBrand}>
				<div css={[brandBackground, center]}>
					<Inline space={5}>
						<Button priority="primary">Button primary</Button>
						<Button priority="secondary">Button secondary</Button>
						<Button priority="tertiary">Button tertiary</Button>
						<Button priority="subdued">Button subdued</Button>
					</Inline>
				</div>
			</ThemeProvider>
			<ThemeProvider theme={buttonThemeBrandAlt}>
				<div css={[brandAltBackground, center]}>
					<Inline space={5}>
						<Button priority="primary">Button primary</Button>
						<Button priority="secondary">Button secondary</Button>
						<Button priority="tertiary">Button tertiary</Button>
						<Button priority="subdued">Button subdued</Button>
					</Inline>
				</div>
			</ThemeProvider>
		</div>
	);
};
