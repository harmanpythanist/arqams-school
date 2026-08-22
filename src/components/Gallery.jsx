import { useEffect, useState } from 'react'
import { GALLERY_IMAGES } from '../data.js'

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % GALLERY_IMAGES.length)
    }, 4000)
    return () => clearInterval(id)
  }, [paused])

  const go = (dir) => {
    setIndex((i) => (i + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
  }

  return (
    <section id="gallery" className="gallery">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">Campus Life</p>
        <h2 className="section-title section-title--dark">Our Gallery</h2>
        <p className="section-sub">
          A glimpse into everyday life at The Arqam Schools &mdash; classrooms,
          activities and moments from across our campuses.
        </p>
      </div>

      <div
        className="gallery__stage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className="gallery__arrow gallery__arrow--left" onClick={() => go(-1)} aria-label="Previous image">
          ‹
        </button>

        <div className="gallery__frame">
          {GALLERY_IMAGES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`The Arqam Schools campus ${i + 1}`}
              className={`gallery__img ${i === index ? 'gallery__img--active' : ''}`}
            />
          ))}
        </div>

        <button className="gallery__arrow gallery__arrow--right" onClick={() => go(1)} aria-label="Next image">
          ›
        </button>
      </div>

      <div className="gallery__thumbs">
        {GALLERY_IMAGES.map((src, i) => (
          <button
            key={src}
            className={`gallery__thumb ${i === index ? 'gallery__thumb--active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
          >
            <img src={src} alt="" />
          </button>
        ))}
      </div>
    </section>
  )
}
