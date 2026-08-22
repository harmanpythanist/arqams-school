import { useState } from 'react'
import { GraduationCapIcon, OpenBookIcon, CrescentIcon, ShieldCheckIcon, BookCheckIcon } from './CurriculumIcons.jsx'

const STAGES = [
  {
    id: 'early-years',
    label: 'Early Years',
    ageRange: 'Ages 3 – 5',
    blurb:
      'A gentle, activity-based start built on phonics, numbers, spoken language and good habits.',
    classes: [
      {
        name: 'Play Group (P.G)',
        age: 'Age 3+',
        subjects: ['English', 'Urdu', 'Numbers', 'Rhymes & Phonics', 'Islamiyat', 'Art & Craft'],
      },
      {
        name: 'Nursery',
        age: 'Age 4+',
        subjects: ['English', 'Urdu', 'Mathematics', 'Phonics & Reading', 'Islamiyat', 'General Knowledge', 'Art & Craft'],
      },
      {
        name: 'Prep',
        age: 'Age 5+',
        subjects: ['English', 'Urdu', 'Mathematics', 'Science (Basic)', 'Islamiyat', 'General Knowledge', 'Computer (Basic)', 'Art & Craft'],
      },
    ],
  },
  {
    id: 'primary',
    label: 'Primary',
    ageRange: 'Class 1 – 5',
    blurb:
      'Core subjects are built up steadily, with Science, Computer Studies and Social Studies joining from Class 1 onward.',
    classes: [
      { name: 'Class 1', subjects: ['English', 'Urdu', 'Mathematics', 'Science', 'Islamiyat', 'Computer Studies'] },
      { name: 'Class 2', subjects: ['English', 'Urdu', 'Mathematics', 'Science', 'Islamiyat', 'Computer Studies'] },
      { name: 'Class 3', subjects: ['English', 'Urdu', 'Mathematics', 'Science', 'Islamiyat', 'Social Studies', 'Computer Studies'] },
      { name: 'Class 4', subjects: ['English', 'Urdu', 'Mathematics', 'Science', 'Islamiyat', 'Social Studies', 'Computer Studies'] },
      { name: 'Class 5', subjects: ['English', 'Urdu', 'Mathematics', 'Science', 'Islamiyat', 'Social Studies', 'Computer Studies'] },
    ],
  },
  {
    id: 'middle',
    label: 'Middle',
    ageRange: 'Class 6 – 8',
    blurb:
      'Science splits into Physics, Chemistry and Biology, alongside Pakistan Studies and continued language study.',
    classes: [
      { name: 'Class 6', subjects: ['English', 'Urdu', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Islamiyat', 'Pakistan Studies', 'Computer Science'] },
      { name: 'Class 7', subjects: ['English', 'Urdu', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Islamiyat', 'Pakistan Studies', 'Computer Science'] },
      { name: 'Class 8', subjects: ['English', 'Urdu', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Islamiyat', 'Pakistan Studies', 'Computer Science'] },
    ],
  },
  {
    id: 'matric',
    label: 'Matriculation',
    ageRange: 'Class 9 – 10',
    blurb:
      'Board-aligned Science and General groups preparing students for their Matriculation examinations.',
    classes: [
      { name: 'Class 9', subjects: ['English', 'Urdu', 'Mathematics', 'Physics', 'Chemistry', 'Biology / Computer Science', 'Islamiyat', 'Pakistan Studies'] },
      { name: 'Class 10 (Matriculation)', subjects: ['English', 'Urdu', 'Mathematics', 'Physics', 'Chemistry', 'Biology / Computer Science', 'Islamiyat', 'Pakistan Studies'] },
    ],
  },
]

const FEATURES = [
  {
    title: 'Qualified Teachers',
    text: 'A trained faculty focused on individual attention and steady academic progress.',
    Icon: GraduationCapIcon,
  },
  {
    title: 'Modern & Islamic Education',
    text: 'A structured academic curriculum enriched with Islamiyat, Arabic and everyday values.',
    Icon: OpenBookIcon,
  },
  {
    title: 'Hifz-e-Quran',
    text: 'A dedicated track for Quran memorization and Tajweed, run alongside regular schooling.',
    Icon: CrescentIcon,
  },
  {
    title: 'Nazra-e-Quran (Compulsory)',
    text: 'Daily Nazra-e-Quran with correct Tajweed is compulsory for every student, alongside their regular academics.',
    Icon: BookCheckIcon,
  },
  {
    title: 'Character Building',
    text: 'Discipline, courtesy and confidence built through daily practice, not lectures.',
    Icon: ShieldCheckIcon,
  },
]

export default function CurriculumPage() {
  const [openStage, setOpenStage] = useState('early-years')

  return (
    <section id="curriculum-page" className="curriculum-page">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">Academics</p>
        <h2 className="section-title section-title--dark">Our Curriculum</h2>
        <p className="section-sub">
          From a child&apos;s first day in Play Group to Matriculation, The
          Arqam Schools follows a structured, board-aligned curriculum &mdash;
          layered with Islamic studies, so academics and character grow side
          by side.
        </p>
      </div>

      <div className="curriculum-features">
        {FEATURES.map((f) => (
          <div className="feature-card feature-card--light" key={f.title}>
            <span className="feature-card__icon" aria-hidden="true"><f.Icon /></span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>

      <div className="curriculum-accordion">
        {STAGES.map((stage) => {
          const isOpen = openStage === stage.id
          return (
            <div className={`curriculum-stage ${isOpen ? 'curriculum-stage--open' : ''}`} key={stage.id}>
              <button
                className="curriculum-stage__head"
                onClick={() => setOpenStage(isOpen ? null : stage.id)}
                aria-expanded={isOpen}
              >
                <span className="curriculum-stage__title">
                  {stage.label}
                  <span className="curriculum-stage__age">{stage.ageRange}</span>
                </span>
                <span className="curriculum-stage__chevron" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="curriculum-stage__body">
                  <p className="curriculum-stage__blurb">{stage.blurb}</p>
                  <div className="curriculum-classes">
                    {stage.classes.map((c) => (
                      <div className="curriculum-class" key={c.name}>
                        <h4>
                          {c.name}
                          {c.age && <span className="curriculum-class__age">{c.age}</span>}
                        </h4>
                        <div className="curriculum-class__subjects">
                          {c.subjects.map((s) => (
                            <span className="subject-chip" key={s}>{s}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="hifz-panel">
        <div className="hifz-panel__icon" aria-hidden="true"><CrescentIcon /></div>
        <div className="hifz-panel__body">
          <p className="eyebrow eyebrow--gold">Special Program</p>
          <h3>Hifz-e-Quran</h3>
          <p>
            Alongside our regular academic curriculum, The Arqam Schools
            offers a dedicated Hifz-e-Quran program for students who wish to
            memorize the Holy Quran. The program is taught by qualified Huffaz
            and covers Nazra, Tajweed and daily Sabaq, Sabqi and Manzil,
            structured so students can complete their Hifz alongside their
            regular studies.
          </p>
        </div>
      </div>
    </section>
  )
}
