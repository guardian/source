import React from "react"
import { RadioGroup, Radio } from "../../index"

const optional = () => (
	<form onSubmit={(e) => e.preventDefault()}>
		<RadioGroup name="yes-or-no" optional={true}>
			<Radio value="yes" label="Yes" />
			<Radio value="no" label="No" />
		</RadioGroup>
		<button type="submit">Submit</button>
	</form>
)
optional.story = {
	name: "optional",
}

const required = () => (
	<form onSubmit={(e) => e.preventDefault()}>
		<RadioGroup name="yes-or-no" optional={false}>
			<Radio value="yes" label="Yes" />
			<Radio value="no" label="No" />
		</RadioGroup>
		<button type="submit">Submit</button>
	</form>
)
required.story = {
	name: "required",
}

export { required, optional }
