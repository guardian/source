const TAB_KEY_CODE = 9

/**
 * Source: Blueprint https://blueprintjs.com/
 * https://github.com/palantir/blueprint/blob/06a186c90758bbdca604ed6d7bf639c3d05b1fa0/packages/core/src/common/interactionMode.ts
 * A nifty little class that maintains event handlers to add a class to the container element
 * when entering "mouse mode" (on a `mousedown` event) and remove it when entering "keyboard mode"
 * (on a `tab` key `keydown` event).
 */
export class InteractionModeEngine {
	isRunning: boolean
	container: Element
	className: string

	constructor(container: Element, className: string) {
		this.container = container
		this.className = className
		this.isRunning = false
	}

	/** Returns whether the engine is currently running. */
	isActive() {
		return this.isRunning
	}

	/** Enable behavior which applies the given className when in mouse mode. */
	start() {
		this.container.addEventListener("mousedown", () =>
			this.handleMouseDown(),
		)
		this.isRunning = true
	}

	/** Disable interaction mode behavior and remove className from container. */
	stop() {
		this.reset()
		this.isRunning = false
	}

	reset() {
		this.container.classList.remove(this.className)
		this.container.removeEventListener("keydown", this
			.handleKeyDown as EventListener)
		this.container.removeEventListener("mousedown", () =>
			this.handleMouseDown(),
		)
	}

	handleKeyDown(e: KeyboardEvent) {
		if (e.which === TAB_KEY_CODE) {
			this.reset()
			this.container.addEventListener("mousedown", () =>
				this.handleMouseDown(),
			)
		}
	}

	handleMouseDown() {
		console.log(this)
		this.reset()
		this.container.classList.add(this.className)
		this.container.addEventListener("keydown", e =>
			this.handleKeyDown(e as KeyboardEvent),
		)
	}
}

const FOCUS_DISABLED = "src-focus-disabled"

const focusEngine = new InteractionModeEngine(
	document.documentElement,
	FOCUS_DISABLED,
)

export const FocusStyleManager = {
	alwaysShowFocus: () => focusEngine.stop(),
	isActive: () => focusEngine.isActive(),
	onlyShowFocusOnTabs: () => focusEngine.start(),
}
