import fs from 'fs'
import path from 'path'
import util from 'util'

import { parse } from 'semver'
import pkg from '../package.json'

async function run() {
  const version = parse(pkg.version)

  console.log('Deploying:', version)

  const readdirAsync = util.promisify(fs.readdir)
  const readFileAsync = util.promisify(fs.readFile)
  const writeFileAsync = util.promisify(fs.writeFile)

  const distPath = path.join(__dirname, '..', 'dist')

  const fileNames = await readdirAsync(distPath)

  console.log('Duplicating files:', fileNames)

  for (const fileName of fileNames) {
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
      await writeFileAsync(path.join(distPath, newFileName), content, 'UTF-8')
    }
  }

  console.log('Done :)')
}

run()
