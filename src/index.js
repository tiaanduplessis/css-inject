const head = document.head
const link =
  head.querySelector('[rel="stylesheet"]') || head.querySelector('link')

export default function cssInject (rules = '') {
  const css = document.createElement('style')
  css.type = 'text/css'
  css.appendChild(document.createTextNode(rules))

  if (link) {
    head.insertBefore(css, link)
  } else {
    head.appendChild(css)
  }

  return () => head.removeChild(css)
}
