import React, { useState } from "react"
import { RadioGroup, Radio } from "../index"

const controlled = () => {
	const [selected, setSelected] = useState<string | null>(null)

	return (
		<RadioGroup name="colours">
			<Radio
				value="red"
				label="Red"
				checked={selected === "red"}
				onChange={() => setSelected("red")}
			/>
			<Radio
				value="green"
				label="Green"
				checked={selected === "green"}
				onChange={() => setSelected("green")}
			/>
			<Radio
				value="blue"
				label="Blue"
				checked={selected === "blue"}
				onChange={() => setSelected("blue")}
			/>
		</RadioGroup>
	)
}
controlled.story = {
	name: "controlled example",
}

export { controlled }
