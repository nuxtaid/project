import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const version = process.argv[2]
if (!version) {
  console.error('Usage: node sync-versions.mjs <version>')
  process.exit(1)
}

const packageFiles = [
  resolve(root, 'package.json'),
  resolve(root, 'packages/core/package.json'),
  resolve(root, 'packages/web/package.json'),
]

for (const file of packageFiles) {
  const pkg = JSON.parse(readFileSync(file, 'utf-8'))
  pkg.version = version
  writeFileSync(file, JSON.stringify(pkg, null, 2) + '\n')
  console.log(`Updated ${file} to v${version}`)
}
