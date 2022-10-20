# Contributing

Please read the [Contributing](https://guardian.github.io/source/?path=/story/contributing-overview--page) page in Storybook.

## Contributing to Source Development Kitchen

Thank you for contributing!

The Source Development Kitchen is a place where you can build components that can be shared across platforms without the overhead of having to meet all the strict criteria of Source 'proper'.

While we expect you to consider the code you're writing, and take the usual care in its development, Source maintainers will take a light touch approach to reviewing Development Kitchen contributions. We aim to foster greater visibility of new components across teams and platforms.

### Submitting PRs

Once your code is ready, please create your PR and include a description of what your new component, and why it is useful. CSTI (who maintain Source) will be automatically assigned as reviewers, and will aim to get back to you within 48 hours. However, if something is urgent, please feel free to chase us at [divx@guardian.co.uk](mailto:divx@guardian.co.uk).

### Releases

Source Development Kitchen NPM releases are automated using [changesets](https://github.com/changesets/changesets). When creating a PR, please add a changeset by running `yarn changeset`. This will create a file with an arbitrary name in the `.changesets` folder which you can edit if necessary to describe the change. When your PR is merged, a PR called 'Release package updates' is created automatically which is merged by the CSTI team.
