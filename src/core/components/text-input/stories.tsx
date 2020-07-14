import React, { useState } from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { space } from "@guardian/src-foundations"
import { textSans } from "@guardian/src-foundations/typography"
import { from } from "@guardian/src-foundations/mq"
import { TextInput, textInputLight } from "./index"

export default {
	title: "TextInput",
}

const constrainedWith = css`
	width: 100%;
	${from.phablet} {
		width: 30em;
	}
`

const defaultLight = () => (
	<ThemeProvider theme={textInputLight}>
		<div css={constrainedWith}>
			<TextInput label="First name" />
		</div>
	</ThemeProvider>
)

defaultLight.story = {
	name: `default light`,
}

const optionalLight = () => (
	<ThemeProvider theme={textInputLight}>
		<div css={constrainedWith}>
			<TextInput label="First name" optional={true} />
		</div>
	</ThemeProvider>
)

optionalLight.story = {
	name: `optional light`,
}

const supportingTextLight = () => (
	<ThemeProvider theme={textInputLight}>
		<div css={constrainedWith}>
			<TextInput label="Email" supporting="alex@example.com" />
		</div>
	</ThemeProvider>
)

supportingTextLight.story = {
	name: `supporting text light`,
}

const spacer = css`
	margin-bottom: ${space[3]}px;
`
const widthsLight = () => (
	<ThemeProvider theme={textInputLight}>
		<div css={spacer}>
			<TextInput label="First name" width={30} />
		</div>
		<div css={spacer}>
			<TextInput label="Postcode" width={10} />
		</div>
		<div css={spacer}>
			<TextInput label="Year of birth" width={4} />
		</div>
	</ThemeProvider>
)

widthsLight.story = {
	name: `widths light`,
}

const errorWithMessageLight = () => (
	<ThemeProvider theme={textInputLight}>
		<div css={constrainedWith}>
			<TextInput label="First name" error="Enter your first name below" />
		</div>
	</ThemeProvider>
)

errorWithMessageLight.story = {
	name: `error with message light`,
}

const successWithMessageLight = () => (
	<ThemeProvider theme={textInputLight}>
		<div css={constrainedWith}>
			<TextInput label="Input Code" success="This code is valid" />
		</div>
	</ThemeProvider>
)

successWithMessageLight.story = {
	name: `success with message ${name}`,
}

const constraintLight = () => (
	<ThemeProvider theme={textInputLight}>
		<div css={constrainedWith}>
			<TextInput
				label="Phone number"
				pattern="[0-9]{1,11}"
				title="11 digit phone number"
				type="tel"
			/>
		</div>
	</ThemeProvider>
)

constraintLight.story = {
	name: `with constraint light`,
}

const message = css`
	${textSans.medium()}
`

const controlled = () => {
	const [state, setState] = useState("")

	return (
		<div css={constrainedWith}>
			<div css={spacer}>
				<TextInput
					label="First name"
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
			<span css={message}>{state ? `Hello, ${state}` : ""}</span>
		</div>
	)
}

controlled.story = {
	name: "controlled example",
}

export {
	defaultLight,
	optionalLight,
	supportingTextLight,
	widthsLight,
	errorWithMessageLight,
	successWithMessageLight,
	constraintLight,
	controlled,
}
