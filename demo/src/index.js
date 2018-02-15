import React, {Component} from 'react'
import {render} from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';
import './index.css'
import './flexboxgrid.min.css'

import {
  Desktop,
  Tablet,
  Mobile,
  Default,
} from '../../src'

class Demo extends Component {
  render() {
    return (
      <div className="container-fluid">

      <div className="row">
        <div className="col-xs-12 col-md-7 jumbo">
          <h1>React Breakpoints without tears</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12">
          <h2>About</h2>
          <p>

            Easy, ready to use, react media queries taken from <a href="https://github.com/contra/react-responsive">react-responsive</a>
            {' '}and packed here.
          </p>
          <p>
            This package lacks originality and does not introduce anything new.
          </p>
          <p>
            It's just a wrapper of react-responsive made for convinience, just plug and play.
          </p>
          <p>
            All the credit goes to the folks of <a href="https://github.com/contra/react-responsive">react-responsive</a>.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12">
          <h2>Installation</h2>
        </div>
        <div className="col-xs-12 col-sm-10 col-md-7">
          <SyntaxHighlighter language='bash' style={okaidia}>{`npm install react-breakpoints --save`}> </SyntaxHighlighter>
          <SyntaxHighlighter language='bash' style={okaidia}>{`yarn add react-breakpoints`}> </SyntaxHighlighter>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12">
          <h2>Example</h2>
          <p>Just resize the browser and you will see how the boxes appear and disappear</p>
        </div>
        <div className="col-xs-12 col-sm-10 col-md-7">
          <div className="row around-xs">
            <Desktop>
              <div className="col-xs-6 col-sm-4 ">
                <div className="box desktop">
                  Desktop <br/> (width > 992px)
                </div>
              </div>
            </Desktop>
            <Tablet>
              <div className="col-xs-6 col-sm-4 ">
                <div className="box tablet">
                  Tablet <br/>{' (768 \< width \< 991)'}
                </div>
              </div>
            </Tablet>
            <Mobile>
              <div className="col-xs-6 col-sm-4 ">
                <div className="box mobile">
                  Mobile <br/>{' (width < 767)'}
                </div>
              </div>
            </Mobile>
            <Default>
              <div className="col-xs-6 col-sm-4 ">
                <div className="box default">
                  Default <br/> (width > 768)
                </div>
              </div>
            </Default>
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="col-xs-12 col-sm-10 col-md-7">
          <SyntaxHighlighter language='jsx' style={okaidia}>{`
import { Desktop, Tablet, Mobile, Default } from 'react-brk'

const app = () => (
  <div>
    <Desktop>
      <div>Desktop (width > 992px)</div>
    </Desktop>
    <Tablet>
      <div>Tablet (768 < width < 991)</div>
    </Tablet>
    <Mobile>
      <div>Mobile (width < 767)</div>
    </Mobile>
    <Default>
      <div>Default (width > 768)</div>
    </Default>
  </div>
)
        `}</SyntaxHighlighter>
        </div>
      </div>
    </div>

    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
