import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { brand, iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../@types/Icons';

interface LoadingCircleIconProps extends IconProps {
	additionalCss?: SerializedStyles;
}

const circleLineThickness = 5;

const lightblueStyles = css`
	stroke: #a5c0e8;
	stroke-width: ${circleLineThickness};
	fill: transparent;
`;

const darkblueStyles = css`
	stroke: ${brand['400']};
	stroke-dasharray: 82;
	stroke-dashoffset: 82;
	stroke-width: ${circleLineThickness};
	fill: transparent;
`;

export const SvgSpinner = ({
	size,
}: LoadingCircleIconProps): EmotionJSX.Element => {
	return (
		<svg width={size ? iconSize[size] : undefined} viewBox="0 0 30 30">
			<g>
				<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					from="0 15 15"
					to="360 15 15"
					dur="2.5s"
					repeatCount="indefinite"
				/>
				<circle cx="15" cy="15" r="12.6" css={lightblueStyles} />
				<path
					css={darkblueStyles}
					d="M15,15 m0,-12.6 a 12.6,12.6 0 0,1 0,25.2 a 12.6,12.6 0 0,1 0,-25.2"
				>
					<animate
						attributeName="stroke-dashoffset"
						dur="3.5s"
						to="-82"
						repeatCount="indefinite"
					/>
				</path>
			</g>
		</svg>
	);
};
