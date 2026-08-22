import { useEffect, useState } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1000)
    const removeTimer = setTimeout(() => setVisible(false), 1450)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`loader ${fading ? 'loader--fade' : ''}`} role="status" aria-label="Loading">
      <div className="loader__mark">
        <img src="/brand/logo.png" alt="" />
      </div>
      <p className="loader__text">The Arqam Schools</p>
      <div className="loader__bar">
        <span />
      </div>
    </div>
  )
}
