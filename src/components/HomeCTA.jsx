import { WHATSAPP_NUMBER, BRANCHES } from '../data.js'
import { WhatsAppIcon } from './SocialIcons.jsx'
import { PhoneIcon } from './ContactIcons.jsx'

export default function HomeCTA({ onNavigate }) {
  const primaryBranch = BRANCHES[0]

  return (
    <section id="home-cta" className="cta-banner">
      <div className="cta-banner__inner">
        <p className="eyebrow eyebrow--gold">Admissions Open</p>
        <h2 className="section-title section-title--light">
          Ready to Join The Arqam Family?
        </h2>
        <p className="section-sub section-sub--light">
          Seats are limited at every campus. Reach out today to book a
          campus visit or start your child&apos;s admission &mdash; from
          Play Group to Matriculation.
        </p>

        <div className="cta-banner__actions">
          <button
            type="button"
            className="btn btn--gold"
            onClick={() => onNavigate?.('admission')}
          >
            Apply for Admission
          </button>
          <a
            className="btn btn--outline"
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
          <a className="btn btn--outline" href={`tel:${primaryBranch.phone}`}>
            <PhoneIcon /> Call {primaryBranch.name}
          </a>
        </div>
      </div>
    </section>
  )
}
