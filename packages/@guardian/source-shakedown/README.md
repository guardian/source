# Source Shakedown

This project is used to verify the output of the Source packages.

## How?

It runs two checks:

1. Verify that no exports have changed in the published packages

    This works similar to a snapshot test in that, if anything does change, the test must be updated. This ensures that subsequent releases haven't broken the package structure or unexpectedly removed exports from the public API. It uses jest to run the test.

2. Verify that no types have been removed

    This test works by importing all of the types from all packages into a file and then running `tsc`. It will capture types that have been removed but not fail when new types are added so, for now, the onus is on contributors and reviewers to remember to add new types to this file.

## Running locally

Shakedown requires all packages to be built before running.

You can run the tests including the build step by running (from the root directory): `yarn shakedown:shakedown`

If you are running locally and want to avoid rebuilding all packages each time then you can just rebuild the package(s) that have changed an then run: `yarn shakedown shakedown`
