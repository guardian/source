import { css } from "@emotion/core"
import {
	background,
	brandBackground,
	brandText,
	border,
} from "@guardian/src-foundations/palette"
import { space } from "@guardian/src-foundations"
import { from } from "@guardian/src-foundations/mq"
import { textSans } from "@guardian/src-foundations/typography"
import { Lines } from "@guardian/src-ed-lines"
import { Container, Tiles } from "../../index"

const img = css`
	background-color: ${background.secondary};
	height: 210px;
`

const card = css``

const cardText = css`
	${textSans.medium()};
	background-color: ${brandBackground.primary};
	color: ${brandText.primary};
`

const Consents = () => {
	return (
		<div>
			<Container>
				<p>Your registration</p>
				<Lines effect="straight" />
				<h1>Newsletters</h1>
				<p>Step indicator</p>
				<h2>Free newsletters from The Guardian</h2>
				<Tiles columns={2}>
					<div css={card}>
						<div css={img}>Image placeholder</div>
						<div css={cardText}>
							<h3>The Guardian Today</h3>
							<p>Every day</p>
							<p>The headlines, the analysis, the debate...</p>
						</div>
					</div>
					<div>
						<div css={img}>Image placeholder</div>
						<div css={cardText}>
							<h3>Green Light</h3>
							<p>Weekly</p>
							<p>
								Environment: the most important stories for...
							</p>
						</div>
					</div>
					<div>
						<div css={img}>Image placeholder</div>
						<div css={cardText}>
							<h3>The Long Read</h3>
							<p>Every Saturday</p>
							<p>Get lost in a great story...</p>
						</div>
					</div>
					<div>
						<div css={img}>Image placeholder</div>
						<div css={cardText}>
							<h3>Bookmarks</h3>
							<p>Every Sunday</p>
							<p>Kick back and relax on a Sunday with our...</p>
						</div>
					</div>
				</Tiles>
				<button>Save &amp; complete</button>
				<button>Go back</button>
			</Container>
		</div>
	)
}

export const desktopConsents = () => {
	return <Consents />
}

desktopConsents.story = {
	name: "desktop consents",
}

export const tabletConsents = () => {
	return <Consents />
}

tabletConsents.story = {
	name: "tablet consents",
	parameters: { viewport: { defaultViewport: "tablet" } },
}

export const mobileConsents = () => {
	return <Consents />
}

mobileConsents.story = {
	name: "mobile consents",
	parameters: { viewport: { defaultViewport: "mobileMedium" } },
}
