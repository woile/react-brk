import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import {
  Desktop,
  Tablet,
  Mobile,
  Default,
} from 'src/'

describe('Breakpoints', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    viewport.reset()
    unmountComponentAtNode(node)
  })

  it('Desktop renders', () => {
    viewport.set(1080, 960)
    render(<Desktop>holis</Desktop>, node, () => {
      expect(node.innerHTML).toExist()
    })
  })

  it('Tablet renders', () => {
    viewport.set(768, 640)
    render(<Tablet>holis</Tablet>, node, () => {
      expect(node.innerHTML).toExist()
    })
  })

  it('Mobile renders', () => {
    viewport.set(766, 640)
    render(<Mobile>holis</Mobile>, node, () => {
      expect(node.innerHTML).toExist()
    })
  })

  it('Default renders', () => {
    viewport.set(1080, 960)
    render(<Default>holis</Default>, node, () => {
      expect(node.innerHTML).toExist()
    })
  })

  it('Renders Desktop and Default', () => {
    viewport.set(1080, 960)
    render(
      (<div>
              <Desktop>Desktop</Desktop>
              <Tablet>Tablet</Tablet>
              <Mobile>Mobile</Mobile>
              <Default>Default</Default>
            </div>), node,
      () => {
        expect(node.innerHTML).toContain('DesktopDefault')
      }
    )
  })

  it('Renders only mobile', () => {
    viewport.set(766, 640)
    render(
      (<div>
              <Desktop>Desktop</Desktop>
              <Tablet>Tablet</Tablet>
              <Mobile>Mobile</Mobile>
              <Default>Default</Default>
            </div>), node,
      () => {
        expect(node.innerHTML).toContain('Mobile')
      }
    )
  })

  it('Renders tablet and default', () => {
    viewport.set(770, 640)
    render(
      (<div>
              <Desktop>Desktop</Desktop>
              <Tablet>Tablet</Tablet>
              <Mobile>Mobile</Mobile>
              <Default>Default</Default>
            </div>), node,
      () => {
        expect(node.innerHTML).toContain('TabletDefault')
      }
    )
  })
})
