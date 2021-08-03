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

export const Demo = (args: TextInputProps) => {
	const [state, setState] = useState('');
	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={constrainedWith}>
				<TextInput
					{...args}
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</ThemeProvider>
	);
};

Demo.args = {
	label: 'First name',
	optional: false,
	hideLabel: false,
	supporting: '',
	error: '',
	success: '',
};

export const DefaultLight = (args: TextInputProps) => {
	const [state, setState] = useState('');
	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={constrainedWith}>
				<TextInput
					{...args}
					label="First name"
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</ThemeProvider>
	);
};

export const OptionalLight = (args: TextInputProps) => (
	<ThemeProvider theme={textInputDefault}>
		<div css={constrainedWith}>
			<TextInput {...args} label="First name" optional={true} />
		</div>
	</ThemeProvider>
);

export const HideLabel = (args: TextInputProps) => {
	const [state, setState] = useState('');
	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={constrainedWith}>
				<TextInput
					{...args}
					label="First name"
					hideLabel={true}
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</ThemeProvider>
	);
};

export const SupportingTextLight = (args: TextInputProps) => {
	const [state, setState] = useState('');
	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={constrainedWith}>
				<TextInput
					{...args}
					label="Email"
					supporting="alex@example.com"
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</ThemeProvider>
	);
};

const spacer = css`
	margin-bottom: ${space[3]}px;
`;

export const WidthsLight = (args: TextInputProps) => {
	const [state, setState] = useState({ wide: '', medium: '', short: '' });
	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={spacer}>
				<TextInput
					{...args}
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
					{...args}
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
					{...args}
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

export const ErrorWithMessageLight = (args: TextInputProps) => {
	const [state, setState] = useState('');
	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={constrainedWith}>
				<TextInput
					{...args}
					label="First name"
					error="Enter your first name below"
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</ThemeProvider>
	);
};

export const SuccessWithMessageLight = (args: TextInputProps) => {
	const [state, setState] = useState('');
	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={constrainedWith}>
				<TextInput
					{...args}
					label="Input Code"
					success="This code is valid"
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</ThemeProvider>
	);
};

export const ConstraintLight = (args: TextInputProps) => {
	const [state, setState] = useState('');

	return (
		<ThemeProvider theme={textInputDefault}>
			<div css={constrainedWith}>
				<TextInput
					{...args}
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

const message = css`
	${textSans.medium()}
`;

export const ControlledExample = (args: TextInputProps) => {
	const [state, setState] = useState('');

	return (
		<div css={constrainedWith}>
			<div css={spacer}>
				<TextInput
					{...args}
					label="First name"
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
			<span css={message}>{state ? `Hello, ${state}` : ''}</span>
		</div>
	);
};
