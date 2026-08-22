import { useState } from 'react'
import { GraduationCapIcon, OpenBookIcon, CrescentIcon, ShieldCheckIcon } from './CurriculumIcons.jsx'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons.jsx'
import { WHATSAPP_NUMBER, SOCIAL_LINKS } from '../data.js'

const GRADES = [
  { level: 'Play Group & Montessori', ages: 'Ages 3 – 5' },
  { level: 'Primary', ages: 'Grades 1 – 5' },
  { level: 'Middle', ages: 'Grades 6 – 8' },
  { level: 'Matriculation', ages: 'Grades 9 – 10' },
]

const FEATURES = [
  {
    title: 'Qualified Teachers',
    text: 'A trained faculty focused on individual attention and steady academic progress.',
    Icon: GraduationCapIcon,
  },
  {
    title: 'Modern & Islamic Education',
    text: 'National curriculum enriched with Islamiyat, Arabic and everyday values.',
    Icon: OpenBookIcon,
  },
  {
    title: 'Hifz-o-Tajveed',
    text: 'A dedicated track for Quran memorization alongside regular schooling.',
    Icon: CrescentIcon,
  },
  {
    title: 'Character Building',
    text: 'Discipline, courtesy and confidence built through daily practice, not lectures.',
    Icon: ShieldCheckIcon,
  },
]

const initialForm = { name: '', phone: '', query: '' }

export default function ContactCurriculum() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!form.phone.trim()) errs.phone = 'Please enter a contact number.'
    else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim())) errs.phone = 'Enter a valid phone number.'
    if (!form.query.trim()) errs.query = 'Tell us a little about your query.'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  return (
    <section id="curriculum" className="split">
      <div className="split__col split__col--form">
        <div className="form-card">
          <p className="eyebrow eyebrow--dark">Get In Touch</p>
          <h2 className="section-title section-title--dark">Ask Us Anything</h2>
          <p className="split__lede">
            Have a question about admissions, fees, or a campus visit? Send us
            a message and our admissions team will get back to you.
          </p>

          {submitted && (
            <div className="form-success" role="status">
              ✅ Thank you! Your query has been noted. Our team will reach out
              to you shortly.
            </div>
          )}

          <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Ahmed Raza"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <span className="field__error">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="phone">Contact Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="03XX-XXXXXXX"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="field__error">{errors.phone}</span>}
            </div>

            <div className="field">
              <label htmlFor="query">Your Query</label>
              <textarea
                id="query"
                name="query"
                rows={4}
                placeholder="Tell us how we can help..."
                value={form.query}
                onChange={handleChange}
              />
              {errors.query && <span className="field__error">{errors.query}</span>}
            </div>

            <button type="submit" className="btn btn--gold btn--block">
              Submit Query
            </button>
            <p className="form-note">
              This form doesn&apos;t send data anywhere yet &mdash; connect it
              to your backend or email service when ready.
            </p>
          </form>

          <div className="contact-alt">
            <span className="contact-alt__label">Or reach us directly</span>
            <div className="contact-alt__links">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="contact-alt__btn contact-alt__btn--whatsapp"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                className="contact-alt__btn contact-alt__btn--facebook"
              >
                <FacebookIcon /> Facebook
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="contact-alt__btn contact-alt__btn--instagram"
              >
                <InstagramIcon /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="split__col split__col--info">
        <div className="curriculum-panel">
          <p className="eyebrow eyebrow--gold">Our Curriculum</p>
          <h2 className="section-title section-title--light">
            Learning That Grows With Every Grade
          </h2>
          <p className="split__lede split__lede--light">
            From a child&apos;s first day of Montessori to Matriculation, The
            Arqam Schools follows a structured national curriculum, layered
            with Islamic studies and Hifz-o-Tajveed &mdash; so academics and
            character grow side by side.
          </p>

          <div className="grade-track">
            {GRADES.map((g, i) => (
              <div className="grade-track__item" key={g.level}>
                <span className="grade-track__dot">{i + 1}</span>
                <div>
                  <strong>{g.level}</strong>
                  <span>{g.ages}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="feature-grid">
            {FEATURES.map((f) => (
              <div className="feature-card" key={f.title}>
                <span className="feature-card__icon" aria-hidden="true"><f.Icon /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
