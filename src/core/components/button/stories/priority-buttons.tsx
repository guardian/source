import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { space } from "@guardian/src-foundations"
import { background } from "@guardian/src-foundations/palette"
import {
	Button,
	buttonDefault,
	buttonBrandAlt,
	buttonBrand,
	buttonReaderRevenue,
	buttonReaderRevenueBrand,
	buttonReaderRevenueBrandAlt,
} from "../index"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const priorityButtons = [
	<Button onClick={e => console.log("Primary clicked:", e.target)}>
		Primary
	</Button>,
	<Button
		onClick={e => console.log("Secondary clicked:", e.target)}
		priority="secondary"
	>
		Secondary
	</Button>,
	<Button
		onClick={e => console.log("Tertiary clicked", e.target)}
		priority="tertiary"
	>
		Tertiary
	</Button>,
	<Button
		priority="subdued"
		onClick={e => console.log("Subdued clicked", e.target)}
	>
		Subdued
	</Button>,
]
/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> div {
		margin-right: ${space[9]}px;
	}
`

export const priorityLight = () => (
	<ThemeProvider theme={buttonDefault}>
		<div css={flexStart}>
			{priorityButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityLight.story = { name: "priority light" }

export const priorityBlue = () => (
	<ThemeProvider theme={buttonBrand}>
		<div css={flexStart}>
			{priorityButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityBlue.story = {
	name: "priority blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export const priorityGrey = () => (
	<ThemeProvider theme={buttonDefault}>
		<div css={flexStart}>
			{priorityButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityGrey.story = {
	name: "priority grey",
	parameters: {
		backgrounds: [
			{ name: "grey", value: background.secondary, default: true },
		],
	},
}

export const priorityYellow = () => (
	<ThemeProvider theme={buttonBrandAlt}>
		<div css={flexStart}>
			{priorityButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityYellow.story = {
	name: "priority yellow",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brandAlt),
		],
	},
}

const readerRevenueButtons = [priorityButtons[0], priorityButtons[2]]

export const priorityReaderRevenueLight = () => (
	<ThemeProvider theme={buttonReaderRevenue}>
		<div css={flexStart}>
			{readerRevenueButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityReaderRevenueLight.story = {
	name: "priority reader revenue light",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

export const priorityReaderRevenueBlue = () => (
	<ThemeProvider theme={buttonReaderRevenueBrand}>
		<div css={flexStart}>
			{readerRevenueButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityReaderRevenueBlue.story = {
	name: "priority reader revenue blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export const priorityReaderRevenueYellow = () => (
	<ThemeProvider theme={buttonReaderRevenueBrandAlt}>
		<div css={flexStart}>
			{readerRevenueButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityReaderRevenueYellow.story = {
	name: "priority reader revenue yellow",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brandAlt),
		],
	},
}
