import { MILESTONES } from './YearlySchedule.jsx'

const FEATURED_LABELS = ['Session Start', 'Mid-Term Exams', 'Winter Vacations', 'Annual / Final Exams']

export default function ScheduleStrip({ onNavigate }) {
  const featured = FEATURED_LABELS
    .map((label) => MILESTONES.find((m) => m.label === label))
    .filter(Boolean)

  return (
    <section id="schedule-strip" className="schedule-teaser">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">Academic Year</p>
        <h2 className="section-title section-title--dark">
          Key Dates at a Glance
        </h2>
        <p className="section-sub">
          A quick look at the milestones shaping this academic year &mdash;
          see the full calendar for exams, vacations and results.
        </p>
      </div>

      <div className="schedule-grid">
        {featured.map((m, i) => (
          <div className="schedule-card" key={m.label}>
            <span className="schedule-card__index">{String(i + 1).padStart(2, '0')}</span>
            <div className="schedule-card__body">
              <h3 className="schedule-card__label">{m.label}</h3>
              <p className="schedule-card__text">{m.text}</p>
            </div>
            <span className="schedule-card__date">{m.date}</span>
          </div>
        ))}
      </div>

      <div className="schedule-teaser__cta">
        <button
          type="button"
          className="btn btn--outline btn--outline-dark"
          onClick={() => onNavigate?.('schedule')}
        >
          View Full Yearly Schedule
        </button>
      </div>
    </section>
  )
}
