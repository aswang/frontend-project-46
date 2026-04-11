import formatStylish from './stylish.js'

const getFormatter = (formatName) => {
  switch (formatName) {
    case 'stylish':
      return formatStylish
    default:
      throw new Error(`Unknown format: ${formatName}`)
  }
}

export default getFormatter
