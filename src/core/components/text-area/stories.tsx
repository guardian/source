import React from "react"
import { css } from "@emotion/core"

import { TextArea } from "./index"

const wrapperStyles = css`
	width: 400px;
`

export default {
	title: "TextArea",
}

const defaultLight = () =>
	<div css={wrapperStyles}>
		<TextArea label="Comments" />
	</div>

defaultLight.story = {
	name: `default light`,
}

const withRows = () =>
	<div css={wrapperStyles}>
		<TextArea label="Comments" rows={10} />
	</div>

withRows.story = {
	name: `with rows`,
}

const optionalLight = () =>
	<div css={wrapperStyles}>
		<TextArea label="Comments" optional={true} />
	</div>

optionalLight.story = {
	name: `optional light`,
}

const supportingTextLight = () => (
	<div css={wrapperStyles}>
		<TextArea
			label="Comments"
			supporting="Please keep comments respectful and abide by the community guidelines."
		/>
	</div>
)

supportingTextLight.story = {
	name: `supporting text light`,
}

const errorWithMessageLight = () => (
	<div css={wrapperStyles}>
		<TextArea label="Comments" error="Please tell us your views" />
	</div>
)

errorWithMessageLight.story = {
	name: `error with message light`,
}

export {
	defaultLight,
	withRows,
	optionalLight,
	supportingTextLight,
	errorWithMessageLight,
}
