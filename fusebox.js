require('fuse-box').fusebox({
  target: 'node',
  entry: './index.js',
  useSingleBundle: true
}).runProd({
	bundles: { 
		distRoot: 'results',
		app: './fusebox.js'
	}
});