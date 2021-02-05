import React, { HTMLAttributes, ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";
import { container, containerBorder } from "./styles";
import { Props } from "@guardian/src-helpers";

interface Container extends HTMLAttributes<HTMLDivElement>, Props {
	border?: boolean;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: ReactNode;
}

const Container = ({
	border = false,
	cssOverrides,
	children,
	...props
}: Container) => {
	return (
		<div
			css={[container, border ? containerBorder : "", cssOverrides]}
			{...props}
		>
			{children}
		</div>
	);
};
const defaultProps = {};

Container.defaultProps = { ...defaultProps };

export { Container };
