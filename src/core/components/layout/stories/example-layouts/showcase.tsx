import { css } from "@emotion/core"
import { background, border, neutral } from "@guardian/src-foundations/palette"
import { space } from "@guardian/src-foundations"
import { from } from "@guardian/src-foundations/mq"
import { Lines } from "@guardian/src-ed-lines"
import { Container, Stack, Columns, Column } from "../../index"

const meta = css`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`

const byline = css`
	flex: 1;
	p {
		margin: 0;
	}
`

const img = css`
	background-color: ${background.secondary};
`

const sharingIcon = css`
	${img};
	flex: 0 0 auto;
	height: 30px;
	width: 30px;
`

const article = css`
	${from.tablet} {
		border-right: 1px solid ${border.secondary};
		padding-right: ${space[1]}px;
	}
`

const mainMediaContainer = css`
	height: 226px;
	${img};

	${from.tablet} {
		position: relative;
		height: 432px;
		width: 722px;
	}
`

const mainMedia = css`
	${from.tablet} {
		position: absolute;
	}
`

const Showcase = () => {
	return (
		<div>
			<Container>
				<h1>Culture features</h1>
				<Columns collapseBelow="tablet">
					<Column width={2 / 3}>
						<article css={article}>
							<p>Television</p>
							<h2>
								Micheala Coel on the hookup generation: "They'll
								study us when we're dead and gone"
							</h2>
							<div css={mainMediaContainer}>
								<div css={mainMedia}>
									Placedholder image: main media
								</div>
							</div>
							<p>
								She scored a cult hit with Chewing Gum. Now
								she's back with a new searing drama...
							</p>
							<Lines effect="straight" />
							<div css={meta}>
								<div css={byline}>
									<p>Jim Waterson</p>
									<p>Media editor</p>
								</div>
								<div css={sharingIcon}></div>
							</div>
							<p>
								Hong Kong's legislative assembly descended into
								chaos on Saturday as lawmakers for and against
								amendments to the territory's...
							</p>
						</article>
					</Column>
				</Columns>
			</Container>
		</div>
	)
}

export const tabletShowcase = () => {
	return <Showcase />
}

tabletShowcase.story = {
	name: "tablet showcase",
	parameters: { viewport: { defaultViewport: "tablet" } },
}

export const mobileShowcase = () => {
	return <Showcase />
}

mobileShowcase.story = {
	name: "mobile showcase",
	parameters: { viewport: { defaultViewport: "mobileMedium" } },
}
