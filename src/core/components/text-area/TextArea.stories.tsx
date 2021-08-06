import { useState } from 'react';
import { css } from '@emotion/react';
import { textSans } from '@guardian/src-foundations/typography';

import { TextArea, TextAreaProps } from './index';

const wrapperStyles = css`
	width: 400px;
`;

const wordCount = css`
	${textSans.medium()}
`;

export default {
	title: 'Source/src-text-area/TextArea',
	component: TextArea,
};

export const Demo = (args: TextAreaProps) => <TextArea {...args} />;

Demo.story = {
	args: {
		label: 'Comments',
		optional: false,
		hideLabel: false,
		supporting: '',
		error: '',
		rows: 3,
	},
	argTypes: {
		id: { control: null },
		cssOverrides: { control: null },
		value: { control: null },
	},
};

export const DefaultLight = (args: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea {...args} label="Comments" />
	</div>
);

DefaultLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const WithRows = (_: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea label="Comments" rows={10} />
	</div>
);

WithRows.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const OptionalLight = (_: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea label="Comments" optional={true} />
	</div>
);

OptionalLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const VisuallyHideLabelLight = (_: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea label="Comments" hideLabel={true} />
	</div>
);

VisuallyHideLabelLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const SupportingTextLight = (_: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea
			label="Comments"
			supporting="Please keep comments respectful and abide by the community guidelines."
		/>
	</div>
);

SupportingTextLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const ErrorWithMessageLight = (_: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea label="Comments" error="Please tell us your views" />
	</div>
);

ErrorWithMessageLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const WithMaxLength = (_: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea label="Comments" maxLength={10} />
	</div>
);

WithMaxLength.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const ControlledExample = (_: TextAreaProps) => {
	const [state, setState] = useState('');
	return (
		<div css={wrapperStyles}>
			<TextArea
				label="Comments"
				supporting="Please keep comments respectful and abide by the community guidelines."
				value={state}
				onChange={(event) => setState(event.target.value)}
			/>
			<span css={wordCount}>
				Word count:{' '}
				{state.length > 0 ? state.trim().split(' ').length : 0}
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
