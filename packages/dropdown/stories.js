import React from "react";
import { storiesOf } from "@storybook/react";
import { Dropdown } from "./dropdown";

storiesOf("Dropdown", module)
	.add("empty", () => (
		<Dropdown label="My account" links={[]} id="my-account" />
	))
	.add("with social sharing", () => (
		<Dropdown
			label="Share to"
			links={[
				{
					url: "#",
					title: "Google+"
				},
				{
					url: "#",
					title: "MySpace"
				},
				{
					url: "#",
					title: "LiveJournal"
				}
			]}
		/>
	));
