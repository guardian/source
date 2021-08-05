import { Select, SelectProps } from './Select';
import { Option } from './Option';
import { css } from '@emotion/react';
import { from } from '@guardian/src-foundations/mq';
import { textSans } from '@guardian/src-foundations/typography';
import { useState } from 'react';

export default {
	title: 'Source/src-select/Select',
	component: Select,
	subcomponents: { Option },
};

const constrainedWith = css`
	width: 100%;
	${from.phablet} {
		width: 25em;
	}
`;

const message = css`
	${textSans.medium()}
`;

export const Demo = (args: SelectProps) => (
	<div css={constrainedWith}>
		<Select {...args}>
			<Option value="">Select a state</Option>
			<Option value="al">Alabama</Option>
			<Option value="ca">California</Option>
		</Select>
	</div>
);

Demo.story = {
	args: {
		label: 'State',
		optional: false,
		hideLabel: false,
		supporting: '',
		error: '',
		success: '',
	},
	argTypes: {
		id: { control: null },
		cssOverrides: { control: null },
	},
};

export const ControlledExample = (args: SelectProps) => {
	const [state, setState] = useState('al');

	return (
		<div css={constrainedWith}>
			<Select
				{...args}
				label="State"
				value={state}
				onChange={(event) => setState(event.target.value)}
			>
				<Option value="">Select a state</Option>
				<Option value="al">Alabama</Option>
				<Option value="ca">California</Option>
			</Select>
			<span css={message}>
				{state ? `You have selected: ${state}` : ''}
			</span>
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

export const DefaultLight = (args: SelectProps) => (
	<div css={constrainedWith}>
		<Select {...args} label="State">
			<Option value="">Select a state</Option>
			<Option value="al">Alabama</Option>
			<Option value="ca">California</Option>
		</Select>
	</div>
);

DefaultLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const ErrorWithMessageLight = (args: SelectProps) => (
	<div css={constrainedWith}>
		<Select
			{...args}
			label="State"
			error="Please select your home state. This service is unavailable outside of the US."
		>
			<Option value="">Select a state</Option>
			<Option value="al">Alabama</Option>
			<Option value="ca">California</Option>
		</Select>
	</div>
);

ErrorWithMessageLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const VisuallyHideLabelLight = (args: SelectProps) => (
	<div css={constrainedWith}>
		<Select {...args} label="State" hideLabel={true}>
			<Option value="">Select a state</Option>
			<Option value="al">Alabama</Option>
			<Option value="ca">California</Option>
		</Select>
	</div>
);

VisuallyHideLabelLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const OptionalLight = (args: SelectProps) => (
	<div css={constrainedWith}>
		<Select {...args} label="State" optional={true}>
			<Option value="">Select a state</Option>
			<Option value="al">Alabama</Option>
			<Option value="ca">California</Option>
		</Select>
	</div>
);

OptionalLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const SuccessWithMessageLight = (args: SelectProps) => (
	<div css={constrainedWith}>
		<Select
			{...args}
			label="State"
			success="This service is available in your state"
		>
			<Option value="">Select a state</Option>
			<Option value="al" selected={true}>
				Alabama
			</Option>
			<Option value="ca">California</Option>
		</Select>
	</div>
);

SuccessWithMessageLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const SupportingTextLight = (args: SelectProps) => (
	<div css={constrainedWith}>
		<Select
			{...args}
			label="State"
			supporting="Leave blank if you are not within the US"
		>
			<Option value="">Select a state</Option>
			<Option value="al">Alabama</Option>
			<Option value="ca">California</Option>
		</Select>
	</div>
);

SupportingTextLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};
