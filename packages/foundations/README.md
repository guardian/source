# Foundations

The Guardian's design tokens are the atoms from which all our visual design is built. They are intended for use with a CSS-in-JS library such as Emotion.

## Install

```sh
$ yarn add @guardian/src-foundations
```

## Use

### [Palette](https://zeroheight.com/2a1e5182b/p/606d47)

```ts
import { palette } from "@guardian/src-foundations";

const backgroundColour = css`
	background-color: ${palette.neutral[97]};
`;
```

### [Media queries](https://zeroheight.com/2a1e5182b/p/41be19/b/332713)

```ts
import { mq } from "@guardian/src-foundations";

const styles = css`
	padding: 0 10px;

	${mq({ from: 'mobileLandscape' })} {
		padding: 0 20px;
	}

	${mq({ from: 'phablet', until: 'desktop' })} {
		padding: 0 32px;
	}

	${mq({ until: 'wide' })} {
		padding: 0 40px;
	}
`;
```

Output:

```css
.class-name {
	padding: 0 10px;
}

@media (min-width: 375px) {
	.class-name {
		padding: 0 20px;
	}
}

@media (min-width: 660px) and (max-width: 980px) {
	.class-name {
		padding: 0 32px;
	}
}

@media (max-width: 1300px) {
	.class-name {
		padding: 0 40px;
	}
}
```
