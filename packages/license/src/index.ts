import * as fs from 'fs';
import * as path from 'path';
import minimist from 'minimist'

function getVersion() {
  return JSON.parse(
    fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8')
  ).version;
}

console.log(process.argv);
const args = minimist(process.argv.slice(2));
console.log(args);
console.log(getVersion());
