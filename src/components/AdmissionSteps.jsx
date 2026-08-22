import { WHATSAPP_NUMBER } from '../data.js'
import { WhatsAppIcon } from './SocialIcons.jsx'

/*
 * Plain-language "what happens next" strip. Deliberately written the way a
 * parent would ask it, not the way a school would file it.
 */
const STEPS = [
  {
    title: 'Get in touch',
    text: 'Call us, message on WhatsApp, or fill the short admission form on this site. No fee to enquire.',
  },
  {
    title: 'Visit the campus',
    text: 'Come and see the classrooms, meet the teachers, and ask anything you want about fees and timings.',
  },
  {
    title: 'Register your child',
    text: 'Bring the birth certificate (B-Form) and last school report. We complete the paperwork with you.',
  },
]

export default function AdmissionSteps({ onNavigate }) {
  return (
    <section id="how-to-join" className="steps">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">Admissions</p>
        <h2 className="section-title section-title--dark">How to Join &mdash; in 3 Simple Steps</h2>
        <p className="section-sub">
          Joining The Arqam Schools is straightforward. Here is exactly what
          happens, from your first message to your child&apos;s first day.
        </p>
      </div>

      <ol className="steps__grid">
        {STEPS.map((s, i) => (
          <li className="step-card" key={s.title}>
            <span className="step-card__num" aria-hidden="true">
              {i + 1}
            </span>
            <h3 className="step-card__title">{s.title}</h3>
            <p className="step-card__text">{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="steps__cta">
        <button type="button" className="btn btn--gold" onClick={() => onNavigate?.('admission')}>
          Start the Admission Form
        </button>
        <a
          className="btn btn--outline btn--outline-dark"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon /> Ask a Question on WhatsApp
        </a>
      </div>
    </section>
  )
}
