import { CAMPUSES } from '../data.js'
import { PinIcon } from './ContactIcons.jsx'

export default function CampusPage({ onApply }) {
  return (
    <section id="campus-page" className="campus-page">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">Our Campuses</p>
        <h2 className="section-title section-title--dark">Find Your Nearest Campus</h2>
        <p className="section-sub">
          The Arqam Schools operates five campuses across Lahore, each
          offering the same quality education from Kindergarten to
          Matriculation. Select a campus below to begin the admission
          process.
        </p>
      </div>

      <div className="campus-grid">
        {CAMPUSES.map((c) => (
          <div className="campus-card" key={c.id}>
            <div className="campus-card__image">
              <img src={c.image} alt={c.name} loading="lazy" />
            </div>
            <div className="campus-card__body">
              <h3>{c.name}</h3>
              <p>{c.description}</p>
              <div className="campus-card__actions">
                <button
                  type="button"
                  className="campus-card__cta"
                  onClick={() => onApply(c)}
                >
                  Apply for Admission
                </button>
                <a
                  className="campus-card__cta campus-card__cta--outline"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PinIcon />
                  Location
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
