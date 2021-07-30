import React, { useState } from 'react';
import { css } from '@emotion/react';
import { textSans } from '@guardian/src-foundations/typography';

import { TextArea, TextAreaProps } from './index';

const wrapperStyles = css`
	width: 400px;
`;

export default {
	title: 'Source/src-text-area/TextArea',
	component: TextArea,
};

export const Demo = (args: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea {...args} />
	</div>
);

Demo.args = {
	label: 'Comments',
	optional: false,
	hideLabel: false,
	supporting: '',
	error: '',
	rows: 3,
};

export const DefaultLight = (args: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea {...args} label="Comments" />
	</div>
);

export const WithRows = (args: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea {...args} label="Comments" rows={10} />
	</div>
);

export const OptionalLight = (args: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea {...args} label="Comments" optional={true} />
	</div>
);

export const VisuallyHideLabelLight = (args: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea {...args} label="Comments" hideLabel={true} />
	</div>
);

export const SupportingTextLight = (args: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea
			{...args}
			label="Comments"
			supporting="Please keep comments respectful and abide by the community guidelines."
		/>
	</div>
);

export const ErrorWithMessageLight = (args: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea
			{...args}
			label="Comments"
			error="Please tell us your views"
		/>
	</div>
);

export const WithMaxLength = (args: TextAreaProps) => (
	<div css={wrapperStyles}>
		<TextArea {...args} label="Comments" maxLength={10} />
	</div>
);

const wordCount = css`
	${textSans.medium()}
`;

export const ControlledExample = (args: TextAreaProps) => {
	const [state, setState] = useState('');
	return (
		<div css={wrapperStyles}>
			<TextArea
				{...args}
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
