# Accordion

📣 For more context and visual guides relating text input usage on the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/38c5aa-accordion)

## Install

```sh
$ yarn add @guardian/src-accordion @guardian/src-foundations
```

## Use

```js
import { Accordion, AccordionRow } from "@guardian/src-accordion"

const Page = () => (
    <Accordion hideToggleLabel={true}>
        <AccordionRow label="Collecting from multiple newsagents">
            Present your card to a newsagent each time you collect the paper.
            The newsagent will scan your card and will be reimbursed for each
            transaction automatically.
        </AccordionRow>
        <AccordionRow label="Delivery from your retailer">
            Simply give your preferred store / retailer the barcode printed on
            your subscription letter.
        </AccordionRow>
    </Accordion>
)
```

## Accordion Props

### `hideToggleLabel`

**`boolean`** _= false_

Determine whether to display the "show" and "hide" labels that toggle the collapsing
and expanding of the menu. When set to `true`, the label will no longer appear.
It may be useful to toggle this flag when there is limited space.

_Note: the up or down chevron icon always appears._

## AccordionRow Props

### `label`

**`string`**

A line of text to summarise the information that lies within the expanded state.
Appears in the collapsed state, as well as prominently at the top of the expanded state.

### `onClick`

**`(event: React.MouseEvent<HTMLButtonElement>) => void`** _= () => undefined_

A callback function called when the component is opened or closed. Receives the click event as an argument.
