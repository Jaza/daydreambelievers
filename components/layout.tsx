import React from 'react'
import { useCMS } from 'tinacms'
import HtmlHead from './html-head'
import Nav from './nav'
import Footer from './footer'

export default function Layout({ children, title }) {
  const cms = useCMS()
  const navProps = {
    title,
    cms,
  }
  return <>
    <HtmlHead title={title} />
    <Nav {...navProps} />

    {children}

    <footer className="text-center">
      <Footer />
    </footer>
  </>
}
