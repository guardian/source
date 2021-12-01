import { generateReactComponent, _ } from './components';

describe('The generateReactComponent function', () => {
	it('generates the correct string for a given svg', () => {
		const svg = `<svg
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M16.4878 1L18 2.5122V21.4878L16.4878 22.9756L7.5122 23L6 21.4878V2.5122L7.5122 1H16.4878ZM12.0976 21.4878C12.6342 21.4878 13.0976 21.0488 13.0976 20.4878C13.0976 19.9268 12.6342 19.4878 12.0976 19.4878C11.5366 19.4878 11.0732 19.9268 11.0732 20.4878C11.0732 21.0488 11.5366 21.4878 12.0976 21.4878ZM16.0732 18.4878V4.4878H8.07318V18.4878H16.0732ZM12 14.4878C12.561 14.4878 13 14.9268 13 15.4878C13 16.0244 12.561 16.4634 12 16.4634C11.439 16.4634 11 16.0244 11 15.4878C11 14.9268 11.439 14.4878 12 14.4878ZM12.6829 13.1707H11.3902L10.7317 7.14635L11.3902 6.48781H12.6829L13.3415 7.14635L12.6829 13.1707Z"
	/>
</svg>`;
		const expected = `import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const TestIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.4878 1L18 2.5122V21.4878L16.4878 22.9756L7.5122 23L6 21.4878V2.5122L7.5122 1H16.4878ZM12.0976 21.4878C12.6342 21.4878 13.0976 21.0488 13.0976 20.4878C13.0976 19.9268 12.6342 19.4878 12.0976 19.4878C11.5366 19.4878 11.0732 19.9268 11.0732 20.4878C11.0732 21.0488 11.5366 21.4878 12.0976 21.4878ZM16.0732 18.4878V4.4878H8.07318V18.4878H16.0732ZM12 14.4878C12.561 14.4878 13 14.9268 13 15.4878C13 16.0244 12.561 16.4634 12 16.4634C11.439 16.4634 11 16.0244 11 15.4878C11 14.9268 11.439 14.4878 12 14.4878ZM12.6829 13.1707H11.3902L10.7317 7.14635L11.3902 6.48781H12.6829L13.3415 7.14635L12.6829 13.1707Z"
			/>
		</svg>
	);
};
`;
		expect(generateReactComponent('Test', svg)).toBe(expected);
	});
});

describe('The getAttributeAndValue function', () => {
	it('gets the contents of the chosen attribute when one exists', () => {
		const source = `<mask
			id="mask0_1356_2237"
			style="mask-type:alpha"
			maskUnits="userSpaceOnUse"
			x="3"
			y="13"
			width="16"
			height="9"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.53699 13.8719H18.6145V21.691H3.53699V13.8719Z"
				fill="white"
			/>
		</mask>;`;

		const expected = `<mask
			id="mask0_1356_2237"
			mask-type="alpha"
			maskUnits="userSpaceOnUse"
			x="3"
			y="13"
			width="16"
			height="9"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.53699 13.8719H18.6145V21.691H3.53699V13.8719Z"
				fill="white"
			/>
		</mask>;`;

		expect(_.replaceStyleAttribute(source)).toBe(expected);
	});

	it('gets the contents of the chosen attribute when multiple exists', () => {
		const source = `<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<mask
				id="mask0_1356_2237"
				style="mask-type:alpha"
				maskUnits="userSpaceOnUse"
				x="3"
				y="13"
				width="16"
				height="9"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M3.53699 13.8719H18.6145V21.691H3.53699V13.8719Z"
					fill="white"
				/>
			</mask>
			<mask
				id="mask1_1356_2237"
				style="mask-type:alpha"
				maskUnits="userSpaceOnUse"
				x="12"
				y="10"
				width="10"
				height="10"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12.1718 10.1635H21.5V19.3368H12.1718V10.1635Z"
					fill="white"
				/>
			</mask>
		</svg>`;
		const expected = `<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<mask
				id="mask0_1356_2237"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="3"
				y="13"
				width="16"
				height="9"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M3.53699 13.8719H18.6145V21.691H3.53699V13.8719Z"
					fill="white"
				/>
			</mask>
			<mask
				id="mask1_1356_2237"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="12"
				y="10"
				width="10"
				height="10"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12.1718 10.1635H21.5V19.3368H12.1718V10.1635Z"
					fill="white"
				/>
			</mask>
		</svg>`;

		expect(_.replaceStyleAttribute(source)).toBe(expected);
	});
});

describe('The getStyleReplacement function', () => {
	it('constructs the replacement for a single item', () => {
		expect(_.getStyleReplacement('style="mask-type:alpha"')).toBe(
			`mask-type="alpha"`,
		);
	});

	it('constructs the replacement for multiple items', () => {
		expect(
			_.getStyleReplacement('style="mask-type:alpha;mask-fill:solid"'),
		).toBe(`mask-type="alpha"\n\t\tmask-fill="solid"`);
	});
});
