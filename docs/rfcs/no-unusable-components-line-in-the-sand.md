# No unusable Source components

This proposes a line in the sand regarding how Source components should behave when their ideal version requires technologies that a client may not offer.

## Example problem

A Toggle Switch is similar to a Checkbox. Unlike a Checkbox, the state it sets should apply immediately i.e. a user does not need to click a Submit Button.

It needs JavaScript to achieve this. The web platform provides no obvious default widget to fall back to – it's not just a visual treatment of standard widget.

If we server render it, [users without JavaScript enabled](https://kryogenix.org/code/browser/everyonehasjs.html) (or who have not yet downloaded the bundle) will be presented with an unresponsive Toggle Switch until the JavaScript arrives.

## Proposal

A new line in the sand for Source: 

> Do not present a user with a component they cannot use.

Given the example above, this could mean either:

- not displaying it to users until the JavaScript loads OR
- identifying and displaying a non-JS fallback

Note that this *does not mandate fallbacks*. A team could decide that the component is an enhancement and not critical, and so they decide to just not show it to people without javascript.

But rendering it in an inoperative state would cross the line in the sand. 

### Anti-patterns

This proposal would not permit a "*Please enable JavaScript to use this*" type message.

Users should decide (or are unable to change) the environment Source components run in. Our job is to provide the best experience we can given what we encounter. 

We should treat this approach as an analogue of "this site needs Chrome".

> n.b. this is not always an anti-pattern – for example on an internal tool where can broaden the range of requirements

## Example solution

A Toggle Switch component accepts optional props that enable us to render a working fallback in a non-JavaScript environment. 

If they're provided we render the fallback and if/when we can, enhance/decorate it further.

If they're not provided, we only show the component once we can make it functional. In reality this probably means either rendered hidden on the server then hydrated and shown, or only rendered in the client.


### With fallback
```jsx
<ToggleSwitchGroup action="/a11y-settings" onchange={applyA11ySettings} submitMessage="save settings">
	<ToggleSwitch name="darkmode" value="false">dark mode</ToggleSwitch>
	<ToggleSwitch name="hi_contrast" value="false">high contrast</ToggleSwitch>
</ToggleSwitchGroup>
```
This would render:
```html
<form action="/a11y-settings" method="post">
	<label for="darkmode-toggle">dark mode</label>
	<input type="checkbox" id="darkmode-toggle" name="darkmode" checked="false" />
	
	<label for="hi_contrast-toggle">high contrast</label>
	<input type="checkbox" id="hi_contrast-toggle" name="hi_contrast" checked="false" />
	
	<button>save settings</button>
</form>
```

> Note that we would still style the elements to match the design.

### Without fallback

In this case, the component is not shown if it cannot be used in the environment.
```jsx
<ToggleSwitchGroup onchange={applyA11ySettings}>
	<ToggleSwitch name="darkmode" value="false">dark mode</ToggleSwitch>
	<ToggleSwitch name="hi_contrast" value="false">high contrast</ToggleSwitch>
</ToggleSwitchGroup>
```
