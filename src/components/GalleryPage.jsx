import { useEffect, useState } from 'react'
import { GALLERY_IMAGES } from '../data.js'

export default function GalleryPage() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % GALLERY_IMAGES.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section id="gallery-page" className="gallery-page">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">Campus Life</p>
        <h2 className="section-title section-title--dark">Our Gallery</h2>
        <p className="section-sub">
          Moments from classrooms, events and celebrations across The Arqam
          Schools. Tap any photo to view it larger.
        </p>
      </div>

      <div className="gallery-page__grid">
        {GALLERY_IMAGES.map((src, i) => (
          <button
            key={src}
            className="gallery-page__item"
            onClick={() => setActive(i)}
            aria-label={`View photo ${i + 1}`}
          >
            <img src={src} alt={`The Arqam Schools campus ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="gallery-lightbox" onClick={() => setActive(null)}>
          <button
            className="gallery-lightbox__close"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="gallery-lightbox__nav gallery-lightbox__nav--left"
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <img
            src={GALLERY_IMAGES[active]}
            alt={`The Arqam Schools campus ${active + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="gallery-lightbox__nav gallery-lightbox__nav--right"
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => (i + 1) % GALLERY_IMAGES.length)
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
