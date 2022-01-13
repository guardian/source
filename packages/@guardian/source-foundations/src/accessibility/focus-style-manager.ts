const TAB_KEY_CODE = 9;

/**
 * Source: Blueprint https://blueprintjs.com/
 * https://github.com/palantir/blueprint/blob/06a186c90758bbdca604ed6d7bf639c3d05b1fa0/packages/core/src/common/interactionMode.ts
 * A nifty little class that maintains event handlers to add a class to the container element
 * when entering "mouse mode" (on a `mousedown` event) and remove it when entering "keyboard mode"
 * (on a `tab` key `keydown` event).
 * Requires @babel/plugin-proposal-class-properties
 *
 * Modifications to original source:
 * - Add return types to `isActive`, `start` and `stop` functions
 */
export class InteractionModeEngine {
	private isRunning = false;

	// tslint:disable-next-line:no-constructor-vars
	constructor(private container: Element, private className: string) {}

	/** Returns whether the engine is currently running. */
	public isActive(): boolean {
		return this.isRunning;
	}

	/** Enable behavior which applies the given className when in mouse mode. */
	public start(): void {
		this.container.addEventListener('mousedown', this.handleMouseDown);
		this.isRunning = true;
	}

	/** Disable interaction mode behavior and remove className from container. */
	public stop(): void {
		this.reset();
		this.isRunning = false;
	}

	private reset() {
		this.container.classList.remove(this.className);
		this.container.removeEventListener(
			'keydown',
			this.handleKeyDown as (evt: Event) => void,
		);
		this.container.removeEventListener('mousedown', this.handleMouseDown);
	}

	private handleKeyDown = (e: KeyboardEvent) => {
		if (e.which === TAB_KEY_CODE) {
			this.reset();
			this.container.addEventListener('mousedown', this.handleMouseDown);
		}
	};

	private handleMouseDown = () => {
		this.reset();
		this.container.classList.add(this.className);
		this.container.addEventListener(
			'keydown',
			this.handleKeyDown as (evt: Event) => void,
		);
	};
}

const FOCUS_DISABLED = 'src-focus-disabled';

let _focusEngine: InteractionModeEngine | undefined;

const focusEngine = (): InteractionModeEngine => {
	if (!_focusEngine) {
		_focusEngine = new InteractionModeEngine(
			document.documentElement,
			FOCUS_DISABLED,
		);
	}

	return _focusEngine;
};

export const FocusStyleManager = {
	alwaysShowFocus: (): void => focusEngine().stop(),
	isActive: (): boolean => focusEngine().isActive(),
	onlyShowFocusOnTabs: (): void => focusEngine().start(),
};
