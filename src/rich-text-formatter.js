const { textBold, textItalic, textUnderline, textCode } = require('./text-marks-formatters')

const MARKS_MAP = {
  bold: textBold,
  italic: textItalic,
  underline: textUnderline,
  code: textCode,
}

const NODE_MAP = {
  document: formatDocument,
  text: formatText,
  'heading-1': formatHeading1,
  'heading-2': formatHeading2,
  'heading-3': formatHeading3,
  'heading-4': formatHeading4,
  'heading-5': formatHeading5,
  'heading-6': formatHeading6,
  paragraph: formatParagraph,
  hyperlink: formatHyperlink,
  table: formatTable,
  'table-row': formatTableRow,
  'table-header-cell': formatTableHeaderCell,
  'table-cell': formatTableCell,
  hr: formatHr,
  'unordered-list': formatUnorderedList,
  'ordered-list': formatOrderedList,
  'list-item': formatListItem,
  blockquote: formatBlockquote
}

function formatTextByMarkType(value, markType) {
  return MARKS_MAP[markType] ? MARKS_MAP[markType](value) : value
}

/**
 * @param { RichTextNode } node
 */
function formatNode(node) {
  return NODE_MAP[node?.nodeType] ? NODE_MAP[node.nodeType](node) : ''
}

/**
 * @param { RichTextNode } node
 */
function formatDocument(node) {
  return node?.content?.length ? buildContent(node.content) : ''
}

/**
 * @param { string } prefix
 * @param { string } suffix
 * @param { RichTextNode } node
 * @param { * } defaultValue
 * @returns { string }
 */
function abstractFormatNode(prefix, suffix, node, defaultValue = '') {
  if (node?.content?.length) {
    const content = buildContent(node.content)
    return `${prefix}${content}${suffix}`
  }

  return defaultValue
}

/**
 * @param { Array<RichTextNode> } nodeContent
 * @returns { string }
 */
function buildContent(nodeContent) {
  return nodeContent
    .reduce((formattedNode, content) => `${formattedNode}${formatNode(content)}`, '')
}

/**
 * @param { RichTextNode } node
 */
function formatText(node) {
  if (node?.marks.length) {
    return node.marks
      .reduce((formattedText, mark) => formatTextByMarkType(formattedText, mark.type), node.value)
  }

  return node?.value || ''
}

/**
 * @param { RichTextNode } node
 */
function formatHyperlink(node) {
  if (node?.content?.length) {
    const content = buildContent(node?.content)
    return `<a href="${node?.data?.uri || '#'}">${content}</a>`
  }

  return ''
}

/**
 * @param { RichTextNode } node
 */
function formatHeading1(node) {
  return abstractFormatNode('<h1>', '</h1>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatHeading2(node) {
  return abstractFormatNode('<h2>', '</h2>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatHeading3(node) {
  return abstractFormatNode('<h3>', '</h3>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatHeading4(node) {
  return abstractFormatNode('<h4>', '</h4>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatHeading5(node) {
  return abstractFormatNode('<h5>', '</h5>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatHeading6(node) {
  return abstractFormatNode('<h6>', '</h6>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatParagraph(node) {
  return abstractFormatNode('<p>', '</p>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatTable(node) {
  return abstractFormatNode('<table>', '</table>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatTableRow(node) {
  return abstractFormatNode('<tr>', '</tr>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatTableHeaderCell(node) {
  return abstractFormatNode('<th>', '</th>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatTableCell(node) {
  return abstractFormatNode('<td>', '</td>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatUnorderedList(node) {
  return abstractFormatNode('<ul>', '</ul>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatOrderedList(node) {
  return abstractFormatNode('<ol>', '</ol>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatListItem(node) {
  return abstractFormatNode('<li>', '</li>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatBlockquote(node) {
  return abstractFormatNode('<blockquote>', '</blockquote>', node)
}

/**
 * @param { RichTextNode } node
 */
function formatHr(node) {
  return abstractFormatNode('', '', node, '<hr>')
}


module.exports = {
  formatText: formatNode
}
