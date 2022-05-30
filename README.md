# tree-to-html [![1. Unit Tests](https://github.com/br-monteiro/tree-to-html/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/br-monteiro/tree-to-html/actions/workflows/unit-tests.yml)
Simple implementation to build HTML according Contentful GraphQL API response

#### Supported NodeTypes
- blockquote
- document
- heading-1
- heading-2
- heading-3
- heading-4
- heading-5
- heading-6
- hr
- hyperlink
- list-item
- ordered-list
- paragraph
- table
- table-cell
- table-header-cell
- table-row
- text
- unordered-list

#### Common Usage
Just pass the `json` attribute value as a parameter to the `formatText(...)` function. See the `formatText` function usage below:

```javascript
const { formatText } = require('./src') // path to the implementation

const data = {
  "nodeType": "paragraph",
  "data": {},
  "content": [
    {
      "nodeType": "text",
      "value": "trecho de código",
      "marks": [
        {
          "type": "italic"
        },
        {
          "type": "bold"
        }
      ],
      "data": {}
    }
  ]
}

console.log(formatText(data))
// <p><i><b>trecho de código</b></i></p>
```

The outup of the execution above, look like:
```html
<p>
  <i>
    <b>
      trecho de código
    </b>
  </i>
</p>
```

#### Type definitions
The Contentful GraphQL API response have a common schema of object response. These type definitions look like:

```javascript
/**
 * @typedef RichTextNode
 * @property { string } nodeType
 * @property { string } [value]
 * @property { Array<MarkType> } [marks]
 * @property { RichTextNodeData } data
 * @property { Array<RichTextNode> } content
 */

/**
 * @typedef MarkType
 * @property { string } type
 */

/**
 * @typedef RichTextNodeData
 * @property { string } [uri]
 */
```

### LAUS DEO ∴
