import { useEffect, useRef } from 'react'
import { init } from '@waline/client'
import { waline } from '@/config.json'
import '@waline/client/style'

export function Comment() {
  const ref = useRef(null)

  useEffect(() => {
    const walineInst = init({
      el: ref.current,
      serverURL: waline.serverURL,
      dark: "[data-theme='dark']",
      login: 'force',
      imageUploader: false,
      locale: {
        placeholder: 'Leave a friendly comment (Markdown syntax supported)…',
      },
      emoji: ['//unpkg.com/@waline/emojis@1.1.0/bilibili'],
    })

    return () => walineInst?.destroy()
  }, [])

  return <div ref={ref}></div>
}
