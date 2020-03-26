import React from 'react'
import { render } from 'react-dom'

import { App } from '.'

export const mount = (doc: Document) => {
  const container = doc.createElement('div')
  container.style.height = '100%'
  container.style.display = 'flex'
  container.style.flexDirection = 'column'
  doc.body.appendChild(container)
  render(<App />, container)
}

mount(document)
