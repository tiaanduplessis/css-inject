const head = document.head
const link = head.querySelector('[rel="stylesheet"]')

export default function cssInject (rules = '') {
  const css = document.createElement('style')
  css.type = 'text/css'
  css.appendChild(document.createTextNode(rules))
  head.insertBefore(css, link)
  return () => head.removeChild(css)
}
