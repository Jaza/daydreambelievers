import React from 'react'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from 'react-tinacms-github'
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { usePlugin } from 'tinacms'
import { GetStaticProps } from 'next'
import { galleryBlock } from '../components/gallery'
import Hero from '../components/hero'
import Layout from '../components/layout'

export default function Home({ file, preview }) {
  const formOptions = {
    label: 'Home Page',
    fields: [{ name: 'title', component: 'text' }],
  }

  const [pageData, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)

  useGithubToolbarPlugins()

  return (
    <InlineForm form={form}>
      <Layout {...pageData}>
        <Hero form={form} {...pageData} />
        <InlineBlocks name="blocks" blocks={HOME_BLOCKS} />
      </Layout>
    </InlineForm>
  )
}

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/home.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/home.json',
        data: (await import('../content/home.json')).default,
      },
    },
  }
}

const HOME_BLOCKS = {
  gallery: galleryBlock,
}
