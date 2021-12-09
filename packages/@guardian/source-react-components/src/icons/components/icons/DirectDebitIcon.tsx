import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const DirectDebitIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.28998 14.7864H4.19315C4.19315 14.7864 6.07754 14.7484 6.05854 16.4611C6.03975 17.7365 4.23157 17.9267 4.23157 17.9267H2.29019L2.28998 14.7864ZM7.98364 20.9344C8.03709 21.1835 8.21728 21.458 8.8184 21.4862C9.61768 21.505 10.0745 21.2004 10.0745 21.2004V21.7905C10.0745 21.7905 9.19904 22.0001 8.78019 22.0001C8.34256 22.0001 7.04823 21.9047 7.04823 20.7058C7.04823 19.7353 8.11413 19.4306 8.72298 19.4306C9.78889 19.4686 10.3027 19.8495 10.2837 20.9342C10.2837 20.9498 8.53006 20.9381 7.98364 20.9344ZM7.98614 20.4581H9.44646C9.44646 20.4581 9.44646 19.9063 8.74219 19.9063C8.21248 19.9063 8.03918 20.1919 7.98614 20.4581ZM12.6058 19.8622C12.8171 19.633 13.1718 19.4494 13.7669 19.4494C14.947 19.4494 15.1374 20.4391 15.1184 20.7055C15.0994 20.972 15.0042 21.9807 13.6341 21.9807C13.1165 21.9807 12.7997 21.804 12.606 21.5848V21.9045H11.6733V18.4785H12.606L12.6058 19.8622ZM13.4054 21.4478C13.9573 21.4286 14.2047 20.9532 14.2047 20.7248C14.2047 20.4963 14.0713 20.0205 13.367 20.0205C12.8206 20.0205 12.6542 20.4333 12.6058 20.635V20.8832C12.6538 21.0889 12.821 21.4478 13.4054 21.4478ZM21.4564 21.3528L21.4752 21.8859C21.4752 21.8859 21.0376 21.9809 20.7521 21.9809C20.4667 21.9809 19.724 21.8097 19.724 21.0862V19.9823H18.944V19.4876H19.724V18.8976H20.6759V19.4876H21.4564V19.9823H20.6759V20.9342C20.6759 20.9342 20.6759 21.41 21.0568 21.41C21.4372 21.41 21.4564 21.3528 21.4564 21.3528ZM18.5633 15.3002H19.6672V17.9457H20.5995V15.3002H21.7226V14.7482H18.5633V15.3002ZM18.1825 15.4334L18.2967 14.8814C18.2967 14.8814 17.8209 14.6722 16.9836 14.6722C16.1651 14.6722 14.852 15.129 14.852 16.3661C14.852 17.5842 16.2413 18.0029 17.0978 18.0029C17.9543 18.0029 18.2397 17.8697 18.2397 17.8697L18.1447 17.2606C18.1447 17.2606 17.7639 17.3748 17.1166 17.3748C16.4885 17.3558 15.8419 16.861 15.8419 16.3091C15.8607 15.8143 16.4315 15.2622 17.1742 15.2622C17.7449 15.2622 18.1825 15.4334 18.1825 15.4334ZM9.76989 14.7674C9.76989 14.7674 11.3306 14.6914 11.3306 15.6048C11.3306 16.3853 10.4364 16.4423 10.4364 16.4423C10.4364 16.4423 10.6836 16.4803 10.798 16.6515C10.893 16.8038 11.5211 17.9459 11.5211 17.9459H10.5692C10.5692 17.9459 10.4169 17.7555 10.3407 17.6225C10.2837 17.4892 10.1123 17.2036 10.1123 17.2036C10.1123 17.2036 9.97931 16.7278 9.52226 16.7278C9.51077 16.7278 9.32494 16.7207 9.17962 16.7152V17.9459H8.26614V14.7674H9.76989ZM9.17983 16.1949H9.67489C9.67489 16.1949 10.3599 16.1567 10.3979 15.7381C10.4172 15.3384 9.73209 15.2812 9.73209 15.2812H9.17983V16.1949ZM13.0054 16.6898H14.5281V16.0997H13.0054V15.3764H14.6616V14.7674H12.0733V17.9459H14.6808V17.3748H13.0056L13.0054 16.6898ZM16.7167 19.1258H17.6494V18.4785H16.7167V19.1258ZM16.7167 21.9047H17.6494V19.4876H16.7167V21.9047ZM6.55359 17.9459H7.46708V14.7674H6.55359V17.9459ZM2.28998 18.7454H4.19315C4.19315 18.7454 6.07754 18.7069 6.05854 20.4201C6.03975 21.6952 4.23157 21.8859 4.23157 21.8859H2.29019L2.28998 18.7454ZM3.22267 21.2958H3.83173C3.83173 21.2958 5.08785 21.2196 5.08785 20.2489C5.08785 19.2782 3.75552 19.183 3.75552 19.183H3.22267V21.2958ZM3.22267 17.3368H3.83173C3.83173 17.3368 5.08785 17.2416 5.08785 16.2899C5.08785 15.3002 3.75552 15.2242 3.75552 15.2242H3.22267V17.3368ZM11.9546 6.38565V12.7539C11.9546 12.7539 8.26201 12.0877 8.26201 9.55643C8.26222 7.53758 10.9956 6.64769 11.9546 6.38565ZM11.9546 6.26684C9.73527 6.10628 4.70308 7.1465 4.70308 9.42301C4.70308 10.9073 7.36773 13.0774 11.7071 13.1344C11.8784 13.1344 16.8078 12.9439 16.7318 7.65283C16.6679 3.20881 13.3418 2.43041 12.2782 2.2949V2.02409C16.5184 2.29323 19.8533 4.84326 19.8533 7.93826C19.8533 11.212 16.1228 13.8764 11.5359 13.8764C6.9491 13.8764 3.23754 11.2118 3.23754 7.93826C3.23754 4.66474 6.94889 2.00008 11.5359 2.00008C11.6764 2.00008 11.8161 2.00259 11.9548 2.0076L11.9546 6.26684Z"
			/>
		</svg>
	);
};
