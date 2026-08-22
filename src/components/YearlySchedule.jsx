export const MILESTONES = [
  {
    label: 'Session Start',
    text: 'New session begins for all classes (PG to Matric)',
    date: 'Wed, 1 April 2026',
  },
  {
    label: 'Summer Vacations',
    text: 'School closed for summer break',
    date: 'Mon, 1 June 2026 \u2013 Sun, 9 August 2026',
  },
  {
    label: 'Mid-Term Exams',
    text: 'First term written assessments, all classes',
    date: '14 \u2013 25 September 2026',
  },
  {
    label: 'Mid-Term Result',
    text: 'Report cards issued / Parent-Teacher Meeting',
    date: 'Sat, 3 October 2026',
  },
  {
    label: 'Winter Vacations',
    text: 'Short winter break',
    date: 'Mon, 28 December 2026 \u2013 Fri, 1 January 2027',
  },
  {
    label: 'Pre-Board / Send-up Exams',
    text: 'Matric (9th & 10th) send-up exams',
    date: '1 \u2013 12 February 2027',
  },
  {
    label: 'Annual / Final Exams',
    text: 'Final written exams, PG to 8th grade',
    date: '8 \u2013 19 March 2027',
  },
  {
    label: 'Board Exams (Matric)',
    text: 'BISE annual board examinations, 9th & 10th',
    date: 'As per BISE Lahore date-sheet (typically March)',
  },
  {
    label: 'Annual Result & Promotion',
    text: 'Final report cards and promotion to next class',
    date: 'Sat, 27 March 2027',
  },
  {
    label: 'Session Ends',
    text: 'Last working day of the academic year',
    date: 'Tue, 30 March 2027',
  },
]

export default function YearlySchedule() {
  return (
    <section id="schedule-page" className="schedule-page">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">Academic Year</p>
        <h2 className="section-title section-title--dark">Yearly Schedule</h2>
        <p className="section-sub">
          Key session dates for the full academic year at a glance &mdash;
          from session start to promotions, all in one place.
        </p>
      </div>

      <div className="schedule-grid">
        {MILESTONES.map((m, i) => (
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
    </section>
  )
}
