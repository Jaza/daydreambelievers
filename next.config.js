require('dotenv').config()

module.exports = {
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    REPO_FULL_NAME: process.env.REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
    S3_UPLOAD_BUCKET: process.env.S3_UPLOAD_BUCKET,
    S3_UPLOAD_REGION: process.env.S3_UPLOAD_REGION,
    S3_READ_URL: process.env.S3_READ_URL,
    S3_SERVER_SIDE_ENCRYPTION: process.env.S3_SERVER_SIDE_ENCRYPTION,
  },
  target: 'serverless',
}
