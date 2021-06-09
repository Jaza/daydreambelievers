import React from 'react'
import {
  PreviewData,
  getGithubPreviewProps,
  parseJson,
} from 'next-tinacms-github'
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from 'react-tinacms-github'
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { usePlugin } from 'tinacms'
import { GetStaticProps } from 'next'
import { galleryBlock } from '../components/gallery'
import GalleryModals from '../components/gallery-modals'
import Hero from '../components/hero'
import Layout from '../components/layout'

export default function Home({ file, preview }) {
  const formOptions = {
    label: 'Home Page',
    fields: [
      { name: 'title', component: 'text' },
      { name: 'heroImage', component: 'image' },
    ],
  }

  const [pageData, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)

  useGithubToolbarPlugins()

  return (
    <InlineForm form={form}>
      <Layout title={pageData.title}>
        <Hero form={form} title={pageData.title} />
        <InlineBlocks name="blocks" blocks={HOME_BLOCKS} />
      </Layout>
      <GalleryModals blocks={pageData.blocks} />
    </InlineForm>
  )
}

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...(previewData as PreviewData<any>),
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
