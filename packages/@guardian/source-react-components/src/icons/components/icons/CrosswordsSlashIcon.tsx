import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const CrosswordsSlashIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.32007 20.2449L20.27 2.32001L21.67 3.745L3.74506 21.6699L2.32007 20.2449ZM12.495 4.495V7.46999L11.495 8.49499V4.495H4.49506V11.495H8.49505L7.47005 12.495H4.49506V15.495L2.99507 16.995V3.495L3.49506 2.99501H16.995L15.495 4.495H12.495ZM5.97006 5.195H6.32005V7.64499H6.79505V8.04499H5.27006V7.64499H5.74506V5.82L5.19506 5.895V5.545L5.97006 5.195ZM11.495 19.4949V16.52L16.495 11.495H19.495V8.49499L20.995 6.99499V20.4949L20.495 20.9949H6.99505L8.49505 19.4949H11.495Z"
			/>
		</svg>
	);
};