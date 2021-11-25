# `get-icons`

This script pulls in the svg source of icons from Figma and updates the `src-icons` package.

## Usage

Run the script using the following command:

`yarn workspace get-icons start`

Currently, this script is written to use a Personal Access Token (PAT) to authenticate against the Figma API. Once you have [created your token](https://www.figma.com/developers/api#access-tokens), you can set it as the value of the `FIGMA_TOKEN` environment variable which the script will then include with requests to the Figma API.

## Process

### Fetching

The process to retrieve the source code for each icon from the Figma API is as follows:

1. Query the [file components](https://www.figma.com/developers/api#get-file-components-endpoint) endpoint using the file key to get a list of all components within the icons file.
2. Filter this list for components that are in the desired containing frame and are not in the list of icons to ignore.
3. Query the [images](https://www.figma.com/developers/api#get-images-endpoint) endpoint to generate and retrieve a corresponding s3 url for each component, containing the svg source for that component.
4. Retrieve the contents of each file from s3 and write to disk with the corresponding node name.

#### Exceptions

There are a handful of special cases, where the icons retain some of the attributes that are typically removed. These icons are:

-   `apple-brand`
-   `facebook-brand`
-   `google-brand`
-   `paypal`

As none of these follow a consistent pattern, it is hard to automate them. Currently, this script ignores them completely. For now, the process for these icons should be to pull them in manually when any changes occur. Going forwards, we should investigate whether it's possible to standardise these cases further, and thus automate them.

### Transforming

The SVG pulled in from Figma is transformed slightly before being written to disk. This transformation involves removing certain attributes from different tags.

From the outer `<svg>` tag, the following attributes are removed:

-   fill
-   width
-   height

From any child tags, the following attributes are removed:

-   fill

In order to do this, the [node-html-parser](https://github.com/taoqf/node-html-parser) library is used to parse the source and the `removeAttribute` function to remove these attributes before converting back to a string.

### Formating

The contents is formatted using [js-beautify](https://www.npmjs.com/package/js-beautify) before being written to disk.
