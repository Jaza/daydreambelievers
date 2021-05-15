import { s3StsToken } from 'next-tinacms-s3'

export default s3StsToken(
  process.env.S3_UPLOAD_KEY,
  process.env.S3_UPLOAD_SECRET,
  process.env.S3_UPLOAD_REGION,
  process.env.S3_UPLOAD_BUCKET,
)
