import { neutral, svgBackgroundImage } from '@guardian/source-foundations';

const spacing = 15;

const starSvg = (rating: number): string => {
	const stars = Array(4)
		.fill('')
		.map((_, i) => {
			const position = i + 1;
			if (position < rating) {
				return `<use xlink:href="#star"
							x="${position * spacing}"
							fill="${neutral[7]}"
						/>`;
			}
			return `<use x="${position * spacing}"
		xlink:href="${`#star`}"
		clip-path="${`url(#clip-star)`}"
		stroke="${neutral[7]}"
		stroke-width="2"
		fill="transparent"
	/>`;
		})
		.join('');
	return `<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 -2 ${spacing * 5} 16"
		>
			<defs>
				<clipPath id="clip-star">
					<use xlink:href="#star" stroke="none" />
				</clipPath>
			</defs>
			<path id="star"
				d="M0 5.2L3.7 8l-1.4 4.6.5.4 3.7-2.8 3.7 2.8.5-.4L9.3 8 13 5.2l-.2-.6H8.2L6.8 0h-.6L4.8 4.6H.2l-.2.6z"
			/>
			${stars}
		</svg>
		`;
};

export const starBackground = (rating: number): string =>
	svgBackgroundImage(starSvg(rating));
