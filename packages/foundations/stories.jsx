import React from "react";
import { css } from "@emotion/core";
import { storiesOf } from "@storybook/react";
import { palette } from "./palette";
import { mq } from "./media-queries";

storiesOf("Foundations", module)
	.add("palette", () => <div>Colours 🎨</div>)
	.add("typography", () => <div>Fonts ✍️</div>)
	.add("breakpoints", () => (
		<div
			css={css`
				width: 500px;
				height: 300px;
				background-color: ${palette.brand.pastel};

				${mq({ from: "tablet" })} {
					background-color: ${palette.brand.main};
				}
				${mq({ from: "desktop" })} {
					background-color: ${palette.brand.dark};
				}
			`}
		/>
	));
