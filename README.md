# bundler-comparison

A quick test to see how various bundlers compare when bundling the Lodash source code.

```
git clone git@github.com:Rich-Harris/bundler-comparison.git
git submodule update --init --recursive
npm i
npm run build
```

## Results

<!-- START -->
|         | output size                                           |
|---------|-------------------------------------------------------|
| rollup  | ▉▉▉▉▉▉ 53.9 kB   |
| esbuild | ▉▉▉▉▉▉ 59.5 kB |
| webpack | ▉▉▉▉▉▉▉ 64.2 kB |
| fusebox | ▉▉▉▉▉▉▉▉▉▉▉ 99.8 kB |
| parcel  | ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 214 kB   |

|         | gzipped size                                          |
|---------|-------------------------------------------------------|
| rollup  | ▉▉▉▉▉▉▉▉▉▉▉ 16.9 kB   |
| webpack | ▉▉▉▉▉▉▉▉▉▉▉▉▉ 18.6 kB |
| esbuild | ▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 21.2 kB |
| fusebox | ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 23.3 kB |
| parcel  | ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 35.8 kB   |
<!-- END -->

Note: Parcel gets a dramatically better outcome with the `--experimental-scope-hoisting` option (smaller than webpack, almost as small as Rollup). Parcel 2 enables this option automatically, but I couldn't get it to create a non-empty bundle.