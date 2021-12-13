import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';

export type SvgGuardianLogoProps = {
	/**
	 * The text colour.
	 *
	 * This should probably come from
	 * [`@guardian/src-foundation`](https://theguardian.design/2a1e5182b/p/2668c8-code).
	 */
	textColor?: string;
	/**
	 * The width the SVG will display at (height is automatically adjusted
	 * to maintain the correct aspect ratio).
	 */
	width?: number;
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-svgguardianlogo--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/8909e0-assets/t/184eb9) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/brand/SvgGuardianLogo.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * The Guardian logo.
 */

export const SvgGuardianLogo = ({
	textColor,
	width,
}: SvgGuardianLogoProps): EmotionJSX.Element => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 300 100"
			fill={textColor}
			width={width}
		>
			<path d="M67.41,54.5l5.15-2.69V11.51H68.7L59.23,24.08h-1l.55-14H99.69l.55,14.05h-1.1l-9.2-12.57H86V51.72l5.06,2.68v1.39H67.41Zm37.52-1.85V8l-4-1.57V5.59L115.24,3h1.47V24.17l.36-.37a19.1,19.1,0,0,1,12.24-4.62c6.25,0,9,3.51,9,10.17v23.3l3.31,1.84v1.39H122.87V54.49l3.4-1.84V29.35c0-3.61-1.56-5.08-4.6-5.08a7.79,7.79,0,0,0-5,1.66v26.9L120,54.68V56H101.26V54.68ZM153.68,39c.37,7.4,3.68,13.13,11.5,13.13,3.77,0,6.43-1.75,8.92-3.05v1.48A17.5,17.5,0,0,1,160.3,57C148.25,57,142,50.24,142,38.5c0-11.46,6.71-18.58,17.66-18.58,10.3,0,15.63,5.18,15.63,18.77v.37H153.68V39Zm-.19-1.66,10.67-.65c0-9.15-1.56-15.25-4.69-15.25C156.16,21.4,153.49,28.42,153.49,37.3ZM0,73.63C0,54.21,12.78,47.28,27,47.28c6.07,0,11.77,1,15,2.31l.28,13.59H40.92L32.56,50.05a12.08,12.08,0,0,0-5.34-.83c-7.54,0-11.49,8.79-11.31,23.21C16.09,89.72,19,97.57,26,97.57a9.36,9.36,0,0,0,4.14-.74V78.34l-4.6-2.68V74.18H47.82v1.67l-4.59,2.49V96.56a49.32,49.32,0,0,1-16.74,2.86C10.3,99.51,0,91.93,0,73.63Zm47.55-9.06V63.46l15-2.59,1.65.09V90.55c0,3.6,1.75,4.62,4.6,4.62a6.31,6.31,0,0,0,4.88-2.31V66.42l-4-1.76v-1.2l14.9-2.68,1.47.09V94.8L90,96.46v1.11L75.32,99.42l-1.47-.09V94.89h-.37a16.71,16.71,0,0,1-11.22,4.72c-7.17,0-10.39-4.26-10.39-10.73V66.42l-4.32-1.85ZM143,60.78l1.2.09V71.78h.36c1.57-8,5.16-11,9.39-11a5,5,0,0,1,1.83.28V72.33a13.89,13.89,0,0,0-3-.27,18.42,18.42,0,0,0-8.09,1.66V95.36l3.4,1.84v1.39H128.76V97.2l3.49-1.94V65.77l-4.05-1.2v-1L143,60.78Z" />
			<path d="M180.44,61.7V50.15l-4-1.48v-.93L191.48,45l1.47.18V94.71l4.14,1.48v1.29l-14.9,2-1.2-.09V95.35h-.36a13.09,13.09,0,0,1-9.84,4.16c-8.1,0-14.08-6.19-14.08-19,0-13.4,6.9-20.06,17.29-20.06A14,14,0,0,1,180.44,61.7Zm0,31.71V63.83a5.28,5.28,0,0,0-4.14-1.29c-4,.18-6.53,6.28-6.53,17.19,0,9.8,1.75,15.26,7.18,15.07a5.28,5.28,0,0,0,3.49-1.39Zm33.11-32.63,1.29.09V95.26l3.4,1.85V98.5H198.93V97.11l3.49-1.94V66.32l-4.14-1.66V63.55l15.27-2.77Zm1.38-9.34a6.5,6.5,0,0,1-6.62,6.38,6.36,6.36,0,0,1-6.53-6.38A6.43,6.43,0,0,1,208.31,45a6.57,6.57,0,0,1,6.62,6.47Zm46.81,43.82V66l-4-1.48V63.09l14.89-2.77,1.48.09v4.35h.36A19.67,19.67,0,0,1,287.12,60c6.44,0,9.39,3.05,9.39,9.89V95.08L300,97v1.39H280.69V97l3.49-1.94V70.76c0-3.79-1.65-5.26-4.69-5.26a8,8,0,0,0-5.15,1.66v28.2l3.4,1.94v1.39H258.43V97.3ZM240.31,76.87V72c0-7.4-1.56-9.8-6.16-9.8-.55,0-1,.09-1.56.09l-8.1,11h-1.1V63.09A42.73,42.73,0,0,1,237,60.78c9.93,0,15.64,2.77,15.64,11.09V95.82l3.58.92v.93A15.62,15.62,0,0,1,249,99.33c-4.88,0-7.27-1.57-8.28-4.34h-.37c-2.11,2.86-5.06,4.43-9.65,4.43-5.89,0-9.94-3.69-9.94-10.07,0-6.2,3.77-9.53,11.59-11l8-1.48Zm0,16.54V78.62l-2.48.19c-3.86.37-5.34,2.86-5.34,8.32,0,6,1.94,7.58,4.7,7.58a3.65,3.65,0,0,0,3.12-1.3ZM110.73,76.87V72c0-7.4-1.56-9.8-6.16-9.8-.55,0-1,.09-1.57.09l-8.09,11h-1.1V63.09a42.63,42.63,0,0,1,13.61-2.31c9.93,0,15.63,2.77,15.63,11.09V95.82l3.59.92v.93a15.63,15.63,0,0,1-7.27,1.66c-4.87,0-7.26-1.57-8.27-4.34h-.37c-2.12,2.86-5.06,4.43-9.66,4.43-5.88,0-9.93-3.69-9.93-10.07,0-6.2,3.77-9.53,11.59-11l8-1.48Zm0,16.54V78.62l-2.48.19c-3.87.37-5.34,2.86-5.34,8.32,0,6,1.93,7.58,4.69,7.58A3.46,3.46,0,0,0,110.73,93.41Z" />
		</svg>
	);
};
