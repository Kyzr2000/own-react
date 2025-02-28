import render, { useState } from './utils/render'
import createElement from './utils/createElement'
const container = document.querySelector('#root')

const Counter = () => {
  const [state, setState] = useState(1)
  return createElement(
    'h1',
    { onclick: () => setState((prev) => prev + 1) },
    state
  )
}

const element = createElement(Counter)
render(element, container)
