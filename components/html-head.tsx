import Head from 'next/head'

export default function HtmlHead({ title }) {
  return <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <link href="//fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
    <link href="//fonts.googleapis.com/css?family=Kaushan+Script:400,700" rel="stylesheet" type="text/css" />
    <link href="//fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
  </Head>
}
