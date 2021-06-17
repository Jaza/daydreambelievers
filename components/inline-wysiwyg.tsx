import { useEffect, useState } from 'react'
import { useCMS } from 'tinacms'

export function InlineWysiwyg(props) {
  const cms = useCMS()
  const [{ InlineWysiwyg }, setEditor] = useState({} as any)

  useEffect(() => {
    let isSubscribed = true

    if (!InlineWysiwyg && cms.enabled) {
      import('react-tinacms-editor').then((obj) => {
        if (isSubscribed) {
          setEditor(obj)
        }
      })
    }

    return () => {
      if (InlineWysiwyg) {
        setEditor(null)
      }

      isSubscribed = false
    }
  }, [cms.enabled])

  if (InlineWysiwyg) {
    return (
      <InlineWysiwyg {...props}/>
    )
  }

  return props.children
}
