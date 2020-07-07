# bundler-comparison

A quick test to see how various bundlers compare when bundling the Lodash source code.

```
git clone git@github.com:Rich-Harris/bundler-comparison.git
npm i
npm run build
```

## Results

<!-- START -->
|         | output size                                           | build time                                             |
|---------|-------------------------------------------------------|--------------------------------------------------------|
| rollup  | ▉▉ 53.9 kB   | ▉▉ 2.2s   |
| webpack | ▉▉▉ 64.2 kB | ▉▉ 1.7s |
| parcel  | ▉▉▉▉▉▉▉▉▉▉ 214 kB   | ▉▉▉▉▉▉▉▉▉▉ 7.9s   |
<!-- END -->