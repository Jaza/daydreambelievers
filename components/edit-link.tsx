import { useCMS } from 'tinacms'

export default function EditLink() {
  const cms = useCMS()

  return (
    <a onClick={() => cms.toggle()} style={{ cursor: "pointer" }}>
      {cms.enabled ? 'Logout' : 'Login'}
    </a>
  )
}
