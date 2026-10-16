# ymkz.dev

## GitHub Actions

Action の依存関係は `.github/workflows/actions.lock` で固定します。
ワークフローの依存関係を変更したら、次のコマンドで lockfile を再生成して検証します。

```sh
gh extension install github/gh-actions-lock --pin v0.2.0
gh actions-lock
gh actions-lock --verify
```

Renovate による Action の更新では、lockfile も再生成されます。

## Tasks

- clean

```sh { name=clean }
find . -name '.wrangler' -type d -prune -exec rm -rf '{}' +
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name 'pnpm-lock.yaml' -type f -prune -exec rm -rf '{}' +
```
