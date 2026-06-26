// Run this from your project root after `npm run build`
// node generate-types.js
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const typesDir = 'types';
const files = readdirSync(typesDir).filter(f => f.endsWith('.d.ts'));
files.sort();

let output = '// Auto-generated — run `node generate-types.js` after build\n\n';

for (const file of files) {
    const content = readFileSync(join(typesDir, file), 'utf8');
    const converted = content
        .replace(/^export = \w+;\n?/m, '')
        .replace(/^declare function /gm, 'export function ');
    output += converted.trim() + '\n\n';
}

writeFileSync('dist/index.d.ts', output);
console.log(`Written dist/index.d.ts (${output.split('\n').length} lines)`);