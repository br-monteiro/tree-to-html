const assert = require('assert')
const { formatText } = require('./rich-text-formatter')

describe('rich-text-formatter', () => {
  describe('#formatDocument', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'document',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should return an empty string when the value is invalid', () => {
      assert.strictEqual('', formatText())
      assert.strictEqual('', formatText(''))
      assert.strictEqual('', formatText({}))
      assert.strictEqual('', formatText([]))
      assert.strictEqual('', formatText(1))
      assert.strictEqual('', formatText(0))
      assert.strictEqual('', formatText(undefined))
      assert.strictEqual('', formatText(null))
      assert.strictEqual('', formatText(false))
      assert.strictEqual('', formatText(true))
    })
  })

  describe('#formatHeading1', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'heading-1',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should wrap the content with a <H1> tag', () => {
      const data = {
        nodeType: 'heading-1',
        data: {},
        content: [{
          nodeType: 'text',
          value: 'Teste de header',
          marks: [],
          data: {}
        }]
      }

      assert.strictEqual('<h1>Teste de header</h1>', formatText(data))
    })
  })

  describe('#formatHeading2', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'heading-2',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should wrap the content with a <H2> tag', () => {
      const data = {
        nodeType: 'heading-2',
        data: {},
        content: [{
          nodeType: 'text',
          value: 'Teste de header',
          marks: [],
          data: {}
        }]
      }

      assert.strictEqual('<h2>Teste de header</h2>', formatText(data))
    })
  })

  describe('#formatHeading3', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'heading-3',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should wrap the content with a <H3> tag', () => {
      const data = {
        nodeType: 'heading-3',
        data: {},
        content: [{
          nodeType: 'text',
          value: 'Teste de header',
          marks: [],
          data: {}
        }]
      }

      assert.strictEqual('<h3>Teste de header</h3>', formatText(data))
    })
  })

  describe('#formatHeading4', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'heading-4',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should wrap the content with a <H4> tag', () => {
      const data = {
        nodeType: 'heading-4',
        data: {},
        content: [{
          nodeType: 'text',
          value: 'Teste de header',
          marks: [],
          data: {}
        }]
      }

      assert.strictEqual('<h4>Teste de header</h4>', formatText(data))
    })
  })

  describe('#formatHeading5', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'heading-5',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should wrap the content with a <H5> tag', () => {
      const data = {
        nodeType: 'heading-5',
        data: {},
        content: [{
          nodeType: 'text',
          value: 'Teste de header',
          marks: [],
          data: {}
        }]
      }

      assert.strictEqual('<h5>Teste de header</h5>', formatText(data))
    })
  })

  describe('#formatHeading6', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'heading-6',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should wrap the content with a <H6> tag', () => {
      const data = {
        nodeType: 'heading-6',
        data: {},
        content: [{
          nodeType: 'text',
          value: 'Teste de header',
          marks: [],
          data: {}
        }]
      }

      assert.strictEqual('<h6>Teste de header</h6>', formatText(data))
    })
  })

  describe('#formatParagraph', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'paragraph',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should wrap the content with a <P> tag', () => {
      const data = {
        nodeType: 'paragraph',
        data: {},
        content: [{
          nodeType: 'text',
          value: 'teste de conteúdo',
          marks: [],
          data: {}
        }]
      }

      assert.strictEqual('<p>teste de conteúdo</p>', formatText(data))
    })
  })

  describe('#formatHyperlink', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'hyperlink',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should wrap the content with a <A> tag', () => {
      const data = {
        nodeType: 'hyperlink',
        data: {
          uri: 'https://www.test.com'
        },
        content: [{
          nodeType: 'text',
          value: 'teste de conteúdo',
          marks: [],
          data: {}
        }]
      }

      assert.strictEqual('<a href="https://www.test.com">teste de conteúdo</a>', formatText(data))
    })

    it('should return a <A> tag with # on href attribute when there is no data.uri', () => {
      const data = {
        nodeType: 'hyperlink',
        content: [{
          nodeType: 'text',
          value: 'teste de conteúdo',
          marks: [],
          data: {}
        }]
      }

      assert.strictEqual('<a href="#">teste de conteúdo</a>', formatText(data))
    })
  })
})
