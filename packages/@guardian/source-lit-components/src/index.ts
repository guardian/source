import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators';

@customElement('text-input')
class TextInput extends LitElement {
	@property({ type: String })
	label = '';
	@property({ type: String })
	supporting = '';

	static get styles() {
		return css`
			:host {
				color: red;
			}
		`;
	}

	render() {
		return html` <input type="text" /> `;
	}
}

export { TextInput };
export default TextInput;
