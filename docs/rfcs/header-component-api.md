# `<Header />` component API

There is a plan to standardise headers across the Guardian's web products.

This proposal outlines an API that tries to capture the areas of standardisation while being as flexible as possible for end users.

> _See [the visual designs](https://www.figma.com/file/V8u2r27TFdjAWNM3p84ypC/%E2%9C%AD-Header?node-id=1989%3A71918) for more context._

## Example

```jsx
<Header>
    <BrandBar>
        <BrandBar.Links>
            <BrandBar.Link href icon={<Icon />} label until from />
            <BrandBar.LinkList icon label until from>
                <BrandBar.Link href label />
                <BrandBar.Link href label />
            </BrandBar.LinkList>
            <BrandBar.Link href icon={<Icon />} label until from />
        </BrandBar.Links>
    </BrandBar>
    <Navigation>
        <Navigation.PrimaryLinks>
            <Navigation.PrimaryLink
                label="News"
                href="https://www.theguardian.com/news"
            />
        </Navigation.PrimaryLinks>
        <Navigation.SecondaryLinks>
            <Navigation.SecondaryLinksGroup>
                <Navigation.SecondaryLink
                    label="News"
                    href="https://www.theguardian.com/news"
                />
            </Navigation.SecondaryLinksGroup>
            <Navigation.SecondaryLinksSupplementalLink
                label="Masterclasses"
                href="https://www.theguardian.com/guardian-masterclasses"
            />
        </Navigation.SecondaryLinks>
    </Navigation>
    <Subnav />
</Header>
```

## Component breakdown

### `<Header />`

Generic header component. The logo is hard-coded.

#### Example

```jsx
<Header>
    <BrandBar />
    <Navigation />
    <Subnav />
</Header>
```

### `<BrandBar />`

The area at the top of the header that houses features related to the brand and customisation, rather than content discovery. Examples include the support message, top level links, the Guardian logo and the Edition Switch.

The logo is hardcoded.

#### Example

```jsx
<BrandBar.Links>
    <BrandBar.Link href icon={<Icon />} label until from />
    <BrandBar.LinkList icon label until from>
        <BrandBar.Link href label />
    </BrandBar.LinkList>
</BrandBar.Links>
```

#### `<BrandBar.Links />`

A list of top-level links and menus that is displayed at the very top of the header.

#### `<BrandBar.Link />`

A link that is displayed in the `BrandBar.Links` section of the header, or within a `BrandBar.LinkList` dropdown.

##### Props

-   `href` _string_
    -   navigation location when `BrandBar.Link` is clicked
-   `onClick` _function_
    -   logic that is executed when the `BrandBar.Link` is clicked
-   `label` _string_
    -   display label of the `BrandBar.Link`
-   `icon` _ReactNode_
    -   icon that appears alongside the label
-   `from` _Breakpoint_
    -   the breakpoint at which the `BrandBar.Link` becomes visible
-   `until` _Breakpoint_
    -   the breakpoint at which the `BrandBar.Link` is no longer displayed

#### `<BrandBar.LinkList />`

A dropdown menu that is displayed in the `BrandBar.Links` section of the header.

##### Props

-   `label` _string_
    -   display label of the `BrandBar.LinkList`
-   `icon` _ReactNode_
    -   icon that appears alongside the label
-   `from` _Breakpoint_
    -   the breakpoint at which the `BrandBar.LinkList` becomes visible
-   `until` _Breakpoint_
    -   the breakpoint at which the `BrandBar.LinkList` is no longer displayed

### `<Navigation />`

The top-level navigation bar.

#### Example

```jsx
<Navigation>
    <Navigation.PrimaryLinks>
        <Navigation.PrimaryLink
            label="News"
            href="https://www.theguardian.com/news"
        />
    </Navigation.PrimaryLinks>
    <Navigation.SecondaryLinks>
        <Navigation.SecondaryLinksGroup>
            <Navigation.SecondaryLink
                label="News"
                href="https://www.theguardian.com/news"
            />
        </Navigation.SecondaryLinksGroup>
    </Navigation.SecondaryLinks>
</Navigation>
```

#### `<Navigation.PrimaryLinks />`

The main visible navigational links

##### Example

```jsx
<Navigation.PrimaryLinks>
    <Navigation.PrimaryLink
        label="News"
        href="https://www.theguardian.com/news"
    />
</Navigation.PrimaryLinks>
```

##### `<Navigation.PrimaryLink />`

A navigational link that appears in the `Navigation.PrimaryLinks` component

###### Example

```jsx
<Navigation.PrimaryLink
    label="News"
    href="https://www.theguardian.com/news"
    color={palette.news[400]}
    selected={true}
/>
```

###### Props

-   `href` _string_
    -   navigation location when `Navigation.PrimaryLink` is clicked
-   `label` _string_
    -   display label of the `Navigation.PrimaryLink`
-   `color` _string_
    -   hex value of the coloured selection indicator
-   `selected` _boolean_
    -   toggles the top link’s selection indicator

#### `<Navigation.SecondaryLinks />`

An expanding menu that opens on click of the veggie burger icon, or the "more" link at wider breakpoints

##### Example

```jsx
<Navigation.SecondaryLinks>
    <Navigation.SecondaryLinksGroup>
        <Navigation.SecondaryLink
            label="News"
            href="https://www.theguardian.com/news"
        />
    </Navigation.SecondaryLinksGroup>
    <Navigation.SecondaryLinksSupplementalLink
        label="Masterclasses"
        href="https://www.theguardian.com/guardian-masterclasses"
    />
</Navigation.SecondaryLinks>
```

##### `<Navigation.SecondaryLinksGroup />`

A column of links within the `SecondaryLinks` panel

###### Example

```jsx
<Navigation.SecondaryLinksGroup>
    <Navigation.SecondaryLink
        label="UK news"
        href="https://www.theguardian.com/uk"
    />
    <Navigation.SecondaryLink
        label="World news"
        href="https://www.theguardian.com/world"
    />
</Navigation.SecondaryLinksGroup>
```

###### `<Navigation.SecondaryLink />`

A navigational link that appears in the `Navigation.SecondaryLinks` component

###### Props

-   `href` _string_
    -   navigation location when `Navigation.SecondaryLink` is clicked
-   `label` _string_
    -   display label of the `Navigation.SecondaryLink`

###### Example

```jsx
<Navigation.SecondaryLink
    label="World news"
    href="https://www.theguardian.com/world"
/>
```

##### `<Navigation.SecondaryLinksSupplementalLink />`

A visually prominent navigational link that appears in the `Navigation.SecondaryLinks` component.

###### Example

```jsx
<Navigation.SecondaryLinksSupplementalLink
    label="Masterclasses"
    href="https://www.theguardian.com/guardian-masterclasses"
/>
```

###### Props

-   `href` _string_
    -   navigation location when `Navigation.SecondaryLinksSupplementalLink` is clicked
-   `label` _string_
    -   display label of the `Navigation.SecondaryLinksSupplementalLink`

## Specialised headers

### `<EditorialHeader />`

A special header layout for editorial pages. The logo and supporter messages are hard-coded.

#### Differences to generic header

##### Brandbar

-   Links to the left, floated right
-   Editions dropdown to the right
-   My account / sign in
    -   Links hierarchy
    -   Primary link – always visible
    -   Secondary links – visible at wider breakpoints
    -   Editions menu
    -   Is this a concept we want to reflect in the API?
-   Subscribe / Contribute links
-   `<SubscribeMessage />`?
    -   Hardcoded in Source?
    -   Currently inserted by automat

#### Example

```jsx
<EditorialHeader isSignedIn showMessage>
    <BrandBar>
        <BrandBar.Links>
            <BrandBar.Link href icon={<Icon />} label until from />
            <BrandBar.LinkList icon label until from>
                <BrandBar.Link href label />
                <BrandBar.Link href label />
            </BrandBar.LinkList>
            <BrandBar.Link href icon={<Icon />} label until from />
        </BrandBar.Links>
        <EditorialHeader.EditionSwitch onChange>
            <EditorialHeader.EditionSwitchItem href label />
            <EditorialHeader.EditionSwitchItem href label selected />
            <EditorialHeader.EditionSwitchItem href label />
        </EditorialHeader.EditionSwitch>
    </BrandBar>
    <Navigation />
    <Subnav />
</EditorialHeader>
```

#### Props

-   `isSignedIn` _boolean_
    -   whether to show the support buttons
-   `showSubscriberMessage` _boolean_
    -   whether to show the Thank You message
-   `edition` _string_ `'uk'` | `'au'` | `'us'` | `'international'`

#### `<EditorialHeader.EditionSwitch />`

The Editions switch dropdown menu appears to the right of the logo in the Editorial Header. It allows the user to switch the default edition of the network front that is displayed when they visit theguardian.com.

##### Example

```jsx
<EditorialHeader.EditionSwitch
    onChange={() => {
        localStorage.setItem('edition', 'uk');
    }}
>
    <EditorialHeader.EditionSwitchItem
        href="https://www.theguardian.com/preference/edition/uk"
        label="UK edition"
        selected={true}
    />
    <EditorialHeader.EditionSwitchItem
        href="https://www.theguardian.com/preference/edition/us"
        label="US edition"
    />
</EditorialHeader.EditionSwitch>
```

##### Props

-   `onChange` _function_
    -   callback for logic that runs when the Edition is changed

#### `<EditorialHeader.EditionSwitchItem />`

Represents a link to an Edition that appears in the Edition Switch dropdown menu.

##### Example

```jsx
<EditorialHeader.EditionSwitchItem
    href="https://www.theguardian.com/preference/edition/uk"
    label="UK edition"
    selected={true}
/>
```

##### Props

-   `href` _string_
    -   Target URL for `<EditorialHeader.EditionSwitchItem />`
    -   Navigation occurs after the `onChange` code has executed
-   `label` _string_
    -   display label of the `EditionSwitchItem`
-   `selected` _boolean_
    -   the currently selected EditionSwitchItem

## Risks and uncertainty

-   The support buttons / thank you message is delivered by Automat
    -   What is the state of Automat? Will it continue to be maintained, or should we take the opportunity to simplify?
-   Client side rendered consumers will have to ship multiple logos, or they would have to lazy load the correct SVG
-   How much can we hardcode?
    -   Logos
    -   Editions switch
    -   Support messaging
    -   BrandBar links
        -   Do we hardcode the URLs or should platforms control the actual links?
-   Should Source be aware of / managing Islands?
    -   We need to avoid re-rendering the entire header on the client because Nav is pretty huge, and doesn’t need to be dynamic
    -   Should we be imposing the Island architecture on all platforms?
    -   Could we allow consumers to compose their own header
        -   Via props
        -   `<EditorialHeader brandBar={<Island><BrandBar /></Island>} />`
