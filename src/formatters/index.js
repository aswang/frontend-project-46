import formatStylish from './stylish.js'
import formatPlain from './plain.js'
import formatJson from './json.js'

const getFormatter = (formatName) => {
  switch (formatName) {
    case 'stylish':
      return formatStylish
    case 'plain':
      return formatPlain
    case 'json':
      return formatJson
    default:
      throw new Error(`Unknown format: ${formatName}`)
  }
}

export default getFormatter
