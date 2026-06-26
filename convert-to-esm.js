const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const exportsArray = [];

for (const file of fs.readdirSync(srcDir)) {
    if (!file.endsWith('.js')) continue;
    if (file === 'index.js') continue;

    const filePath = path.join(srcDir, file);
    let code = fs.readFileSync(filePath, 'utf8');

    const name = path.basename(file, '.js');

    // function ema(...) -> export function ema(...)
    code = code.replace(
        new RegExp(`\\bfunction\\s+${name}\\s*\\(`),
        `export function ${name}(`
    );

    // remove module.exports = ema;
    code = code.replace(
        new RegExp(`\\n?module\\.exports\\s*=\\s*${name}\\s*;?\\s*$`, 'm'),
        ''
    );

    fs.writeFileSync(filePath, code.trimEnd() + '\n');

    exportsArray.push(`export * from './${file}';`);
}

fs.writeFileSync(
    path.join(srcDir, 'index.js'),
    exportsArray.join('\n') + '\n'
);

console.log(`Converted ${exports.length} modules.`);