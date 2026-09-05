import { CheckIcon } from './CurriculumIcons.jsx'

// NOTE: Static demo data. The parent portal is not wired to any backend yet —
// the lookup form below is presentational only.
const STUDENT = {
  name: 'Muhammad Hamza Tariq',
  father: 'Tariq Mehmood',
  roll: 'ARQ-2026-0417',
  className: 'Class 7',
  section: 'Section A',
  campus: 'Main Campus, Township',
  session: '2026 – 2027',
  exam: 'Mid-Term Examination',
}

const SUBJECTS = [
  { name: 'English', total: 100, obtained: 88, grade: 'A' },
  { name: 'Urdu', total: 100, obtained: 82, grade: 'A' },
  { name: 'Mathematics', total: 100, obtained: 94, grade: 'A+' },
  { name: 'Physics', total: 75, obtained: 63, grade: 'A' },
  { name: 'Chemistry', total: 75, obtained: 58, grade: 'B' },
  { name: 'Biology', total: 75, obtained: 66, grade: 'A' },
  { name: 'Islamiyat', total: 75, obtained: 71, grade: 'A+' },
  { name: 'Pakistan Studies', total: 75, obtained: 60, grade: 'A' },
  { name: 'Computer Science', total: 75, obtained: 69, grade: 'A' },
]

const TOTAL = SUBJECTS.reduce((sum, s) => sum + s.total, 0)
const OBTAINED = SUBJECTS.reduce((sum, s) => sum + s.obtained, 0)
const PERCENTAGE = ((OBTAINED / TOTAL) * 100).toFixed(1)

const SUMMARY = [
  { label: 'Marks Obtained', value: `${OBTAINED} / ${TOTAL}` },
  { label: 'Percentage', value: `${PERCENTAGE}%` },
  { label: 'Overall Grade', value: 'A' },
  { label: 'Position in Class', value: '4th of 38' },
]

const CLASSES = [
  'Play Group', 'Nursery', 'Prep',
  'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
  'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
]

const TERMS = ['First Term', 'Mid-Term Examination', 'Second Term', 'Annual Examination']

export default function ResultPage() {
  return (
    <section id="result-page" className="parent-page">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">For Parents</p>
        <h2 className="section-title section-title--dark">Student Result</h2>
        <p className="section-sub">
          Check your child&apos;s term results online &mdash; subject-wise
          marks, grades and class position, exactly as they appear on the
          printed report card.
        </p>
      </div>

      <div className="parent-shell">
        <div className="parent-notice">
          <span className="parent-notice__dot" aria-hidden="true" />
          <p>
            <strong>Portal coming soon.</strong> Result lookup is being linked
            with the school office records. The report card below is a sample
            view to show how it will look.
          </p>
        </div>

        <form className="parent-lookup" onSubmit={(e) => e.preventDefault()}>
          <div className="parent-field">
            <label htmlFor="result-roll">Roll Number</label>
            <input id="result-roll" type="text" placeholder="ARQ-2026-0417" autoComplete="off" />
          </div>
          <div className="parent-field">
            <label htmlFor="result-class">Class</label>
            <select id="result-class" defaultValue="Class 7">
              {CLASSES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="parent-field">
            <label htmlFor="result-term">Examination</label>
            <select id="result-term" defaultValue="Mid-Term Examination">
              {TERMS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <button type="submit" className="btn btn--gold parent-lookup__btn">
            View Result
          </button>
        </form>

        <article className="report-card">
          <header className="report-card__head">
            <div className="report-card__brand">
              <img src="/brand/logo.png" alt="" aria-hidden="true" />
              <div>
                <p className="report-card__school">The Arqam Schools</p>
                <p className="report-card__exam">
                  {STUDENT.exam} &mdash; Session {STUDENT.session}
                </p>
              </div>
            </div>
            <span className="report-card__status">Result: Pass</span>
          </header>

          <div className="report-card__student">
            {[
              ['Student Name', STUDENT.name],
              ['Father’s Name', STUDENT.father],
              ['Roll Number', STUDENT.roll],
              ['Class / Section', `${STUDENT.className} — ${STUDENT.section}`],
              ['Campus', STUDENT.campus],
              ['Date Issued', '3 October 2026'],
            ].map(([label, value]) => (
              <div className="report-card__field" key={label}>
                <span className="report-card__field-label">{label}</span>
                <span className="report-card__field-value">{value}</span>
              </div>
            ))}
          </div>

          <div className="parent-table__wrap">
            <table className="parent-table">
              <thead>
                <tr>
                  <th scope="col">Subject</th>
                  <th scope="col" className="num">Total Marks</th>
                  <th scope="col" className="num">Obtained</th>
                  <th scope="col" className="num">Grade</th>
                </tr>
              </thead>
              <tbody>
                {SUBJECTS.map((s) => (
                  <tr key={s.name}>
                    <td>{s.name}</td>
                    <td className="num">{s.total}</td>
                    <td className="num">{s.obtained}</td>
                    <td className="num">
                      <span className={`grade-pill grade-pill--${s.grade === 'A+' ? 'aplus' : s.grade.toLowerCase()}`}>
                        {s.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">Total</th>
                  <td className="num">{TOTAL}</td>
                  <td className="num">{OBTAINED}</td>
                  <td className="num">{PERCENTAGE}%</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="parent-stats">
            {SUMMARY.map((s) => (
              <div className="parent-stat" key={s.label}>
                <span className="parent-stat__value">{s.value}</span>
                <span className="parent-stat__label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="report-card__remarks">
            <p className="parent-block-label">Class Teacher&apos;s Remarks</p>
            <p>
              Hamza has worked steadily this term. Mathematics and Islamiyat are
              strong, and Chemistry needs regular revision at home. Handwriting
              and class participation have both improved since the first term.
            </p>
            <ul className="report-card__signs">
              {['Class Teacher', 'Section In-charge', 'Principal'].map((role) => (
                <li key={role}>
                  <span className="report-card__sign-line" aria-hidden="true" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          <footer className="report-card__foot">
            <span className="parent-note">
              <span className="parent-note__tick" aria-hidden="true"><CheckIcon /></span>
              Verified against school office records
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
