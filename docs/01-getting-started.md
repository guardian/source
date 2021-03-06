# Getting started

> Installing our shared components, foundations and utilities into your application.

## Welcome! 🤗 🎊 🤝

Thank you for looking at the Source docs! If you're new to the Guardian or new to Source, check out our [Source Welcome Pack](https://docs.google.com/document/d/12yv328Z0Ube-x2bwgRZjh51nMC1ls_23OICLpsyQmFE/) (internal document) for more background on the project and an introduction to the design system team. We love feedback, so if you have any questions or suggestions regarding this site or Source in general, please [get in touch](https://theguardian.design/2a1e5182b/p/231f6b-contact-us) ✉️.

## Install

Our library for the web lives in this repository. It is written in TypeScript, but you can still use our code even if your application is written in JavaScript.

We recommend using Yarn to manage dependencies. We also support NPM, but for brevity our documentation will assume you are using Yarn.

This guide assumes you have some familiarity with React and Babel. Setting up a React project from scratch is outside the scope of this guide, but [the example-rendering template](https://github.com/guardian/example-rendering) gets you most of the way there.

We recommend installing the following packages:

-   `react`
-   `@emotion/react`
-   `@guardian/src-foundations`

```shell
$ yarn add react@^17.0.1 @emotion/react@^11.1.2 @guardian/src-foundations
```

> See [Using Emotion](04-using-emotion.md) for guidance on how to configure Babel to use Emotion's css prop.

## Foundations

Foundations are the atoms from which all our visual design is built. They are intended for use with a CSS-in-JS library such as [Emotion](https://emotion.sh/).

```shell
$ yarn add @guardian/src-foundations
```

For full details, see the [Foundations docs](02-foundations.md).

## Components

We publish individually installable components written in [React](https://reactjs.org/) and [Emotion](https://emotion.sh/).

Install them using Yarn. For example, to install our [Button component](https://theguardian.design/2a1e5182b/p/435225-button/b/86f344):

```shell
$ yarn add @guardian/src-button
```

For full details, see the [Components docs](03-components.md).

## Version numbers

Foundations and components are independently installable. However, it is important to try to keep the version numbers consistent between all Source packages.

For instance, `@guardian/src-foundations@2.7.1` and `@guardian/src-button@2.8.0` are **not guaranteed to be compatible**.

In this case, we would advise upgrading `@guardian/src-foundations` to version 2.8.0.

### Upgrading all Source packages

It can be a chore to manually upgrade a whole bunch of Source packages to the latest version in one go. However, you can do this in a single command using the excellent [npm-check-updates:](https://github.com/raineorshine/npm-check-updates)

```shell
$ npx npm-check-updates "/^@guardian/src-.*\$/" -u --target greatest
```

You can then run `yarn`  or `npm install`  to install these updates into your `node_modules` folder.

If you find yourself doing this often, you can install npm-check-updates locally and add a script to your `package.json` that does this. For example:

```json
{
  "scripts": {
	"upgrade-src": "yarn ncu \"/^@guardian/src-.*$/\" -u --target greatest && yarn"
  }
}
```

