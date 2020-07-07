const fs = require('fs');
const child_process = require('child_process');
const util = require('util');
const pb = require('pretty-bytes');

const exec = util.promisify(child_process.exec);

const bar = (p) => {
	return Array(Math.floor(p * 25)).fill('▉').join('');
};

async function main() {
	const sizes = {
		rollup: null,
		webpack: null,
		esbuild: null,
		parcel: null
	};
	
	await exec('npx rollup -c');
	sizes.rollup = fs.statSync('results/rollup.js').size;
	console.log(`rollup: ${pb(sizes.rollup)}`);

	await exec('npx webpack -c');
	sizes.webpack = fs.statSync('results/webpack.js').size;
	console.log(`webpack: ${pb(sizes.webpack)}`);

	await exec('npx parcel build -d results -o parcel.js -t node index.js');
	sizes.parcel = fs.statSync('results/parcel.js').size;
	console.log(`parcel: ${pb(sizes.parcel)}`);

	await exec('npx esbuild index.js --bundle --outfile=results/esbuild.js --minify --format=cjs --platform=node');
	sizes.esbuild = fs.statSync('results/esbuild.js').size;
	console.log(`esbuild: ${pb(sizes.esbuild)}`);

	const max_size = Math.max(...Object.values(sizes));

	const results = `
|         | output size                                           |
|---------|-------------------------------------------------------|
| rollup  | ${bar(sizes.rollup / max_size)} ${pb(sizes.rollup)}   |
| esbuild | ${bar(sizes.esbuild / max_size)} ${pb(sizes.esbuild)} |
| webpack | ${bar(sizes.webpack / max_size)} ${pb(sizes.webpack)} |
| parcel  | ${bar(sizes.parcel / max_size)} ${pb(sizes.parcel)}   |
`.trim();

	const README = fs.readFileSync('README.md', 'utf-8').replace(/<!-- START -->[\s\S]+<!-- END -->/m, `<!-- START -->\n${results}\n<!-- END -->`);
	fs.writeFileSync('README.md', README);

	console.log(`wrote results to README.md`);
}

main();