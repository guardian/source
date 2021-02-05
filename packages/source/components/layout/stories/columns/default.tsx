import React from 'react';
import { Columns, Column } from '../../index';
import { sport } from '@guardian/src-foundations/palette';
import { css } from '@emotion/react';

const contents = css`
	text-align: center;
	background-color: ${sport[600]};
`;

export const columns = () => (
	<Columns>
		<Column>
			<div css={contents}>1</div>
		</Column>
		<Column>
			<div css={contents}>2</div>
		</Column>
		<Column>
			<div css={contents}>3</div>
		</Column>
		<Column>
			<div css={contents}>4</div>
		</Column>
	</Columns>
);

columns.story = {
	name: 'default',
};

export const longText = () => (
	<Columns>
		<Column>
			<div css={contents}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
				faucibus nibh erat, eget rutrum ligula vehicula sit amet. Etiam
				scelerisque dapibus pulvinar. Integer non accumsan justo. Duis
				et vehicula risus. Nulla ligula eros, consequat sodales lectus
				eget, eleifend venenatis neque. Vivamus interdum, mi sit amet
				blandit laoreet, ligula eros efficitur quam, eu pellentesque
				risus tortor vitae tellus. Duis et lectus vitae tortor placerat
				consequat. Vestibulum sed efficitur mi, sed suscipit urna.
			</div>
		</Column>
		<Column>
			<div css={contents}>
				Interdum et malesuada fames ac ante ipsum primis in faucibus.
				Nulla facilisi. Phasellus id aliquam odio. Aliquam tempus eu
				enim in fermentum. Donec ut velit vel purus rutrum vulputate ut
				scelerisque lacus. Vestibulum ante ipsum primis in faucibus orci
				luctus et ultrices posuere cubilia curae; Maecenas sodales
				lacinia porta. Suspendisse consequat egestas dui, non tempus
				diam laoreet vitae.{' '}
			</div>
		</Column>
		<Column>
			<div css={contents}>
				{' '}
				Pellentesque id ornare turpis. Aliquam laoreet aliquet pharetra.
				Donec nec erat ac libero interdum sollicitudin. Nullam imperdiet
				ut dolor non cursus. Integer et ante fringilla, luctus magna
				nec, consequat est. Nam viverra, lectus non pellentesque
				hendrerit, sem nulla commodo urna, ut aliquam odio eros eu
				justo. Nullam sem mi, rhoncus sed nunc at, blandit scelerisque
				neque. Donec mattis arcu accumsan orci luctus, eget ultricies
				neque accumsan. Duis fringilla elit feugiat justo maximus, id
				volutpat lacus congue. Fusce ornare imperdiet cursus. Sed in
				turpis est. Nam id ultrices leo. Nullam bibendum quis neque sit
				amet lacinia. Aenean ac arcu enim.{' '}
			</div>
		</Column>
		<Column>
			<div css={contents}>
				Nunc nec dapibus quam. Praesent nec neque vel velit mollis
				tempor. Suspendisse justo eros, pharetra et elit sit amet,
				hendrerit laoreet dui. Curabitur ut libero nibh. Duis finibus
				sollicitudin tortor, ac viverra urna commodo et. Aliquam tempus,
				turpis vel dictum condimentum, dolor nisl consequat sem, et
				posuere metus diam vel erat. Sed sagittis nisi sed nisl lobortis
				ornare. Donec facilisis euismod ante, a interdum urna
				scelerisque et. Donec convallis odio orci, efficitur maximus
				metus rutrum in. Curabitur laoreet dui sed mi tempor tincidunt.
				Nunc finibus ligula at arcu aliquet, maximus commodo lectus
				dignissim.{' '}
			</div>
		</Column>
	</Columns>
);

longText.story = {
	name: 'with long text',
};
