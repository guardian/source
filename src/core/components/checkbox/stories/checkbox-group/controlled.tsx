import React, { useState } from "react";

import { CheckboxGroup, Checkbox } from "../../index";

const controlled = () => {
	const [ukChecked, setUkChecked] = useState(false);
	const [usChecked, setUsChecked] = useState(false);
	return (
		<CheckboxGroup name="emails">
			<Checkbox
				label="Guardian Today: UK"
				value="today_us"
				checked={ukChecked}
				onChange={() => setUkChecked(!ukChecked)}
			/>
			<Checkbox
				label="Guardian Today: US"
				value="today_us"
				checked={usChecked}
				onChange={() => setUsChecked(!usChecked)}
			/>
		</CheckboxGroup>
	);
};

controlled.story = {
	name: "controlled example",
};

export { controlled };
