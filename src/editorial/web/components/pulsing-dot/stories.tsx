import React from 'react';
import { css } from '@emotion/react';

import { Design, Display, Pillar, Special } from '@guardian/types';
import { headline } from '@guardian/src-foundations/typography';

import { PulsingDot } from './index';

export default {
	title: 'Editorial/PulsingDot',
	component: PulsingDot,
};

const Kicker = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			${headline.xxxsmall()};
			display: inline;
		`}
	>
		{children}
	</div>
);

export const Dot = () => (
	<>
		<div>
			<PulsingDot
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.News,
				}}
			/>
			<Kicker>Live</Kicker>
		</div>
		<div>
			<PulsingDot
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Sport,
				}}
			/>
			<Kicker>Live</Kicker>
		</div>
		<div>
			<PulsingDot
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Culture,
				}}
			/>
			<Kicker>Live</Kicker>
		</div>
		<div>
			<PulsingDot
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Lifestyle,
				}}
			/>
			<Kicker>Live</Kicker>
		</div>
		<div>
			<PulsingDot
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Opinion,
				}}
			/>
			<Kicker>Live</Kicker>
		</div>
		<div>
			<PulsingDot
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Special.SpecialReport,
				}}
			/>
			<Kicker>Live</Kicker>
		</div>
		<div>
			<PulsingDot
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Special.Labs,
				}}
			/>
			<Kicker>Live</Kicker>
		</div>
	</>
);
Dot.story = { name: 'with different themes' };
