import { css } from "@emotion/core"
import { background, border } from "@guardian/src-foundations/palette"
import { from } from "@guardian/src-foundations/mq"
import { Container, Stack, Columns, Column } from "../../index"

const body = css`
	background-color: ${background.primary};
	${from.tablet} {
		background-color: ${background.secondary};
	}
`

const card = css`
	background-color: ${background.primary};
	${from.tablet} {
		border: 1px solid ${border.secondary};
	}
`

const ThankYou = () => {
	return (
		<div css={body}>
			<Container>
				<Columns collapseBelow="tablet">
					<Column width={1 / 2}>
						<h1>
							Thank you Anastasia for your valuable contribution
						</h1>
						<p>
							To support us further, and enhance your
							experience...
						</p>
					</Column>
				</Columns>
				<Columns collapseBelow="tablet">
					<Column width={1 / 2}>
						<Stack space={5}>
							<div css={card}>
								<h2>Continue to your account</h2>
								<p>
									This means we can recognse you as a
									supporter...
								</p>
							</div>
							<div css={card}>
								<h2>Hear from our newsroom</h2>
								<p>
									Opt in to receive a regular newsletter from
									inside the Guardian.
								</p>
							</div>
						</Stack>
					</Column>
					<Column width={1 / 2}>
						<Stack space={5}>
							<div css={card}>
								<h2>Set a support reminder</h2>
								<p>
									Opt in to receive a reminder in case you
									would like to support our journalism again.
								</p>
							</div>
							<div css={card}>
								<h2>Send us your thoughts</h2>
								<p>
									Fill out this short form to tell us more
									about your experience of supporting us
									today.
								</p>
							</div>

							<div css={card}>
								<h2>Share your support</h2>
								<p>
									Invite your followers to support the
									Guardian's open, independent reporting.
								</p>
							</div>
						</Stack>
					</Column>
				</Columns>
				<button>Return to the Guardian</button>
			</Container>
			<footer>
				<Container>
					If you have any questions about contributing to the
					Guardian, please contact...
				</Container>
			</footer>
		</div>
	)
}

export const desktopThankYou = () => {
	return <ThankYou />
}

desktopThankYou.story = {
	name: "desktop thank you",
}

export const mobileThankYou = () => {
	return <ThankYou />
}

mobileThankYou.story = {
	name: "mobile thank you",
	parameters: { viewport: { defaultViewport: "mobileMedium" } },
}
