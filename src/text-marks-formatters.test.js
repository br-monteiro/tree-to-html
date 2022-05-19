const assert = require('assert')
const { textBold, textItalic, textUnderline, textCode } = require('./text-marks-formatters')

describe('text-marks-formatters', () => {
  describe('#textBold', () => {
    it('should wrap the value by a <B> tag', () => {
      assert.strictEqual(textBold('edinho'), '<b>edinho</b>')
    })

    it('should return an empty <B> tag when the value is falsy', () => {
      assert.strictEqual(textBold(), '<b></b>')
      assert.strictEqual(textBold(''), '<b></b>')
      assert.strictEqual(textBold(false), '<b></b>')
      assert.strictEqual(textBold(0), '<b></b>')
      assert.strictEqual(textBold(undefined), '<b></b>')
      assert.strictEqual(textBold(null), '<b></b>')
    })
  })

  describe('#textItalic', () => {
    it('should wrap the value by a <I> tag', () => {
      assert.strictEqual(textItalic('edinho'), '<i>edinho</i>')
    })

    it('should return an empty <I> tag when the value is falsy', () => {
      assert.strictEqual(textItalic(), '<i></i>')
      assert.strictEqual(textItalic(''), '<i></i>')
      assert.strictEqual(textItalic(false), '<i></i>')
      assert.strictEqual(textItalic(0), '<i></i>')
      assert.strictEqual(textItalic(undefined), '<i></i>')
      assert.strictEqual(textItalic(null), '<i></i>')
    })
  })

  describe('#textUnderline', () => {
    it('should wrap the value by a <U> tag', () => {
      assert.strictEqual(textUnderline('edinho'), '<u>edinho</u>')
    })

    it('should return an empty <U> tag when the value is falsy', () => {
      assert.strictEqual(textUnderline(), '<u></u>')
      assert.strictEqual(textUnderline(''), '<u></u>')
      assert.strictEqual(textUnderline(false), '<u></u>')
      assert.strictEqual(textUnderline(0), '<u></u>')
      assert.strictEqual(textUnderline(undefined), '<u></u>')
      assert.strictEqual(textUnderline(null), '<u></u>')
    })
  })

  describe('#textCode', () => {
    it('should wrap the value by a <CODE> tag', () => {
      assert.strictEqual(textCode('edinho'), '<code>edinho</code>')
    })

    it('should return an empty <CODE> tag when the value is falsy', () => {
      assert.strictEqual(textCode(), '<code></code>')
      assert.strictEqual(textCode(''), '<code></code>')
      assert.strictEqual(textCode(false), '<code></code>')
      assert.strictEqual(textCode(0), '<code></code>')
      assert.strictEqual(textCode(undefined), '<code></code>')
      assert.strictEqual(textCode(null), '<code></code>')
    })
  })
})
