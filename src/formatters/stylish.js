import _ from 'lodash'

const indent = (depth, shift = 0) => ' '.repeat(depth * 4 - shift)

const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return String(value)
  }

  const lines = Object.entries(value).map(
    ([key, val]) => `${indent(depth + 1)}${key}: ${stringify(val, depth + 1)}`,
  )

  return `{\n${lines.join('\n')}\n${indent(depth)}}`
}

const formatStylish = (diff, depth = 1) => {
  const lines = diff.map((node) => {
    switch (node.type) {
      case 'added':
        return `${indent(depth, 2)}+ ${node.key}: ${stringify(node.value, depth)}`
      case 'removed':
        return `${indent(depth, 2)}- ${node.key}: ${stringify(node.value, depth)}`
      case 'changed':
        return [
          `${indent(depth, 2)}- ${node.key}: ${stringify(node.value1, depth)}`,
          `${indent(depth, 2)}+ ${node.key}: ${stringify(node.value2, depth)}`,
        ].join('\n')
      case 'nested':
        return `${indent(depth)}${node.key}: ${formatStylish(node.children, depth + 1)}`
      case 'unchanged':
        return `${indent(depth)}${node.key}: ${stringify(node.value, depth)}`
      default:
        throw new Error(`Unknown node type: ${node.type}`)
    }
  })

  return `{\n${lines.join('\n')}\n${indent(depth - 1)}}`
}

export default formatStylish
