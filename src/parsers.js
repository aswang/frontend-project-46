import fs from 'fs'
import path from 'path'

const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const data = fs.readFileSync(absolutePath, 'utf-8')

  if (path.extname(filepath) !== '.json') {
    throw new Error(`Unsupported file format: ${path.extname(filepath)}`)
  }

  return JSON.parse(data)
}

export default parseFile
