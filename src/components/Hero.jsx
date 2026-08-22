import useCountUp from '../useCountUp.js'
import SocialIconRow from './SocialIcons.jsx'

const STATS = [
  { end: 2, suffix: '', label: 'Cities', sub: 'Lahore & Faisalabad' },
  { end: 32, suffix: '+', label: 'Years Teaching', sub: 'Since 1993' },
  { end: 300, suffix: 'K+', label: 'Students Taught', sub: 'Across generations' },
  { end: 400, suffix: '+', label: 'Hafiz-e-Quran', sub: 'Completed Hifz' },
]

/* Plain-language answers to the first three questions every parent asks. */
const QUICK_FACTS = [
  { icon: 'grades', title: 'Play Group to Matric', text: 'One school for your child’s whole journey.' },
  { icon: 'book', title: 'Academics + Quran', text: 'Board curriculum with daily Quran and Hifz.' },
  { icon: 'pin', title: 'Two cities', text: 'Campuses in Lahore and Faisalabad.' },
]

function FactIcon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }
  if (name === 'grades') {
    return (
      <svg {...common}>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
      </svg>
    )
  }
  if (name === 'book') {
    return (
      <svg {...common}>
        <path d="M12 7c-1.8-1.3-4-2-6.5-2H3v13h2.5c2.5 0 4.7.7 6.5 2 1.8-1.3 4-2 6.5-2H21V5h-2.5C16 5 13.8 5.7 12 7Z" />
        <path d="M12 7v13" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.8" />
    </svg>
  )
}

function Stat({ end, suffix, label, sub }) {
  const [ref, value] = useCountUp(end)
  return (
    <div className="hero__stat" ref={ref}>
      <span className="hero__stat-number">
        {value}
        {suffix}
      </span>
      <span className="hero__stat-label">{label}</span>
      <span className="hero__stat-sub">{sub}</span>
    </div>
  )
}

export default function Hero({ onNavigate }) {
  const go = (tab) => (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(tab)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const scrollTo = (selector) => (e) => {
    e.preventDefault()
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Decorative layers: campus photo, brand wash, arch motif */}
      <div className="hero__bg" aria-hidden="true">
        <img src="/campuses/pak-arab-society.jpg" alt="" />
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__arches" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <img src="/brand/logo.png" alt="" aria-hidden="true" />
          <span>Est. 1993 &middot; Lahore &amp; Faisalabad</span>
        </div>

        <h1 className="hero__title">
          A school where your child grows in
          <em> knowledge</em> and <em>character</em>.
        </h1>

        <p className="hero__subtitle">
          The Arqam Schools teaches the full national curriculum alongside
          Quran, Hifz and Islamic studies &mdash; from Play Group all the way to
          Matriculation.
        </p>

        <div className="hero__actions">
          <a href="#admission" className="btn btn--gold btn--lg" onClick={go('admission')}>
            Apply for Admission
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#curriculum" className="btn btn--glass btn--lg" onClick={scrollTo('#curriculum')}>
            See What We Teach
          </a>
        </div>

        <ul className="hero__facts">
          {QUICK_FACTS.map((f) => (
            <li className="hero__fact" key={f.title}>
              <span className="hero__fact-icon">
                <FactIcon name={f.icon} />
              </span>
              <span className="hero__fact-body">
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </span>
            </li>
          ))}
        </ul>

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
        onClick={scrollTo('#curriculum')}
        aria-label="Scroll down to see more"
      >
        <span />
      </a>
    </section>
  )
}
