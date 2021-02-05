import React from "react";
import { Label, labelBrand } from "../index";
import { ThemeProvider } from "@emotion/react";
import { storybookBackgrounds } from "@guardian/src-helpers";

export const withSupportingTextLight = () => (
	<Label text="Email" supporting="alex@example.com" />
);

withSupportingTextLight.story = {
	name: `with supporting text light`,
};

export const withSupportingTextBlue = () => (
	<ThemeProvider theme={labelBrand}>
		<Label text="Email" supporting="alex@example.com" />
	</ThemeProvider>
);

withSupportingTextBlue.story = {
	name: `with supporting text blue`,
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
	},
};
