export const SvgRoundelFilled = ({
	background,
	text,
}: {
	background: string;
	text: string;
}) => {
	return (
		<svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
			<circle cx="21" cy="21" r="21" fill={background} />
			<path
				d="M33.7 22.15l-2.16.96v9.94a17.44 17.44 0 01-7.27 3.58V22.9l-2.3-.81v-.6H33.7v.66z
				M22.95 5.6h-.06c-4.86 0-7.64 6.55-7.5 15.38-.14 8.87 2.64 15.43 7.5 15.43h.06v.68c-7.28.48-17.23-4.94-17.09-16.07-.14-11.17 9.8-16.6 17.1-16.1v.68zm1.47-.72c2.85.44 6.1 2.31 7.32 3.64v6.13h-.7l-6.62-9.09v-.68z"
				fill={text}
			/>
		</svg>
	);
};
