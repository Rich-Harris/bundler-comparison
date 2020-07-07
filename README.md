# bundler-comparison

A quick test to see how various bundlers compare when bundling the Lodash source code.

```
git clone git@github.com:Rich-Harris/bundler-comparison.git
npm i
npm run build
```

## Results

<!-- START -->
|         | output size                                           |
|---------|-------------------------------------------------------|
| rollup  | ▉▉▉▉▉▉ 53.9 kB   |
| webpack | ▉▉▉▉▉▉▉ 64.2 kB |
| parcel  | ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 214 kB   |
<!-- END -->