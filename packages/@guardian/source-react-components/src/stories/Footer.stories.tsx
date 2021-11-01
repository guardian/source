import { Footer } from '../../../src-footer/Footer';

export default {
	component: Footer,
	title: 'Source v4/source-react-components/Footer',
	argTypes: {
		children: {
			options: ['with', 'without'],
			mapping: {
				without: undefined,
				with: (
					<p>
						<strong>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</strong>
						<br />
						Ut proverbia non nulla veriora sint quam vestra dogmata.
						Ampulla enim sit necne sit, quis non iure optimo
						irrideatur, si laboret? Quae quo sunt excelsiores, eo
						dant clariora indicia naturae.
					</p>
				),
			},
			control: { type: 'radio' },
		},
	},
};

export * from '../../../src-footer/Footer.stories';
