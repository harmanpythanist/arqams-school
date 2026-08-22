import { GraduationCapIcon, OpenBookIcon, CrescentIcon, BookCheckIcon } from './CurriculumIcons.jsx'

const STAGES = [
  {
    label: 'Early Years',
    ageRange: 'Ages 3 – 5',
    blurb:
      'A gentle, activity-based start built on phonics, numbers, spoken language and good habits — Play Group, Nursery and Prep.',
    Icon: OpenBookIcon,
  },
  {
    label: 'Primary',
    ageRange: 'Class 1 – 5',
    blurb:
      'Core subjects build up steadily, with Science, Computer Studies and Social Studies joining from Class 1 onward.',
    Icon: GraduationCapIcon,
  },
  {
    label: 'Middle',
    ageRange: 'Class 6 – 8',
    blurb:
      'Science splits into Physics, Chemistry and Biology, alongside Pakistan Studies and continued language study.',
    Icon: BookCheckIcon,
  },
  {
    label: 'Matriculation',
    ageRange: 'Class 9 – 10',
    blurb:
      'Board-aligned Science and General groups, preparing students for their BISE Matriculation examinations.',
    Icon: CrescentIcon,
  },
]

export default function CurriculumPreview({ onNavigate }) {
  return (
    <section id="curriculum-preview" className="curriculum-preview">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">Academics</p>
        <h2 className="section-title section-title--dark">
          One Curriculum, Every Stage of Growth
        </h2>
        <p className="section-sub">
          From a child&apos;s first day in Play Group to Matriculation, The
          Arqam Schools follows a structured, board-aligned curriculum
          &mdash; layered with Islamic studies and a compulsory daily
          Nazra-e-Quran, so academics and character grow side by side.
        </p>
      </div>

      <div className="curriculum-features">
        {STAGES.map((s) => (
          <div className="feature-card feature-card--light" key={s.label}>
            <span className="feature-card__icon" aria-hidden="true"><s.Icon /></span>
            <h3>
              {s.label}
              <span className="stage-card__age">{s.ageRange}</span>
            </h3>
            <p>{s.blurb}</p>
          </div>
        ))}
      </div>

      <div className="curriculum-preview__cta">
        <button
          type="button"
          className="btn btn--gold"
          onClick={() => onNavigate?.('curriculum')}
        >
          View Full Curriculum &amp; Class-wise Subjects
        </button>
      </div>
    </section>
  )
}
