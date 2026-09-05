import { CheckIcon } from './CurriculumIcons.jsx'

// NOTE: Static demo data. The parent portal is not wired to any backend yet —
// the lookup form and month selector below are presentational only.
const STUDENT = {
  name: 'Muhammad Hamza Tariq',
  roll: 'ARQ-2026-0417',
  className: 'Class 7',
  section: 'Section A',
  campus: 'Main Campus, Township',
  month: 'September 2026',
}

const SUMMARY = [
  { label: 'Working Days', value: '24' },
  { label: 'Present', value: '21' },
  { label: 'Absent', value: '2' },
  { label: 'Leave', value: '1' },
  { label: 'Late Arrivals', value: '3' },
  { label: 'Attendance', value: '87.5%' },
]

// 1 September 2026 falls on a Tuesday, so the month grid starts with one blank.
const LEAD_BLANKS = 1
const DAYS = [
  'P', 'P', 'P', 'P', 'P', 'H', 'P', 'A', 'P', 'P',
  'P', 'P', 'H', 'H', 'L', 'P', 'P', 'P', 'P', 'H',
  'P', 'P', 'A', 'H', 'P', 'P', 'H', 'P', 'P', 'P',
]

const STATUS = {
  P: { label: 'Present', cls: 'present' },
  A: { label: 'Absent', cls: 'absent' },
  L: { label: 'Leave', cls: 'leave' },
  H: { label: 'Holiday', cls: 'holiday' },
}

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const WEEKDAYS_FULL = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
]

// The last eight days of the month, newest first, read straight off the
// calendar above so the two can never disagree. `date % 7` lands on the right
// weekday because the 1st is a Tuesday.
const LOG = DAYS.map((code, i) => {
  const date = i + 1
  return {
    date: `${String(date).padStart(2, '0')} Sep 2026`,
    day: WEEKDAYS_FULL[date % 7],
    status: STATUS[code].label,
  }
})
  .slice(-8)
  .reverse()

const CLASSES = [
  'Play Group', 'Nursery', 'Prep',
  'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
  'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
]

const MONTHS = [
  'April 2026', 'May 2026', 'June 2026', 'July 2026', 'August 2026',
  'September 2026', 'October 2026', 'November 2026', 'December 2026',
]

export default function AttendancePage() {
  return (
    <section id="attendance-page" className="parent-page">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">For Parents</p>
        <h2 className="section-title section-title--dark">Attendance</h2>
        <p className="section-sub">
          A month-by-month record of your child&apos;s attendance &mdash;
          present, absent and approved leave days, updated by the class
          teacher every morning.
        </p>
      </div>

      <div className="parent-shell">
        <div className="parent-notice">
          <span className="parent-notice__dot" aria-hidden="true" />
          <p>
            <strong>Portal coming soon.</strong> Daily attendance is currently
            marked in the school register. The month view below is a sample of
            how parents will see it online.
          </p>
        </div>

        <form className="parent-lookup" onSubmit={(e) => e.preventDefault()}>
          <div className="parent-field">
            <label htmlFor="att-roll">Roll Number</label>
            <input id="att-roll" type="text" placeholder="ARQ-2026-0417" autoComplete="off" />
          </div>
          <div className="parent-field">
            <label htmlFor="att-class">Class</label>
            <select id="att-class" defaultValue="Class 7">
              {CLASSES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="parent-field">
            <label htmlFor="att-month">Month</label>
            <select id="att-month" defaultValue="September 2026">
              {MONTHS.map((m) => <option key={m}>{m}</option>)}
            </select>
          </div>
          <button type="submit" className="btn btn--gold parent-lookup__btn">
            View Attendance
          </button>
        </form>

        <article className="attendance-card">
          <header className="attendance-card__head">
            <div>
              <p className="attendance-card__name">{STUDENT.name}</p>
              <p className="attendance-card__meta">
                {STUDENT.roll} &nbsp;·&nbsp; {STUDENT.className} ({STUDENT.section})
                &nbsp;·&nbsp; {STUDENT.campus}
              </p>
            </div>
            <span className="attendance-card__month">{STUDENT.month}</span>
          </header>

          <div className="parent-stats parent-stats--six">
            {SUMMARY.map((s) => (
              <div className="parent-stat" key={s.label}>
                <span className="parent-stat__value">{s.value}</span>
                <span className="parent-stat__label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="attendance-bar">
            <div className="attendance-bar__track">
              <span className="attendance-bar__fill" style={{ width: '87.5%' }} />
            </div>
            <p className="attendance-bar__note">
              87.5% attendance this month &mdash; the school requires a minimum
              of 85% across the session.
            </p>
          </div>

          <div className="attendance-month">
            <p className="parent-block-label">{STUDENT.month}</p>

            <div className="attendance-grid" role="presentation">
              {WEEKDAYS.map((d) => (
                <span className="attendance-grid__weekday" key={d}>{d}</span>
              ))}
              {Array.from({ length: LEAD_BLANKS }).map((_, i) => (
                <span className="attendance-day attendance-day--empty" key={`blank-${i}`} />
              ))}
              {DAYS.map((code, i) => (
                <span
                  className={`attendance-day attendance-day--${STATUS[code].cls}`}
                  key={i}
                  title={`${i + 1} September — ${STATUS[code].label}`}
                >
                  <span className="attendance-day__num">{i + 1}</span>
                  <span className="attendance-day__code">{code}</span>
                </span>
              ))}
            </div>

            <ul className="attendance-legend">
              {Object.values(STATUS).map((s) => (
                <li key={s.cls}>
                  <span className={`attendance-legend__swatch attendance-legend__swatch--${s.cls}`} />
                  {s.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="attendance-log">
            <p className="parent-block-label">Recent Days</p>
            <div className="parent-table__wrap">
              <table className="parent-table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Day</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {LOG.map((row) => (
                    <tr key={row.date}>
                      <td>{row.date}</td>
                      <td>{row.day}</td>
                      <td>
                        <span className={`status-pill status-pill--${row.status.toLowerCase()}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <footer className="report-card__foot">
            <span className="parent-note">
              <span className="parent-note__tick" aria-hidden="true"><CheckIcon /></span>
              Marked daily by the class teacher before first period
            </span>
            <div className="report-card__actions">
              <button type="button" className="btn btn--outline-dark">Print</button>
              <button type="button" className="btn btn--gold">Download PDF</button>
            </div>
          </footer>
        </article>
      </div>
    </section>
  )
}
