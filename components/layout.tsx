import React from 'react'
import { useCMS } from 'tinacms'
import HtmlHead from './html-head'
import Nav from './nav'

export default function Layout({ children, title }) {
  const cms = useCMS()
  return <>
    <HtmlHead title={title} />
    <Nav title={title} cms={cms} />

    {children}
  </>
}
