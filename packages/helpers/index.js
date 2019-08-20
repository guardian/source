import { palette } from "@guardian/src-foundations";

const storybookBackgrounds = {
	light: { name: "light", value: palette.neutral[100] },
	dark: { name: "dark", value: palette.brand.main }
};

Object.freeze(storybookBackgrounds);

export { storybookBackgrounds };
