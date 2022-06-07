# Scripts

This directory provides a series of scripts that are useful to the maintainers of Source.

## Running

Scripts that are intended to be run directly all contain aliases in at least one `package.json`.

For example, the `build-src.ts` script can be run using `pnpm build:src` from the root directory.

Some of the scripts in nested directories may need to be run via the workspace command (`pnpm --filter $WORKSPACE $COMMAND`). These cases will be documented in the README within that directory.

Some scripts are not intended to be run directly, and are instead consumed by other scripts within this directory. If you do have a need to run them directly, you can do so using `ts-node`. For example, `pnpm ts-node ./scripts/paths`. As these scripts are designed to be consumed by others, this is unlikely to yield any interesting behaviour but may be useful for debugging if you are developing on one or more of these files.
