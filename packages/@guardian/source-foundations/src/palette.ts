// FYI
// packages/@guardian/src-foundations/src/palette.ts SYMLINKS TO
// packages/@guardian/source-foundations/src/palette.ts

// Arrays of colours should have pillar colors first
// e.g. for sport:
// const [sport300, sport400, sport500, sport600, sport800] = colors.blue
const colors = {
	reds: [
		'#660505', //news-100
		'#8B0000', //news-200
		'#AB0613', //news-300
		'#C70000', //news-400, error-400
		'#FF5943', //news-500
		'#FF9081', //news-550, error-500
		'#FFBAC8', //news-600
		'#FFF4F2', //news-800
	],
	oranges: [
		'#672005', //opinion-100
		'#8D2700', //opinion-200
		'#C74600', //opinion-300
		'#E05E00', //opinion-400
		'#FF7F0F', //opinion-500
		'#FF9941', //opinion-550
		'#F9B376', //opinion-600
		'#FEF9F5', //opinion-800
	],
	blues: [
		'#003C60', //sport-100
		'#004E7C', //sport-200
		'#005689', //sport-300
		'#0077B6', //sport-400
		'#00B2FF', //sport-500
		'#90DCFF', //sport-600
		'#F1F8FC', //sport-800
		'#001536', //brand-100
		'#041F4A', //brand-300
		'#052962', //brand-400
		'#007ABC', //brand-500
		'#506991', //brand-600
		'#C1D8FC', //brand-800
		'#0093E0', //focus-400
	],
	browns: [
		'#2B2625', //culture-50
		'#3E3323', //culture-100
		'#574835', //culture-200
		'#6B5840', //culture-300
		'#866D50', //culture-350
		'#A1845C', //culture-400
		'#EACCA0', //culture-500
		'#E7D4B9', //culture-600
		'#EFE8DD', //culture-700
		'#FBF6EF', //culture-800
	],
	pinks: [
		'#510043', //lifestyle-100
		'#650054', //lifestyle-200
		'#7D0068', //lifestyle-300
		'#BB3B80', //lifestyle-400
		'#FFABDB', //lifestyle-500
		'#FEC8D3', //lifestyle-600
		'#FEEEF7', //lifestyle-800
	],
	yellows: [
		'#F3C100', //brandAlt-200
		'#FFD900', //brandAlt-300
		'#FFE500', //brandAlt-400
	],
	greens: [
		'#185E36', //green-300
		'#22874D', //green-400, success-400
		'#58D08B', //green-500, success-500
		'#4B8878', //labs-200
		'#65A897', //labs-300
		'#69D1CA', //labs-400
	],
	grays: [
		'#000000', //neutral-0
		'#121212', //neutral-7
		'#1A1A1A', //neutral-10
		'#333333', //neutral-20
		'#707070', //neutral-46
		'#999999', //neutral-60
		'#DCDCDC', //neutral-86
		'#EDEDED', //neutral-93
		'#F6F6F6', //neutral-97
		'#FFFFFF', //neutral-100
		'#222527', //specialReport-100
		'#303538', //specialReport-200
		'#3F464A', //specialReport-300
		'#595C5F', //specialReport-400
		'#9DA0A2', //specialReport-450
		'#ABC2C9', //specialReport-500
		'#E4E5E8', //specialReport-700
		'#EFF1F2', //specialReport-800
	],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette/t/66411c)
 *
 * Our core brand colour – `brand[400]` – and extended brand colours
 */
export const brand = {
	100: colors.blues[7],
	300: colors.blues[8],
	400: colors.blues[9],
	500: colors.blues[10],
	600: colors.blues[11],
	800: colors.blues[12],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette/t/32d461)
 *
 * Our alternative brand colours
 */
export const brandAlt = {
	200: colors.yellows[0],
	300: colors.yellows[1],
	400: colors.yellows[2],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette/t/70dd5c)
 *
 * Neutral colours
 */
export const neutral = {
	0: colors.grays[0],
	7: colors.grays[1],
	10: colors.grays[2],
	20: colors.grays[3],
	46: colors.grays[4],
	60: colors.grays[5],
	86: colors.grays[6],
	93: colors.grays[7],
	97: colors.grays[8],
	100: colors.grays[9],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette/t/98b901)
 *
 * Error colours
 */
export const error = {
	400: colors.reds[3],
	500: colors.reds[5],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette/t/82798f)
 *
 * Success colours
 */
export const success = {
	400: colors.greens[1],
	500: colors.greens[2],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette/t/97d77e)
 *
 * News colours
 */
export const news = {
	100: colors.reds[0],
	200: colors.reds[1],
	300: colors.reds[2],
	400: colors.reds[3],
	500: colors.reds[4],
	550: colors.reds[5],
	600: colors.reds[6],
	800: colors.reds[7],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette/t/0539ef)
 *
 * Opinion colours
 */
export const opinion = {
	100: colors.oranges[0],
	200: colors.oranges[1],
	300: colors.oranges[2],
	400: colors.oranges[3],
	500: colors.oranges[4],
	550: colors.oranges[5],
	600: colors.oranges[6],
	800: colors.oranges[7],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette/t/957a45)
 *
 * Sport colours
 */
export const sport = {
	100: colors.blues[0],
	200: colors.blues[1],
	300: colors.blues[2],
	400: colors.blues[3],
	500: colors.blues[4],
	600: colors.blues[5],
	800: colors.blues[6],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette/t/068eb2)
 *
 * Culture colours
 */
export const culture = {
	50: colors.browns[0],
	100: colors.browns[1],
	200: colors.browns[2],
	300: colors.browns[3],
	350: colors.browns[4],
	400: colors.browns[5],
	500: colors.browns[6],
	600: colors.browns[7],
	700: colors.browns[8],
	800: colors.browns[9],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette/t/2236b4)
 *
 * Lifestyle colours
 */
export const lifestyle = {
	100: colors.pinks[0],
	200: colors.pinks[1],
	300: colors.pinks[2],
	400: colors.pinks[3],
	500: colors.pinks[4],
	600: colors.pinks[5],
	800: colors.pinks[6],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette/t/59b08c)
 *
 * Labs colours
 */
export const labs = {
	200: colors.greens[3],
	300: colors.greens[4],
	400: colors.greens[5],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette/t/31c634)
 *
 * Special report colours
 */
export const specialReport = {
	100: colors.grays[10],
	200: colors.grays[11],
	300: colors.grays[12],
	400: colors.grays[13],
	450: colors.grays[14],
	500: colors.grays[15],
	700: colors.grays[16],
	800: colors.grays[17],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette/t/188e86)
 *
 * Focus state colour
 */
export const focus = {
	400: colors.blues[13],
};

// Hover colours are snowflakes as they are manipulations of colours from the
// main palette.

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/9280ee)
 *
 * Default theme background colours
 */
export const background = {
	primary: neutral[100],
	secondary: neutral[97],
	inverse: neutral[10],
	ctaPrimary: brand[400],
	ctaPrimaryHover: '#234B8A',
	ctaSecondary: brand[800],
	ctaSecondaryHover: '#ACC9F7',
	ctaTertiaryHover: '#E5E5E5',
	input: neutral[100],
	inputChecked: brand[500],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/63cc10)
 *
 * Brand theme background colours
 */
export const brandBackground = {
	primary: brand[400],
	inputChecked: neutral[100],
	ctaPrimary: neutral[100],
	ctaPrimaryHover: '#E0E0E0',
	ctaSecondary: brand[600],
	ctaSecondaryHover: '#234B8A',
	ctaTertiaryHover: brand[300],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/743232)
 *
 * Alternative brand theme background colours
 */
export const brandAltBackground = {
	primary: brandAlt[400],
	ctaPrimary: neutral[7],
	ctaPrimaryHover: '#454545',
	ctaSecondary: brandAlt[200],
	ctaSecondaryHover: '#F2AE00',
	ctaTertiaryHover: '#FFD213',
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/69c92f)
 *
 * Default theme border colours
 */
export const border = {
	primary: neutral[60],
	secondary: neutral[86],
	success: success[400],
	error: error[400],
	ctaTertiary: brand[400],
	input: neutral[60],
	inputChecked: brand[500],
	inputHover: brand[500],
	inputActive: brand[500],
	focusHalo: focus[400],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/04883b)
 *
 * Brand theme border colours
 */
export const brandBorder = {
	primary: brand[600],
	secondary: brand[600],
	success: success[500],
	error: error[500],
	ctaTertiary: neutral[100],
	input: brand[800],
	inputChecked: neutral[100],
	inputHover: neutral[100],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/b/21c6cc)
 *
 * Alternative brand theme border colours
 */
export const brandAltBorder = {
	ctaTertiary: neutral[7],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/593cc9)
 *
 * Default theme line colours
 */
export const line = {
	primary: neutral[86],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/66455d)
 *
 * Brand theme line colours
 */
export const brandLine = {
	primary: brand[600],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/89955e)
 *
 * Alternative brand theme line colours
 */
export const brandAltLine = {
	primary: neutral[7],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/85d3b0)
 *
 * Default theme text colours
 */
export const text = {
	primary: neutral[7],
	supporting: neutral[46],
	success: success[400],
	error: error[400],
	ctaPrimary: neutral[100],
	ctaSecondary: brand[400],
	ctaTertiary: brand[400],
	anchorPrimary: brand[500],
	anchorSecondary: neutral[7],
	userInput: neutral[7],
	inputLabel: neutral[7],
	inputLabelSupporting: neutral[46],
	inputChecked: brand[400], //choice card only
	inputHover: brand[400], //choice card only
	groupLabel: neutral[7],
	groupLabelSupporting: neutral[46],
	newsInverse: news[550],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/244480)
 *
 * Brand theme text colours
 */
export const brandText = {
	primary: neutral[100],
	supporting: brand[800],
	success: success[500],
	error: error[500],
	ctaPrimary: brand[400],
	ctaSecondary: neutral[100],
	ctaTertiary: neutral[100],
	anchorPrimary: neutral[100],
	anchorPrimaryHover: brandAlt[400],
	userInput: neutral[100],
	inputLabel: neutral[100],
	inputLabelSupporting: brand[800],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-colour--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/11d5fd)
 *
 * Alternative brand theme text colours
 */
export const brandAltText = {
	primary: neutral[7],
	supporting: neutral[60],
	ctaPrimary: neutral[100],
	ctaSecondary: neutral[7],
	ctaTertiary: neutral[7],
	anchorPrimary: neutral[7],
};
