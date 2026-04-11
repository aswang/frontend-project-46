import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const parsers = {
  '.json': JSON.parse,
  '.yml': yaml.load,
  '.yaml': yaml.load,
}

const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const data = fs.readFileSync(absolutePath, 'utf-8')
  const ext = path.extname(filepath)
  const parse = parsers[ext]

  if (!parse) {
    throw new Error(`Unsupported file format: ${ext}`)
  }

  return parse(data)
}

export default parseFile
