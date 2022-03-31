/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-descriptionid--page)
 *
 * Takes the ID of an element and generates a new ID. This should be set as the ID of an element that describes the first element. The generated ID should also be passed to the `aria-describedby` attribute on the first element.
 *
 * @param {string} id - ID of an element
 * @returns {string} ID of an element that describes the first element
 *
 * @example
 *		<form>
 *			<input id={id} type="text" aria-describedby={descriptionId(id)} />
 *			<p class="error" id={descriptionId(id)} />
 *		</form>
 */
export const descriptionId = (id: string): string => `${id}_description`;
