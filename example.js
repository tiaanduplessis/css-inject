import ccInject from 'css-inject'

const rules = `
  body { background: tomato; }
  div { padding: 10px; }
`

const remove = cssInject(rules)

// To remove style again
remove()