const fs = require('fs');

const index = fs.readdirSync('lodash')
	.filter(file => !file.startsWith('.') && file.endsWith('.js'))
	.map(file => `export { default as ${file.slice(0, -3)} } from './lodash/${file}';`).join('\n');

fs.writeFileSync('index.js', index);