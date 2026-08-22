import { useState } from 'react'
import { BRANCHES, WHATSAPP_NUMBER } from '../data.js'
import { LahoreLandmark, FaisalabadLandmark } from './Landmarks.jsx'
import { PhoneIcon, MailIcon, ClockIcon } from './ContactIcons.jsx'

const LANDMARKS = {
  Lahore: LahoreLandmark,
  Faisalabad: FaisalabadLandmark,
}

export default function Branches({ onNavigate }) {
  const [activeBranch, setActiveBranch] = useState(null)

  const closeDetails = () => setActiveBranch(null)

  const handleAdmission = () => {
    closeDetails()
    onNavigate?.('admission')
  }

  const handleDirections = () => {
    // TODO: hook up real directions/maps link later
  }

  return (
    <section id="branches" className="branches">
      <div className="section-head">
        <p className="eyebrow eyebrow--gold">Find Us</p>
        <h2 className="section-title section-title--light">Our Branches</h2>
        <p className="section-sub section-sub--light">
          The Arqam Schools currently operates campuses in two cities, with
          more on the way. Tap a branch to see its details.
        </p>
      </div>

      <div className="branches__grid">
        {BRANCHES.map((b) => {
          const Landmark = LANDMARKS[b.city]
          return (
            <button
              type="button"
              className="branch-card"
              key={b.city}
              onClick={() => setActiveBranch(b)}
            >
              <div className="branch-card__arch">
                {Landmark && <Landmark className="branch-card__landmark" aria-hidden="true" />}
                <span>{b.city}</span>
              </div>
              <div className="branch-card__body">
                <h3>{b.name}</h3>
                <p className="branch-card__hint">Tap for details</p>
              </div>
            </button>
          )
        })}
      </div>

      {activeBranch && (
        <div
          className="branch-modal__overlay"
          onClick={closeDetails}
          role="dialog"
          aria-modal="true"
        >
          <div className="branch-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="branch-modal__close"
              onClick={closeDetails}
              aria-label="Close"
            >
              ×
            </button>

            <h3>{activeBranch.name}</h3>
            <p className="branch-modal__address">{activeBranch.address}</p>

            <ul className="branch-modal__meta">
              <li>
                <PhoneIcon /> <a href={`tel:${activeBranch.phone}`}>{activeBranch.phone}</a>
              </li>
              <li>
                <MailIcon /> <a href={`mailto:${activeBranch.email}`}>{activeBranch.email}</a>
              </li>
              <li>
                <ClockIcon /> {activeBranch.hours}
              </li>
            </ul>

            <div className="branch-modal__actions">
              <button
                type="button"
                className="branch-modal__btn branch-modal__btn--admission"
                onClick={handleAdmission}
              >
                Admission
              </button>
              <button
                type="button"
                className="branch-modal__btn branch-modal__btn--directions"
                onClick={handleDirections}
              >
                Directions
              </button>
              <a
                className="branch-modal__btn branch-modal__btn--whatsapp"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
