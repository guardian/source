import { useState } from 'react';
import { css } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { space } from '@guardian/src-foundations';
import { textSans } from '@guardian/src-foundations/typography';
import { from } from '@guardian/src-foundations/mq';
import { TextInput, textInputDefault } from './index';
import type { TextInputProps } from './index';

export default {
	title: 'Source/src-text-input/TextInput',
	component: TextInput,
};

const constrainedWith = css`
	width: 100%;
	${from.phablet} {
		width: 30em;
	}
`;

const spacer = css`
	margin-bottom: ${space[3]}px;
`;

const message = css`
	${textSans.medium()}
`;

export const Demo = (args: TextInputProps) => {
	const [state, setState] = useState('');
	return (
		<TextInput
			{...args}
			value={state}
			onChange={(event) => setState(event.target.value)}
		/>
	);
};

Demo.story = {
	args: {
		label: 'First name',
		optional: false,
		hideLabel: false,
		supporting: '',
		error: '',
		success: '',
	},
	argTypes: {
		id: { control: null },
		className: { control: null },
		cssOverrides: { control: null },
		value: { control: null },
	},
};

export const DefaultLight = (_: TextInputProps) => {
	const [state, setState] = useState('');
	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={constrainedWith}>
				<TextInput
					label="First name"
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</ThemeProvider>
	);
};

DefaultLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const OptionalLight = (_: TextInputProps) => (
	<ThemeProvider theme={textInputDefault}>
		<div css={constrainedWith}>
			<TextInput label="First name" optional={true} />
		</div>
	</ThemeProvider>
);

OptionalLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const HideLabel = (_: TextInputProps) => {
	const [state, setState] = useState('');
	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={constrainedWith}>
				<TextInput
					label="First name"
					hideLabel={true}
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</ThemeProvider>
	);
};

HideLabel.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const SupportingTextLight = (_: TextInputProps) => {
	const [state, setState] = useState('');
	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={constrainedWith}>
				<TextInput
					label="Email"
					supporting="alex@example.com"
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</ThemeProvider>
	);
};

SupportingTextLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const WidthsLight = (_: TextInputProps) => {
	const [state, setState] = useState({ wide: '', medium: '', short: '' });
	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={spacer}>
				<TextInput
					label="First name"
					width={30}
					value={state.wide}
					onChange={(event) =>
						setState({
							wide: event.target.value,
							medium: state.medium,
							short: state.short,
						})
					}
				/>
			</div>
			<div css={spacer}>
				<TextInput
					label="Postcode"
					width={10}
					value={state.medium}
					onChange={(event) =>
						setState({
							wide: state.wide,
							medium: event.target.value,
							short: state.short,
						})
					}
				/>
			</div>
			<div css={spacer}>
				<TextInput
					label="Year of birth"
					width={4}
					value={state.short}
					onChange={(event) =>
						setState({
							wide: state.wide,
							medium: state.medium,
							short: event.target.value,
						})
					}
				/>
			</div>
		</ThemeProvider>
	);
};

WidthsLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const ErrorWithMessageLight = (_: TextInputProps) => {
	const [state, setState] = useState('');
	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={constrainedWith}>
				<TextInput
					label="First name"
					error="Enter your first name below"
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</ThemeProvider>
	);
};

ErrorWithMessageLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const SuccessWithMessageLight = (_: TextInputProps) => {
	const [state, setState] = useState('');
	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={constrainedWith}>
				<TextInput
					label="Input Code"
					success="This code is valid"
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</ThemeProvider>
	);
};

SuccessWithMessageLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const ConstraintLight = (_: TextInputProps) => {
	const [state, setState] = useState('');

	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={constrainedWith}>
				<TextInput
					label="Phone number"
					pattern="[0-9]{1,11}"
					title="11 digit phone number"
					type="tel"
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</ThemeProvider>
	);
};

ConstraintLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const ControlledExample = (_: TextInputProps) => {
	const [state, setState] = useState('');

	return (
		<div css={constrainedWith}>
			<div css={spacer}>
				<TextInput
					label="First name"
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
			<span css={message}>{state ? `Hello, ${state}` : ''}</span>
		</div>
	);
};

ControlledExample.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};
