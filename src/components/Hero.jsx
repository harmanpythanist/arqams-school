import useCountUp from '../useCountUp.js'
import SocialIconRow from './SocialIcons.jsx'

const STATS = [
  { end: 2, suffix: '', label: 'Campuses' },
  { end: 32, suffix: '+', label: 'Years of Excellence' },
  { end: 300, suffix: 'K+', label: 'Students Graduated' },
  { end: 400, suffix: '+', label: 'Hafiz-e-Quran' },
]

function Stat({ end, suffix, label }) {
  const [ref, value] = useCountUp(end)
  return (
    <div className="hero__stat" ref={ref}>
      <span className="hero__stat-number">{value}{suffix}</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const scrollToForm = (e) => {
    e.preventDefault()
    document.querySelector('#curriculum')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Est. 1993 · Lahore &amp; Faisalabad</p>
        <h1 className="hero__title">The Arqam Schools</h1>
        <p className="hero__subtitle">
          The Arqam Schools is a growing education network in Pakistan, raising
          confident learners through a balanced blend of modern academics,
          Hifz-o-Tajveed, and Islamic character-building &mdash; across our
          campuses in Lahore and Faisalabad.
        </p>
        <div className="hero__actions">
          <a href="#curriculum" className="btn btn--gold" onClick={scrollToForm}>
            Book a Visit
          </a>
          <a
            href="#curriculum"
            className="btn btn--outline"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#curriculum')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Explore Curriculum
          </a>
        </div>

        <div className="hero__follow">
          <span>Follow us</span>
          <SocialIconRow />
        </div>
      </div>

      <div className="hero__stats">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>

      <a
        href="#curriculum"
        className="hero__scroll-cue"
        onClick={scrollToForm}
        aria-label="Scroll down"
      >
        <span />
      </a>
    </section>
  )
}
