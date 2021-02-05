import React from "react";
import { css } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import { textSans } from "@guardian/src-foundations/typography";
import { Link, linkDefault } from "../index";

const text = css`
	${textSans.medium()}
`;

export const inlineLink = () => (
	<ThemeProvider theme={linkDefault}>
		<p css={text}>
			You can <Link href="#">read more</Link> about our services
		</p>
	</ThemeProvider>
);
inlineLink.story = { name: "inline link" };
