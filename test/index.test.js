import cssInject from '../src'

test('should be defined', () => {
  expect(cssInject).toBeDefined()
})

test('should inject a style element', () => {
  cssInject('body { background: red }')
  expect(document.head.querySelectorAll('style').length).toBe(1)
})
