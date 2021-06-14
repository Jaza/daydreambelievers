import { Component } from 'react'
import { CMS } from '@tinacms/core'

interface NavProps {
  title: string
  cms: CMS
}

class Nav extends Component<NavProps> {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const navStyle = this.props.cms.enabled ? { marginTop: "62px" } : {}
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation" style={navStyle}>
        <div className="container">
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#page-top">{this.props.title}</a>
          </div>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="hidden"><a href="#page-top"></a></li>

              <li className="page-scroll"><a href="#gallery">Gallery</a></li>
              <li className="page-scroll"><a href="#events">Events</a></li>
              <li className="page-scroll"><a href="#sponsors">Sponsors</a></li>
              <li className="page-scroll"><a href="#about">About</a></li>
              <li className="page-scroll"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
