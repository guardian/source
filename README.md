# Source components

A shared components library for Guardian Digital. Uses the Guardian's [Source Design System](https://guardian.github.io/source-website/).

## Contributing

### Install

```sh
$ yarn
```

### Develop

We find it useful to develop components in Storybook:

```sh
$ yarn storybook
```

### Publish

**1.** After making changes, run the publish script within the component (you will need to be a member of the [`@guardian` npm organisation](https://www.npmjs.com/settings/guardian/members)):

```sh
$ cd packages/my-component
$ yarn publish
```

**2.** From the root level, re-deploy the Storybook docs:

```sh
$ yarn deploy
```

**3.** Raise a Pull Request against the [Source website repo](https://github.com/guardian/source-website), updating the version of the component and any making necessary documentation changes.
