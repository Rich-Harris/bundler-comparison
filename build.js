const fs = require('fs');
const child_process = require('child_process');
const util = require('util');
const pms = require('pretty-ms');
const pb = require('pretty-bytes');

const exec = util.promisify(child_process.exec);

const bar = (p) => {
	return Array(Math.floor(p * 20)).fill('▉').join('');
};

async function main() {
	let start = Date.now();
	const time = () => -(start - (start = Date.now()));

	const times = {
		rollup: null,
		webpack: null,
		parcel: null
	};

	const sizes = {
		rollup: null,
		webpack: null,
		parcel: null
	};
	
	await exec('npx rollup -c');
	times.rollup = time();
	sizes.rollup = fs.statSync('results/rollup.js').size;

	await exec('npx webpack -c');
	times.webpack = time();
	sizes.webpack = fs.statSync('results/webpack.js').size;

	await exec('npx parcel build -d results -o parcel.js -t node index.js');
	times.parcel = time();
	sizes.parcel = fs.statSync('results/parcel.js').size;

	const max_time = Math.max(...Object.values(times));
	const max_size = Math.max(...Object.values(sizes));

	const results = `
|         | output size                                           | build time                                             |
|---------|-------------------------------------------------------|--------------------------------------------------------|
| rollup  | ${bar(sizes.rollup / max_size)} ${pb(sizes.rollup)}   | ${bar(times.rollup / max_time)} ${pms(times.rollup)}   |
| webpack | ${bar(sizes.webpack / max_size)} ${pb(sizes.webpack)} | ${bar(times.webpack / max_time)} ${pms(times.webpack)} |
| parcel  | ${bar(sizes.parcel / max_size)} ${pb(sizes.parcel)}   | ${bar(times.parcel / max_time)} ${pms(times.parcel)}   |
`.trim();

	const README = fs.readFileSync('README.md', 'utf-8').replace(/<!-- START -->[\s\S]+<!-- END -->/m, `<!-- START -->\n${results}\n<!-- END -->`);
	fs.writeFileSync('README.md', README);
}

main();