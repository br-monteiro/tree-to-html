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

  describe('#formatText', () => {
    it('should return an empty string when there is no value', () => {
      const data = {
        nodeType: 'text',
        marks: [],
        data: {}
      }

      assert.strictEqual('', formatText(data))
    })

    it('should return an empty string when thre are marks but there is no value', () => {
      const data = {
        nodeType: 'text',
        marks: [{
          type: 'underline'
        },
        {
          type: 'italic'
        },
        {
          type: 'bold'
        }],
        data: {}
      }

      assert.strictEqual('', formatText(data))
    })

    it('should return a text without mark tags', () => {
      const data = {
        nodeType: 'text',
        value: 'teste de conteúdo',
        marks: [],
        data: {}
      }

      assert.strictEqual('teste de conteúdo', formatText(data))
    })

    it('should return a text with <br>', () => {
      const data = {
        nodeType: 'text',
        value: 'teste\n de\n conteúdo',
        marks: [],
        data: {}
      }

      assert.strictEqual('teste<br> de<br> conteúdo', formatText(data))
    })

    it('should return a text wrapped with mark tags', () => {
      const data = {
        nodeType: 'text',
        value: 'teste de conteúdo',
        marks: [{
          type: 'underline'
        },
        {
          type: 'italic'
        },
        {
          type: 'bold'
        }],
        data: {}
      }

      assert.strictEqual('<b><i><u>teste de conteúdo</u></i></b>', formatText(data))
    })
  })

  describe('#formatTable', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'table',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should return an empty <TABLE> tag', () => {
      const data = {
        nodeType: 'table',
        data: {},
        content: [{}]
      }

      assert.strictEqual('<table></table>', formatText(data))
    })

    it('should return a complete table according content', () => {
      const expected = '<table><tr><th><p>header 1</p></th><th><p>header 2</p></th></tr><tr><td><p>célula 1</p></td><td><p>célula 2</p></td></tr></table>'
      const data = {
        nodeType: 'table',
        data: {},
        content: [
          {
            nodeType: 'table-row',
            data: {},
            content: [
              {
                nodeType: 'table-header-cell',
                data: {},
                content: [
                  {
                    nodeType: 'paragraph',
                    data: {},
                    content: [
                      {
                        nodeType: 'text',
                        value: 'header 1',
                        marks: [],
                        data: {}
                      }
                    ]
                  }
                ]
              },
              {
                nodeType: 'table-header-cell',
                data: {},
                content: [
                  {
                    nodeType: 'paragraph',
                    data: {},
                    content: [
                      {
                        nodeType: 'text',
                        value: 'header 2',
                        marks: [],
                        data: {}
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            nodeType: 'table-row',
            data: {},
            content: [
              {
                nodeType: 'table-cell',
                data: {},
                content: [
                  {
                    nodeType: 'paragraph',
                    data: {},
                    content: [
                      {
                        nodeType: 'text',
                        value: 'célula 1',
                        marks: [],
                        data: {}
                      }
                    ]
                  }
                ]
              },
              {
                nodeType: 'table-cell',
                data: {},
                content: [
                  {
                    nodeType: 'paragraph',
                    data: {},
                    content: [
                      {
                        nodeType: 'text',
                        value: 'célula 2',
                        marks: [],
                        data: {}
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }

      assert.strictEqual(expected, formatText(data))
    })
  })

  describe('#formatTableRow', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'table-row',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should return an empty <TR> tag', () => {
      const data = {
        nodeType: 'table-row',
        data: {},
        content: [{}]
      }

      assert.strictEqual('<tr></tr>', formatText(data))
    })
  })

  describe('#formatTableHeaderCell', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'table-header-cell',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should return an empty <TH> tag', () => {
      const data = {
        nodeType: 'table-header-cell',
        data: {},
        content: [{}]
      }

      assert.strictEqual('<th></th>', formatText(data))
    })
  })

  describe('#formatTableCell', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'table-cell',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should return an empty <TD> tag', () => {
      const data = {
        nodeType: 'table-cell',
        data: {},
        content: [{}]
      }

      assert.strictEqual('<td></td>', formatText(data))
    })
  })

  describe('#formatHr', () => {
    it('should return a <HR> tag', () => {
      const data = {
        nodeType: 'hr',
        data: {},
        content: []
      }

      assert.strictEqual('<hr>', formatText(data))
    })

    it('should return a <HR> tag after the content', () => {
      const data = {
        nodeType: 'hr',
        data: {},
        content: [{
          nodeType: 'text',
          value: 'teste de conteúdo',
          marks: [],
          data: {}
        }]
      }

      assert.strictEqual('<hr>teste de conteúdo', formatText(data))
    })
  })

  describe('#formatUnorderedList', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'unordered-list',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should return an empty <UL> tag', () => {
      const data = {
        nodeType: 'unordered-list',
        data: {},
        content: [{}]
      }

      assert.strictEqual('<ul></ul>', formatText(data))
    })
  })

  describe('#formatOrderedList', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'ordered-list',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should return an empty <OL> tag', () => {
      const data = {
        nodeType: 'ordered-list',
        data: {},
        content: [{}]
      }

      assert.strictEqual('<ol></ol>', formatText(data))
    })
  })

  describe('#formatListItem', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'list-item',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should wrap the content with a <LI> tag', () => {
      const data = {
        nodeType: 'list-item',
        data: {},
        content: [{
          nodeType: 'text',
          value: 'teste de conteúdo',
          marks: [],
          data: {}
        }]
      }

      assert.strictEqual('<li>teste de conteúdo</li>', formatText(data))
    })
  })

  describe('#formatBlockquote', () => {
    it('should return an empty string when there is no content itens', () => {
      const data = {
        nodeType: 'blockquote',
        data: {},
        content: []
      }

      assert.strictEqual('', formatText(data))
    })

    it('should wrap the content with a <BLOCKQUOTE> tag', () => {
      const data = {
        nodeType: 'blockquote',
        data: {},
        content: [{
          nodeType: 'text',
          value: 'teste de conteúdo',
          marks: [],
          data: {}
        }]
      }

      assert.strictEqual('<blockquote>teste de conteúdo</blockquote>', formatText(data))
    })
  })
})
