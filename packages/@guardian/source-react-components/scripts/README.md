# `@guardian/source-react-components` scripts

## `fetch-icons`

Pulls the SVG source of icons from Figma and updates icon components.

Run the script using the following command:

```sh
yarn workspace @guardian/source-react-components fetch-icons
```

It requires a Personal Access Token (PAT) to authenticate against the Figma API.

1. [Create a token](https://www.figma.com/developers/api#access-tokens)
2. Create an environment variable called `FIGMA_TOKEN`, using the token as the value.

_Note:_ The script does not run as part of the build process to ensure we don't inadvertently pick up changes to icons as part of an unrelated change.
