import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import { asChromaticStory } from '../../../../../lib/story-intents';
import { palette } from './palette';

interface Props {
	shade: string;
	value: string;
	category: string;
}

const Colour = ({ shade, value, category }: Props) => (
	<div className="tokens__list__row">
		<div className="tokens__list__value">
			<div
				className="tokens__list__value__swatch"
				style={{
					backgroundColor: value,
				}}
			/>
		</div>
		<span>
			<pre>{`palette.${category}[${shade}]`}</pre>
		</span>
	</div>
);

/**
 *
 * The colour palette is organised by type e.g. `error`, or pillar e.g. `opinion`.
 *
 * ## Example
 *
 * ```ts
 * import { palette } from '@guardian/source-foundations';
 *
 * const headline = css`
 * 	color: ${palette.neutral[100]};
 * 	background: ${palette.brand[400]};
 * `;
 * ```
 *
 */
export const Palette = () => (
	<div className="columns">
		<div className="tokens__list">
			<ul>
				{Object.entries(palette).map(([category, shades]) => {
					return (
						<li className="tokens__list__item" key={category}>
							<summary className="tokens__list__category">
								{category}
							</summary>
							<div>
								{Object.entries(shades).map(
									([shade, value]) => (
										<Colour
											key={category}
											shade={shade}
											value={value}
											category={category}
										/>
									),
								)}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
		<div className="aside">
			<aside>
				<h3 className="aside__title">Deprecated colour tokens</h3>
				<p>
					The following context-specific tokens were available in V3,
					and are deprecated in V4.
				</p>
				<ul className="aside__dropdown">
					<li>
						<details>
							<summary>background</summary>
							background.primary, background.secondary,
							background.inverse, background.ctaPrimary,
							background.ctaPrimaryHover, background.ctaSecondary,
							background.ctaSecondaryHover,
							background.ctaTertiaryHover, background.input,
							background.inputChecked
						</details>
					</li>
					<li>
						<details>
							<summary>brandBackground</summary>
							brandBackground.primary, brandBackground.ctaPrimary,
							brandBackground.ctaPrimaryHover,
							brandBackground.ctaSecondary,
							brandBackground.ctaSecondaryHover,
							brandBackground.ctaTertiaryHover,
							brandBackground.inputChecked
						</details>
					</li>
					<li>
						<details>
							<summary>brandAltBackground</summary>
							brandAltBackground.primary,
							brandAltBackground.ctaPrimary,
							brandAltBackground.ctaPrimaryHover,
							brandAltBackground.ctaSecondary,
							brandAltBackground.ctaSecondaryHover,
							brandAltBackground.ctaTertiaryHover
						</details>
					</li>
					<li>
						<details>
							<summary>border</summary>
							border.primary, border.secondary, border.success,
							border.error, border.ctaTertiary, border.input,
							border.inputChecked, border.inputHover,
							border.inputActive, border.focusHalo
						</details>
					</li>
					<li>
						<details>
							<summary>brandBorder</summary>
							brandBorder.primary, brandBorder.secondary,
							brandBorder.success, brandBorder.error,
							brandBorder.ctaTertiary, brandBorder.input,
							brandBorder.inputChecked, brandBorder.inputHover
						</details>
					</li>
					<li>
						<details>
							<summary>text</summary>
							text.primary, text.supporting, text.success,
							text.error, text.ctaPrimary, text.ctaSecondary,
							text.ctaTertiary, text.anchorPrimary,
							text.anchorSecondary, text.userInput,
							text.inputLabel, text.inputError,
							text.inputLabelSupporting, text.inputChecked,
							text.inputHover, text.groupLabel,
							text.groupLabelSupporting, text.newsInverse
							text.inputChecked, text.inputHover
						</details>
					</li>
					<li>
						<details>
							<summary>brandAltText</summary>
							brandText.primary, brandText.supporting,
							brandText.success, brandText.error,
							brandText.ctaPrimary, brandText.ctaSecondary,
							brandText.ctaTertiary, brandText.anchorPrimary,
							brandText.anchorPrimaryHover, brandText.userInput,
							brandText.inputLabel, brandText.inputLabelSupporting
						</details>
					</li>
					<li>
						<details>
							<summary>brandAltText</summary>
							brandAltText.primary, brandAltText.supporting,
							brandAltText.ctaPrimary, brandAltText.ctaSecondary,
							brandAltText.ctaTertiary, brandAltText.anchorPrimary
						</details>
					</li>
				</ul>
				<ul className="aside__list">
					<li>brandAltBorder.ctaTertiary</li>
					<li>line.primary</li>
					<li> brandLine.primary</li>
					<li>brandAltLine.primary</li>
				</ul>
			</aside>
		</div>
	</div>
);

export default {
	component: Palette,
	title: 'Packages/source-foundations/Palette',
	parameters: {
		previewTabs: { canvas: { hidden: true } },
	},
};

const Template: Story = (args) => <Palette {...args} />;

asChromaticStory(Template);
