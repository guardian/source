import { css } from "@emotion/core"
import { background, sport } from "@guardian/src-foundations/palette"
import { Container, Hide, Columns, Column } from "../../index"

const img = css`
	height: 200px;
	background-color: ${sport[600]};
`

const card = css`
	background-color: ${background.secondary};
	height: 200px;
`

const Checkout = () => {
	return (
		<div>
			<nav>
				The Guardian
				<ul>
					<li>Support</li>
					<li>Subscription</li>
					<li>Digital</li>
					<li>Paper</li>
					<li>Guardian Weekly</li>
					<li>Patrons</li>
				</ul>
			</nav>
			<Container>
				<header>
					<Columns collapseBelow="desktop">
						<Column width={3 / 4}>
							<Hide below="tablet">
								<h1>
									Subscribe to The Guardian and The Observer
								</h1>
								<p>
									Choose from a range of packages to suit you
								</p>
							</Hide>
						</Column>
						<Column>
							<div css={img}>Placeholder image: 2 newspapers</div>
						</Column>
					</Columns>
					<h2>Newspaper subscriptions</h2>
				</header>
			</Container>

			<Container>
				<article>
					<h3>Save up to 29% a year with a subscription</h3>
					<p>We offer two different subscription types...</p>
					<Columns>
						<Column width={1 / 2}>
							<div>Tab 1</div>
						</Column>
						<Column width={1 / 2}>
							<div>Tab 2</div>
						</Column>
					</Columns>
					<div css={img}>Placeholder image: credit card</div>
					<div>Tab content</div>
					<h4>Pick your subscription package below</h4>
					<Columns collapseBelow="desktop">
						<Column width={1 / 4}>
							<div css={card}>Every day</div>
						</Column>
						<Column width={1 / 4}>
							<div css={card}>Every day</div>
						</Column>
						<Column width={1 / 4}>
							<div css={card}>Every day</div>
						</Column>
						<Column width={1 / 4}>
							<div css={card}>Every day</div>
						</Column>
					</Columns>
					<p>You can cancel your subscription at any time</p>
				</article>
			</Container>

			<Container>
				<footer>FAQ and help</footer>
			</Container>
		</div>
	)
}

export const desktopCheckout = () => {
	return <Checkout />
}

desktopCheckout.story = {
	name: "desktop checkout",
}

export const mobileCheckout = () => {
	return <Checkout />
}

mobileCheckout.story = {
	name: "mobile checkout",
	parameters: { viewport: { defaultViewport: "mobileMedium" } },
}
