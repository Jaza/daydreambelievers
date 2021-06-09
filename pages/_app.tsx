import '../styles/libs/startbootstrap-freelancer/css/bootstrap.css'
import '../styles/libs/startbootstrap-freelancer/css/freelancer.css'
import '../styles/libs/font-awesome4/css/font-awesome.min.css'
import '../styles/index.css'
import React from 'react'
import App from 'next/app'
import { TinaCMS, TinaProvider } from 'tinacms'
import { GithubClient, TinacmsGithubProvider } from 'react-tinacms-github'
import {
  S3_SESSION_TOKEN,
  S3MediaStore,
  S3Provider,
  S3StsClient,
} from 'react-tinacms-s3'
import Cookies from 'js-cookie'

export default class Site extends App {
  cms: TinaCMS

  constructor(props) {
    super(props)

    const github = new GithubClient({
      proxy: '/api/proxy-github',
      authCallbackRoute: '/api/create-github-access-token',
      clientId: process.env.GITHUB_CLIENT_ID,
      baseRepoFullName: process.env.REPO_FULL_NAME, // e.g: tinacms/tinacms.org,
      baseBranch: process.env.BASE_BRANCH,
    })
    const s3Sts = new S3StsClient(
      process.env.S3_UPLOAD_REGION,
      process.env.S3_UPLOAD_BUCKET,
    )

    this.cms = new TinaCMS({
      enabled: !!props.pageProps.preview,
      apis: {
        github,
        s3Sts,
      },
      media: new S3MediaStore({
        s3Bucket: process.env.S3_UPLOAD_BUCKET,
        s3ReadUrl: process.env.S3_READ_URL,
        s3ServerSideEncryption: process.env.S3_SERVER_SIDE_ENCRYPTION
      }),
      sidebar: props.pageProps.preview,
      toolbar: props.pageProps.preview,
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <TinaProvider cms={this.cms}>
          <TinacmsGithubProvider
            onLogin={onGithubLogin}
            onLogout={onGithubLogout}
            error={pageProps.error}
          >
            <S3Provider
              onLogin={() => {}}
              onLogout={() => {}}
            >
              <Component {...pageProps} />
              <EditLink cms={this.cms} />
            </S3Provider>
          </TinacmsGithubProvider>
        </TinaProvider>
        <script src="/startbootstrap-freelancer/js/jquery.js" />
        <script src="/startbootstrap-freelancer/js/bootstrap.js" />
      </>
    )
  }
}

const onGithubLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null
  const headers = new Headers()

  if (token) {
    headers.append('Authorization', 'Bearer ' + token)
  }

  const resp = await fetch(`/api/preview`, { headers: headers })
  const data = await resp.json()

  if (resp.status == 200) {
    if (Cookies.get(S3_SESSION_TOKEN)) {
      window.location.href = window.location.pathname
    }
  }
  else {
    throw new Error(data.message)
  }
}

const onGithubLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload()
  })
}

const onS3Login = () => {
  if (Cookies.get(S3_SESSION_TOKEN)) {
    window.location.href = window.location.pathname
  }
}

export interface EditLinkProps {
  cms: TinaCMS
}

export const EditLink = ({ cms }: EditLinkProps) => {
  return (
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
    </button>
  )
}
