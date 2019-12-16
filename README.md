# Source components

A shared components library for Guardian Digital. Uses the Guardian's [Source Design System](https://zeroheight.com/2a1e5182b).

## Usage

**This project is still in alpha.** If you'd like to start using our foundations and components, please drop an email to
`digital.design.system` so we can add your project to our database.

Check out our [Getting Started guide](https://zeroheight.com/2a1e5182b/p/876251).

## Contributing

We welcome contributions to the Source Design System! Before you begin, please read our
[Contributing Guidelines](https://github.com/guardian/source-components/tree/master/CONTRIBUTING.md)

We also have a chat room (internal) at [Digital/Design system 👩‍🎨](https://chat.google.com/room/AAAAGDIhXQs).

### Install

```sh
$ yarn
```

### Develop

We develop components using Storybook:

```sh
$ yarn storybook
```

### Publish

**1.** After merging your branch, our Storybook is automatically deployed to [GitHub pages](https://guardian.github.io/source-components). Storybook stories may used in our documentation site.

**2.** Run the publish script within the component (you will need to be a member of the [`@guardian` npm organisation](https://www.npmjs.com/settings/guardian/members)):

```sh
$ cd packages/my-component
$ yarn publish --access public
```

**3.** Make necessary changes to the [documentation site](https://zeroheight.com/2a1e5182b)
