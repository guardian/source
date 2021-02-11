///<reference types="@emotion/react/types/css-prop" />
import React, { InputHTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';
import { InlineError } from '../user-feedback';
import { Label } from '../label';
import { widthFluid, textArea, errorInput } from './styles';
import {
	visuallyHidden as _visuallyHidden,
	descriptionId,
	generateSourceId,
} from '../../foundations/src/accessibility';
import { Props } from '../../helpers';

interface TextAreaProps
	extends InputHTMLAttributes<HTMLTextAreaElement>,
		Props {
	id?: string;
	value?: string;
	label: string;
	optional: boolean;
	hideLabel: boolean;
	supporting?: string;
	error?: string;
	rows?: number;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	className?: string;
}

const TextArea = ({
	id,
	label: labelText,
	optional,
	hideLabel,
	supporting,
	error,
	cssOverrides,
	rows = 3,
	className,
	value,
	...props
}: TextAreaProps) => {
	const textAreaId = id || generateSourceId();
	const getClassName = () => {
		const HAS_VALUE_CLASS = 'src-has-value';

		if (className) {
			return `${className}${value ? ` ${HAS_VALUE_CLASS}` : ''}`;
		}

		if (value) {
			return HAS_VALUE_CLASS;
		}

		return undefined;
	};

	return (
		<Label
			text={labelText}
			supporting={supporting}
			optional={optional}
			hideLabel={hideLabel}
		>
			{error && (
				<InlineError id={descriptionId(textAreaId)}>
					{error}
				</InlineError>
			)}
			<textarea
				css={[
					widthFluid,
					textArea,
					error ? errorInput : '',
					cssOverrides,
				]}
				id={textAreaId}
				aria-required={!optional}
				aria-invalid={!!error}
				aria-describedby={error ? descriptionId(textAreaId) : ''}
				required={!optional}
				rows={rows}
				className={getClassName()}
				{...props}
			/>
		</Label>
	);
};

const defaultProps = {
	disabled: false,
	optional: false,
	hideLabel: false,
};

TextArea.defaultProps = { ...defaultProps };

export { TextArea };
