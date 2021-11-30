import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const SvgDirectDebitWide = ({ size }: IconProps) => (
	<svg
		viewBox="0 0 50 20"
		xmlns="http://www.w3.org/2000/svg"
		/**
		 * This is a one-off icon that doesn't conform to the standard square
		 * shape
		 * */
		height={size ? iconSize[size] : undefined}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M23.8032 5.14926H26.207C26.207 5.14926 28.587 5.10127 28.563 7.26451C28.5392 8.87526 26.2555 9.11551 26.2555 9.11551H23.8035V5.14926H23.8032ZM30.9944 12.9143C31.0619 13.2289 31.2895 13.5757 32.0487 13.6113C33.0582 13.635 33.6352 13.2503 33.6352 13.2503V13.9955C33.6352 13.9955 32.5295 14.2603 32.0005 14.2603C31.4477 14.2603 29.813 14.1398 29.813 12.6255C29.813 11.3998 31.1592 11.015 31.9282 11.015C33.2744 11.063 33.9234 11.544 33.8994 12.914C33.8994 12.9338 31.6845 12.919 30.9944 12.9143ZM30.9976 12.3128H32.842C32.842 12.3128 32.842 11.6158 31.9525 11.6158C31.2834 11.6158 31.0645 11.9765 30.9976 12.3128ZM36.8322 11.5601C37.0991 11.2706 37.5471 11.0388 38.2987 11.0388C39.7892 11.0388 40.0297 12.2888 40.0057 12.6253C39.9817 12.9618 39.8615 14.2358 38.131 14.2358C37.4772 14.2358 37.0772 14.0127 36.8325 13.7358V14.1395H35.6545V9.8125H36.8325V11.5601H36.8322ZM37.8422 13.5628C38.5392 13.5385 38.8517 12.938 38.8517 12.6495C38.8517 12.361 38.6832 11.76 37.7937 11.76C37.1036 11.76 36.8934 12.2814 36.8322 12.5361V12.8497C36.8928 13.1094 37.1041 13.5628 37.8422 13.5628ZM48.0107 13.4428L48.0344 14.116C48.0344 14.116 47.4817 14.236 47.1212 14.236C46.7607 14.236 45.8227 14.0198 45.8227 13.106V11.7118H44.8374V11.087H45.8227V10.3418H47.0249V11.087H48.0107V11.7118H47.0249V12.914C47.0249 12.914 47.0249 13.515 47.506 13.515C47.9864 13.515 48.0107 13.4428 48.0107 13.4428ZM44.3567 5.79826H45.7509V9.13951H46.9284V5.79826H48.3469V5.101H44.3567V5.79826ZM43.8757 5.96651L44.0199 5.26925C44.0199 5.26925 43.4189 5.00501 42.3615 5.00501C41.3277 5.00501 39.6692 5.58202 39.6692 7.14452C39.6692 8.68302 41.424 9.21176 42.5057 9.21176C43.5875 9.21176 43.9479 9.04351 43.9479 9.04351L43.828 8.27426C43.828 8.27426 43.3469 8.41851 42.5294 8.41851C41.7362 8.39452 40.9195 7.76951 40.9195 7.07252C40.9432 6.44752 41.6642 5.75026 42.6022 5.75026C43.3229 5.75026 43.8757 5.96651 43.8757 5.96651ZM33.2505 5.12526C33.2505 5.12526 35.2217 5.02927 35.2217 6.18302C35.2217 7.16878 34.0922 7.24077 34.0922 7.24077C34.0922 7.24077 34.4045 7.28877 34.549 7.50501C34.669 7.69726 35.4622 9.13977 35.4622 9.13977H34.2599C34.2599 9.13977 34.0677 8.89926 33.9714 8.73128C33.8995 8.56303 33.6829 8.20227 33.6829 8.20227C33.6829 8.20227 33.515 7.60127 32.9377 7.60127C32.9232 7.60127 32.6885 7.5923 32.5049 7.58544V9.13977H31.3512V5.12526H33.2505ZM32.5052 6.92827H33.1305C33.1305 6.92827 33.9957 6.88001 34.0437 6.35127C34.068 5.84652 33.2027 5.77426 33.2027 5.77426H32.5052V6.92827ZM37.3369 7.55327H39.2602V6.80802H37.3369V5.89452H39.4287V5.12526H36.1597V9.13977H39.453V8.41851H37.3372V7.55327H37.3369ZM42.0244 10.63H43.2024V9.8125H42.0244V10.63ZM42.0244 14.1398H43.2024V11.087H42.0244V14.1398ZM29.1882 9.13977H30.342V5.12526H29.1882V9.13977ZM23.8032 10.1495H26.207C26.207 10.1495 28.587 10.101 28.563 12.2648C28.5392 13.8753 26.2555 14.116 26.2555 14.116H23.8035V10.1495H23.8032ZM24.9812 13.3708H25.7505C25.7505 13.3708 27.337 13.2745 27.337 12.0485C27.337 10.8225 25.6542 10.7023 25.6542 10.7023H24.9812V13.3708ZM24.9812 8.37052H25.7505C25.7505 8.37052 27.337 8.25026 27.337 7.04826C27.337 5.79826 25.6542 5.70227 25.6542 5.70227H24.9812V8.37052ZM13.0097 7.53903V15.5823C13.0097 15.5823 8.34598 14.7408 8.34598 11.5438C8.34624 8.99393 11.7985 7.86999 13.0097 7.53903ZM13.0097 7.38898C10.2067 7.18618 3.851 8.5 3.851 11.3753C3.851 13.25 7.2165 15.9908 12.6972 16.0628C12.9135 16.0628 19.1395 15.8223 19.0435 9.13951C18.9628 3.52664 14.7618 2.54351 13.4185 2.37236V2.03033C18.774 2.37025 22.986 5.59098 22.986 9.5C22.986 13.6348 18.2742 17 12.481 17C6.68775 17 2 13.6345 2 9.5C2 5.36551 6.68749 2 12.481 2C12.6585 2 12.8349 2.00317 13.01 2.00949V7.38898H13.0097Z"
		/>
	</svg>
);
