import React from 'react'
import HtmlHead from './html-head'
import Nav from './nav'

export default function Layout({ children, title }) {
  return <>
    <HtmlHead title={title} />
    <Nav title={title} />

    {children}
  </>
}
