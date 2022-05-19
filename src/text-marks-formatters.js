function textBold(value) {
  return `<b>${value || '' }</b>`
}

function textItalic(value) {
  return `<i>${value || '' }</i>`
}

function textUnderline(value) {
  return `<u>${value || '' }</u>`
}

function textCode(value) {
  return `<code>${value || '' }</code>`
}

module.exports = { textBold, textItalic, textUnderline, textCode }
