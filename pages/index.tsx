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
import { eventsBlock } from '../components/events'
import { galleryBlock } from '../components/gallery'
import { sponsorsBlock } from '../components/sponsors'
import GalleryModals from '../components/gallery-modals'
import Hero from '../components/hero'
import Layout from '../components/layout'

export default function Home({ file, preview }) {
  const formOptions = {
    label: 'Page',
    fields: [
      {
        name: 'title',
        component: 'text',
        label: 'Title',
      },
      {
        name: 'heroImage',
        component: 'image',
        label: 'Hero image',
      },
      {
        name: 'byline',
        component: 'text',
        label: 'Byline',
      },
      {
        name: 'blocks',
        component: 'blocks',
        label: 'Blocks',
        templates: Object.keys(HOME_BLOCKS).reduce((r, k) => {
          r[k] = HOME_BLOCKS[k].template
          return r
        }, {}),
      },
      {
        name: 'footerCopyrightText',
        component: 'text',
        label: 'Footer copyright text',
      },
    ],
  }

  const [pageData, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)

  useGithubToolbarPlugins()

  return (
    <InlineForm form={form}>
      <Layout title={pageData.title}>
        <Hero title={pageData.title} />
        <InlineBlocks name="blocks" blocks={HOME_BLOCKS} />
        <GalleryModals blocks={pageData.blocks} />
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
  events: eventsBlock,
  sponsors: sponsorsBlock,
}
