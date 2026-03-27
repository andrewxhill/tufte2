# Changesets

Add a changeset in any PR that should produce a package release.

Typical flow:

```bash
npx changeset
```

Choose:

- `patch` for fixes and small polish
- `minor` for new components, tokens, or backwards-compatible API
- `major` for breaking naming or behavior changes

When changesets land on `main`, GitHub Actions will open or update a release PR. Merging that PR will:

- bump `package.json`
- create the release commit and tag
- publish to npm
- create the GitHub release
