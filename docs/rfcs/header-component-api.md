# `<Header />` component API

There is a plan to standardise headers across the Guardian's web products.

This proposal outlines an API that tries to capture the areas of standardisation while being as flexible as possible for end users.

> _See [the visual designs](https://www.figma.com/file/V8u2r27TFdjAWNM3p84ypC/%E2%9C%AD-Header?node-id=1989%3A71918) for more context._

## Example

```jsx
<Header>
    <Masthead>
        <Masthead.Links>
            <Masthead.Link href icon={<Icon />} label until from />
            <Masthead.Menu icon label until from>
                <Masthead.Link href label />
                <Masthead.Link href label />
            </Masthead.Menu>
            <Masthead.Link href icon={<Icon />} label until from />
        </Masthead.Links>
    </Masthead>
    <Navigation>
        <Navigation.Links>
            <Navigation.Link
                label="News"
                href="https://www.theguardian.com/news"
            />
        </Navigation.Links>
        <Navigation.Menu>
            <Navigation.MenuGroup>
                <Navigation.MenuLink
                    label="News"
                    href="https://www.theguardian.com/news"
                />
            </Navigation.MenuGroup>
            <Navigation.MenuGroup>
                <Navigation.MenuSupplementalLink
                    label="Masterclasses"
                    href="https://www.theguardian.com/guardian-masterclasses"
                />
            </Navigation.MenuGroup>
        </Navigation.Menu>
    </Navigation>
    <Subnav>
        <Subnav.Link
            label="UK politics"
            href="https://www.theguardian.com/politics"
        />
    </Subnav>
</Header>
```

## Component breakdown

### `<Header />`

Generic header component. The logo is hard-coded.

![Header](images/header-component-api/header.png)

#### Example

```jsx
<Header>
    <Masthead />
    <Navigation />
    <Subnav />
</Header>
```

### `<Masthead />`

The area at the top of the header that houses features related to the brand and customisation, rather than content discovery. Examples include the support message, top level links, the Guardian logo and the Edition Switch.

The logo is hardcoded.

![Masthead](images/header-component-api/masthead.png)

#### Example

```jsx
<Masthead.Links>
    <Masthead.Link href icon={<Icon />} label until from />
    <Masthead.Menu icon label until from>
        <Masthead.Link href label />
    </Masthead.Menu>
</Masthead.Links>
```

#### `<Masthead.Links />`

A list of top-level links and menus that is displayed at the very top of the header.

![Masthead links](images/header-component-api/masthead-links.png)

#### `<Masthead.Link />`

A link that is displayed in the `Masthead.Links` section of the header, or within a `Masthead.Menu` dropdown.

![Masthead link](images/header-component-api/masthead-link.png)

##### Props

-   `href` _string_
    -   navigation location when `Masthead.Link` is clicked
-   `onClick` _function_
    -   logic that is executed when the `Masthead.Link` is clicked
-   `label` _string_
    -   display label of the `Masthead.Link`
-   `icon` _ReactNode_
    -   icon that appears alongside the label
-   `from` _Breakpoint_
    -   the breakpoint at which the `Masthead.Link` becomes visible
-   `until` _Breakpoint_
    -   the breakpoint at which the `Masthead.Link` is no longer displayed

#### `<Masthead.Menu />`

A dropdown menu that is displayed in the `Masthead.Links` section of the header.

![Masthead link list](images/header-component-api/masthead-menu.png)

##### Props

-   `label` _string_
    -   display label of the `Masthead.Menu`
-   `icon` _ReactNode_
    -   icon that appears alongside the label
-   `from` _Breakpoint_
    -   the breakpoint at which the `Masthead.Menu` becomes visible
-   `until` _Breakpoint_
    -   the breakpoint at which the `Masthead.Menu` is no longer displayed

### `<Navigation />`

The top-level navigation menu.

![Navigation](images/header-component-api/navigation-expanded.png)

#### Example

```jsx
<Navigation>
    <Navigation.Links>
        <Navigation.Link label="News" href="https://www.theguardian.com/news" />
    </Navigation.Links>
    <Navigation.Menu>
        <Navigation.MenuGroup>
            <Navigation.MenuLink
                label="News"
                href="https://www.theguardian.com/news"
            />
        </Navigation.MenuGroup>
    </Navigation.Menu>
</Navigation>
```

#### `<Navigation.Links />`

The main visible navigational links

![Navigation primary links](images/header-component-api/navigation-primary-links.png)

##### Example

```jsx
<Navigation.Links>
    <Navigation.Link label="News" href="https://www.theguardian.com/news" />
</Navigation.Links>
```

##### `<Navigation.Link />`

A navigational link that appears in the `Navigation.Links` component

![Navigation primary link](images/header-component-api/navigation-primary-link.png)

###### Example

```jsx
<Navigation.Link
    label="News"
    href="https://www.theguardian.com/news"
    color={palette.news[400]}
    selected={true}
/>
```

###### Props

-   `href` _string_
    -   navigation location when `Navigation.Link` is clicked
-   `label` _string_
    -   display label of the `Navigation.Link`
-   `color` _string_
    -   hex value of the coloured selection indicator
-   `selected` _boolean_
    -   toggles the top link’s selection indicator

#### `<Navigation.Menu />`

An expanding menu that opens on click of the veggie burger icon, or the "more" link at wider breakpoints

![Navigation secondary links](images/header-component-api/navigation-secondary-links.png)

##### Example

```jsx
<Navigation.Menu>
    <Navigation.MenuGroup>
        <Navigation.MenuLink
            label="News"
            href="https://www.theguardian.com/news"
        />
    </Navigation.MenuGroup>
    <Navigation.MenuSupplementalLink
        label="Masterclasses"
        href="https://www.theguardian.com/guardian-masterclasses"
    />
</Navigation.Menu>
```

##### `<Navigation.MenuGroup />`

A column of links within the `SecondaryLinks` panel

![Navigation secondary links group](images/header-component-api/navigation-secondary-links-group.png)

###### Example

```jsx
<Navigation.MenuGroup>
    <Navigation.MenuLink
        label="UK news"
        href="https://www.theguardian.com/uk"
    />
    <Navigation.MenuLink
        label="World news"
        href="https://www.theguardian.com/world"
    />
</Navigation.MenuGroup>
```

###### `<Navigation.MenuLink />`

A navigational link that appears in the `Navigation.Menu` component

![Navigation secondary link](images/header-component-api/navigation-secondary-link.png)

###### Props

-   `href` _string_
    -   navigation location when `Navigation.MenuLink` is clicked
-   `label` _string_
    -   display label of the `Navigation.MenuLink`

###### Example

```jsx
<Navigation.MenuLink
    label="World news"
    href="https://www.theguardian.com/world"
/>
```

##### `<Navigation.MenuSupplementalLink />`

A visually prominent navigational link that appears in the `Navigation.Menu` component.

![Navigation secondary links supplemental link](images/header-component-api/navigation-secondary-links-supplemental-link.png)

###### Example

```jsx
<Navigation.MenuSupplementalLink
    label="Masterclasses"
    href="https://www.theguardian.com/guardian-masterclasses"
/>
```

###### Props

-   `href` _string_
    -   navigation location when `Navigation.MenuSupplementalLink` is clicked
-   `label` _string_
    -   display label of the `Navigation.MenuSupplementalLink`

### `<Subnav />`

A navigation for sub-categories below the current top-level category.

![Subnav](images/header-component-api/subnav.png)

#### Example

```jsx
<Subnav>
    <Subnav.Link
        label="UK"
        href="https://www.theguardian.com/uk"
    / >
    <Subnav.Link
        label="World"
        href="https://www.theguardian.com/world"
    / >
<Subnav/>
```

#### `<Subnav.Link />`

A navigational link that appears in the `Subnav` component

![Subnav](images/header-component-api/subnav-link.png)

##### Example

```jsx
<Subnav.Link label="UK politics" href="https://www.theguardian.com/politics" />
```

##### Props

-   `href` _string_
    -   navigation location when `Subnav.Link` is clicked
-   `label` _string_
    -   display label of the `Subnav.Link`

## Specialised headers

### `<EditorialHeader />`

A special header layout for editorial pages. The logo is hard-coded.

![Editorial header](images/header-component-api/editorial-header.png)

#### Differences to generic header

##### Masthead

-   Links to the left, floated right
-   Editions dropdown to the right
-   My account / sign in
    -   Links hierarchy
    -   Primary link – always visible
    -   Secondary links – visible at wider breakpoints
    -   Editions menu
-   Subscribe / Contribute links

#### Example

```jsx
<EditorialHeader>
    <Masthead>
        <EditorialHeader.Support />
        <Masthead.Links>
            <Masthead.Link href icon={<Icon />} label until from />
            <Masthead.Menu icon label until from>
                <Masthead.Link href label />
                <Masthead.Link href label />
            </Masthead.Menu>
            <Masthead.Link href icon={<Icon />} label until from />
        </Masthead.Links>
        <EditorialHeader.EditionSwitch onChange>
            <EditorialHeader.EditionSwitchItem href label />
            <EditorialHeader.EditionSwitchItem href label selected />
            <EditorialHeader.EditionSwitchItem href label />
        </EditorialHeader.EditionSwitch>
    </Masthead>
    <Navigation />
    <Subnav />
</EditorialHeader>
```

#### Props

-   `edition` _string_ `'uk'` | `'au'` | `'us'` | `'international'`

#### `<EditorialHeader.Support />`

Presents either the Support buttons, or the Thank You message depending on whether the user is a supporter

![Support buttons](images/header-component-api/support-buttons.png)
![Support thank you message](images/header-component-api/support-thank-you.png)

#### Props

-   `showSupportButtons` _boolean_
    -   whether to show the support buttons
-   `showSubscriberMessage` _boolean_
    -   whether to show the Thank You message
-   `readerRevenueLinks` _{ subscribe: string; support: string; contribute: string }_
    -   urls to assign to the support buttons

#### `<EditorialHeader.EditionSwitch />`

The Editions dropdown menu appears to the right of the logo in the Editorial Header. It allows the user to switch the default edition of the network front that is displayed when they visit theguardian.com.

![Editorial header edition switch](images/header-component-api/editorial-header-edition-switch.png)

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

![Editorial header edition switch item](images/header-component-api/editorial-header-edition-switch-item.png)

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
    -   Currently in support-dotcom-components. Should the component code live in Source?
-   Client side rendered consumers will have to ship multiple logos, or they would have to lazy load the correct SVG
-   How much can we hardcode?
    -   Logos
    -   Editions switch
    -   Support messaging
    -   Masthead links
        -   Do we hardcode the URLs or should platforms control the actual links?
-   Should Source be aware of / managing Islands?
    -   We need to avoid re-rendering the entire header on the client because Nav is pretty huge, and doesn’t need to be dynamic
    -   Should we be imposing the Island architecture on all platforms?
    -   Could we allow consumers to compose their own header
        -   Via props
        -   `<EditorialHeader masthead={<Island><Masthead /></Island>} />`
