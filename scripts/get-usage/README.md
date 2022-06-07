# Get Source Usage

This script runs analysis on a pre-configured list of repositories to discover their use of Source

## What?

The scripts outputs a `json` file containing:

-   A list of repositories and what components they use
-   A list of components and what repositories use them

## Why?

Having this information is useful to Source maintainers as it can inform decisions around the improvement or retirement of components.

It is also useful when making changes to know which projects will be affected and so solicit feedback or target comms accordingly.

## How?

The steps taken are:

1. Load the configuration in from disk
1. For each repository in the configuration:
    1. Clone the repository
    1. Create the `react-scanner` configuration file (using values from the analysis configuration)
    1. Run [`react-scanner`](https://github.com/moroshko/react-scanner)
    1. Extract the results
1. Collate the results from each repository
1. Write out the results to a `json` file

## Running the script

1. Clone the Source repository
1. Install all dependencies: `pnpm`
1. Run `pnpm get-usage`

### Config

The configuration object expects a `repos` key which is an array of objects.

Each object requires a name, which is the name of the repository to analyse. Currently, the expectation that these repositories are in the `guardian` organisation is hardcoded into the script.

Each object must also contain a `project` key which provides an array of objects each of which have the following keys:

-   name - this is the name of the project to be used in the results file(s)
-   paths - is a `|` split list of directories to analyse for a particular project

For example:

```json
{
    "repos": [
        {
            "repo": "discussion-rendering",
            "projects": [
                {
                    "name": "discussion-rendering",
                    "paths": "src"
                }
            ]
        },
        {
            "repo": "dotcom-rendering",
            "projects": [
                {
                    "name": "common-rendering",
                    "paths": "common-rendering/src"
                },
                {
                    "name": "dotcom-rendering",
                    "paths": "dotcom-rendering/src"
                },
                {
                    "name": "apps-rendering",
                    "paths": "apps-rendering/src"
                }
            ]
        }
    ]
}
```

## Improvements

-   [ ] Get a list of repositories, what packages they install and which of those packages are actually used
-   [ ] Add checks to ensure that the configuration contains all Source repositories
-   [ ] Run the script automagically on a schedule
-   [ ] Add this information to the Source dashboard
