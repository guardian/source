# Decision Records

## Keep `eslint-config` and `eslint-config-typescript` distinct

In https://github.com/guardian/configs/pull/144 we proposed merging our current eslint configs into one, so that we can use the same config for both typescript and javascript.

After discussion offline, https://github.com/sndrs and https://github.com/tjsilver concluded that approach was not sustainable.

### Why?

Initially it would mean JS codebases that use the plugin still have to pay the cost of eslint making checks for TS and then skipping them.

As we add, for example, framework configs too (e.g. react for dotcom, angular for ed tools), you will need to pay the cost of each config regardless of whether it is needed or not. 

Keeping them separate means you only pay the cost of the additional linting overhead where you get the benefit.
