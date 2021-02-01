import React, { useState, ChangeEvent } from "react";

import { CheckboxGroup, Checkbox } from "../../index";

const selectAll = () => {
	const checkboxData = [
		{
			label: "Guardian Today: UK",
			value: "today_uk",
		},
		{
			label: "Guardian Today: US",
			value: "today_us",
		},
	];
	const [checked, setCheckCount] = useState(checkboxData.map(() => false));
	const handleCheckboxClick = (
		event: ChangeEvent<HTMLInputElement>,
		pos: number
	) => {
		const newChecked = checked.slice();

		newChecked[pos] = event.target.checked;
		setCheckCount(newChecked);
	};
	const handleMasterCheckboxClick = (
		event: ChangeEvent<HTMLInputElement>
	) => {
		setCheckCount(checkboxData.map(() => event.target.checked));
	};
	const selectableCheckboxes = checkboxData.map(({ label, value }, index) => (
		<Checkbox
			label={label}
			value={value}
			key={`selectable_checkboxes__${value}`}
			onChange={(event) => handleCheckboxClick(event, index)}
			checked={checked[index]}
		/>
	));
	const checkedCount = () =>
		checked.reduce((acc, curr) => (curr ? ++acc : acc), 0);

	return (
		<>
			<Checkbox
				indeterminate={
					checkedCount() > 0 &&
					checkedCount() < selectableCheckboxes.length
				}
				checked={checkedCount() === selectableCheckboxes.length}
				value="select-all"
				label={<strong>Select all</strong>}
				onChange={(event) => handleMasterCheckboxClick(event)}
			/>
			<CheckboxGroup name="emails">
				{selectableCheckboxes.map((checkbox, index) => {
					return React.cloneElement(checkbox, { key: index });
				})}
			</CheckboxGroup>
		</>
	);
};

selectAll.story = {
	name: "select all",
};

export { selectAll };
