# Source Analysis

This script runs analysis on a pre-configured list of repositories to discover their use of Source

## What?

The scripts outputs `json` and `csv` files containing:

-   A list of repositories and what components they use
-   A list of components and what repositories use them
-   A list of repositories, what packages they install and which of those packages are actually used

## Why?

Having this information is useful to Source maintainers as it can inform decisions around the improvement or retirement of components.

It is also useful when making changes to know which projects will be affected and so solicit feedback or target comms accordinly.

## How?

The steps taken are:

1. Load the configuration in from disk
1. For each repository in the configuration:
    1. Clone the repository
    1. Create the `react-scanner` configuration file (using values from the analysis configuration)
    1. Run [`react-scanner`](https://github.com/moroshko/react-scanner)
    1. Extract the results
    1. Remove the repository
1. Collate the results from each repository
1. Write out the results to a `csv` and `json` file

## Running the script

1. Clone the Source repository
1. Install all dependencies: `yarn`
1. Create a `config.json` file in the `scripts/analysis` directory (ask a maintainer for their copy)
1. Run `yarn analysis`

## Improvements

-   [ ] Store the configuration in S3 and fetch it from there at the start of the run
-   [ ] Add checks to ensure that the configuration contains all Source repositories
-   [ ] Run the script automagically on a schedule
-   [ ] Add this information to the Source dashboard
