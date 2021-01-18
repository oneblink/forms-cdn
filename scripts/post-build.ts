import fs from 'fs'
import path from 'path'
import util from 'util'

import { parse } from 'semver'

async function run() {
  const tag = process.env.CI_COMMIT_TAG
  if (!tag) {
    return
  }

  const version = parse(tag)

  const readdirAsync = util.promisify(fs.readdir)
  const readFileAsync = util.promisify(fs.readFile)
  const writeFileAsync = util.promisify(fs.writeFile)

  const distPath = path.join(__dirname, '..', 'dist')

  const fileNames = await readdirAsync(distPath)

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
      await writeFileAsync(path.join(distPath, newFileName), content, 'UTF-8')
    }
  }
}

run()
