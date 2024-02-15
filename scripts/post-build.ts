import fs from 'fs'
import path from 'path'
import util from 'util'

import { parse } from 'semver'
import pkg from '../package.json'

async function run() {
  const version = parse(pkg.version)
  if (!version) {
    throw new Error('version not defined in package.json')
  }

  console.log('Building x.x.x files for version:', version)

  const readdirAsync = util.promisify(fs.readdir)
  const readFileAsync = util.promisify(fs.readFile)
  const writeFileAsync = util.promisify(fs.writeFile)

  const distPath = path.join(__dirname, '..', 'dist')

  const fileNames = await readdirAsync(distPath)

  const nonChunkFileNames = fileNames.filter(
    (fileName) =>
      !fileName.endsWith('.chunk.js') &&
      !fileName.endsWith('.chunk.js.LICENSE.txt'),
  )
  console.log('Duplicating files:', nonChunkFileNames)

  for (const fileName of nonChunkFileNames) {
    const content = await readFileAsync(path.join(distPath, fileName))

    const majorFileName = fileName.replace('latest', `${version.major}.x.x`)
    const minorFileName = fileName.replace(
      'latest',
      `${version.major}.${version.minor}.x`,
    )
    const patchFileName = fileName.replace(
      'latest',
      `${version.major}.${version.minor}.${version.patch}`,
    )
    const newFileNames = [majorFileName, minorFileName, patchFileName]

    for (const newFileName of newFileNames) {
      console.log('Creating file:', newFileName)
      await writeFileAsync(path.join(distPath, newFileName), content)
    }
  }

  console.log('Done :)')
}

run()
