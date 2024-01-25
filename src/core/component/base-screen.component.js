import { getTitle } from '@/config/seo.config'

export class BaseScreen {
	/**
	 *
	 * @param {Object} option
	 * @param {String} option.title
	 */
	constructor({ title }) {
		document.title = getTitle(title)
	}
	/**
	 * @returns {HTMLElement}
	 */
	render() {
		throw new Error('Render method must be implemented in the child class')
	}
}
