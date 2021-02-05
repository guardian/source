import React, { useState } from 'react';
import { css } from '@emotion/react';
import { textSans } from '@guardian/src-foundations/typography';
import { text } from '@guardian/src-foundations/palette';
import { space } from '@guardian/src-foundations';
import { ChoiceCardGroup, ChoiceCard } from '../index';

const medium = css`
	width: 30em;
`;

const spaced = css`
	margin-bottom: ${space[3]}px;
`;

const message = css`
	${textSans.medium()};
	color: ${text.primary};
`;

export const singleStateControlled = () => {
	const [selected, setSelected] = useState<string | null>('green');

	return (
		<div css={medium}>
			<div css={spaced}>
				<ChoiceCardGroup name="colours">
					<ChoiceCard
						value="red"
						label="Red"
						id="default-red"
						checked={selected === 'red'}
						onChange={() => setSelected('red')}
					/>
					<ChoiceCard
						value="green"
						label="Green"
						id="default-green"
						checked={selected === 'green'}
						onChange={() => setSelected('green')}
					/>
					<ChoiceCard
						value="blue"
						label="Blue"
						id="default-blue"
						checked={selected === 'blue'}
						onChange={() => setSelected('blue')}
					/>
				</ChoiceCardGroup>
			</div>
			<span css={message}>{selected} is selected</span>
		</div>
	);
};

singleStateControlled.story = {
	name: `single state controlled example`,
};
