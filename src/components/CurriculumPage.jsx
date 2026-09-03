import { useRef, useState } from 'react'
import { GraduationCapIcon, OpenBookIcon, CrescentIcon, ShieldCheckIcon, BookCheckIcon, CheckIcon } from './CurriculumIcons.jsx'

// NOTE: Teacher entries are sample/placeholder data. Replace each `teacher`
// block (name, photo, education, experience, subjects) with the real section
// in-charge before this goes live. Photos go in /public/teachers/.
const STAGES = [
  {
    id: 'kg',
    label: 'Kindergarten',
    tab: 'KG',
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
    teacher: {
      name: 'Miss Alina Fatima',
      bio:
        'Miss Alina looks after the Kindergarten section, where a child\'s very first school habits are formed. Her classroom runs on songs, flashcards and plenty of encouragement, so reading and counting come in through play rather than pressure.',
      role: 'Kindergarten Section In-charge',
      photo: '/teachers/alina-kg.jpg',
      photoFocus: '50% 12%',
      education: 'B.Ed (Hons.) Early Childhood Education — University of the Punjab',
      experience: '6 years teaching Play Group, Nursery & Prep',
      subjects: 'Phonics, Early English, Numbers & Rhymes',
      note: 'Trained in play-based learning, so children settle in quickly and enjoy their first year at school.',
    },
  },
  {
    id: 'primary',
    label: 'Primary',
    tab: 'Primary',
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
    teacher: {
      name: 'Miss Alina Riaz',
      bio:
        'Miss Alina leads the Primary section, the stage where handwriting, reading fluency and number sense have to become second nature. She teaches English and Mathematics herself and supervises the rest of the Class 1 to 5 team.',
      role: 'Primary Section In-charge',
      photo: '/teachers/alina-primary.jpg',
      photoFocus: '50% 12%',
      education: 'B.S. English + B.Ed (Elementary) — University of the Punjab',
      experience: '8 years with Primary classes (Class 1 – 5)',
      subjects: 'English, Mathematics & General Science',
      note: 'Keeps a weekly progress check on every child, so parents know exactly where their son or daughter stands.',
    },
  },
  {
    id: 'middle',
    label: 'Middle',
    tab: 'Middle',
    ageRange: 'Class 6 – 8',
    blurb:
      'Science splits into Physics, Chemistry and Biology, alongside Pakistan Studies and continued language study.',
    classes: [
      { name: 'Class 6', subjects: ['English', 'Urdu', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Islamiyat', 'Pakistan Studies', 'Computer Science'] },
      { name: 'Class 7', subjects: ['English', 'Urdu', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Islamiyat', 'Pakistan Studies', 'Computer Science'] },
      { name: 'Class 8', subjects: ['English', 'Urdu', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Islamiyat', 'Pakistan Studies', 'Computer Science'] },
    ],
    teacher: {
      name: 'Miss Alina Shahid',
      bio:
        'Miss Alina teaches Science across the Middle section, where one subject splits into Physics, Chemistry and Biology for the first time. She keeps that jump gentle, linking every new topic back to what students already know.',
      role: 'Middle Section Science Teacher',
      photo: '/teachers/alina-middle.jpg',
      photoFocus: '50% 12%',
      education: 'M.Sc. Chemistry + B.Ed — University of the Punjab',
      experience: '9 years teaching Middle section Science',
      subjects: 'Chemistry, Biology & Mathematics',
      note: 'Runs practical demonstrations for every chapter, so concepts are understood rather than memorised.',
    },
  },
  {
    id: 'matric',
    label: 'Matriculation',
    tab: 'Matric',
    ageRange: 'Class 9 – 10',
    blurb:
      'Board-aligned Science and General groups preparing students for their Matriculation examinations.',
    classes: [
      { name: 'Class 9', subjects: ['English', 'Urdu', 'Mathematics', 'Physics', 'Chemistry', 'Biology / Computer Science', 'Islamiyat', 'Pakistan Studies'] },
      { name: 'Class 10 (Matriculation)', subjects: ['English', 'Urdu', 'Mathematics', 'Physics', 'Chemistry', 'Biology / Computer Science', 'Islamiyat', 'Pakistan Studies'] },
    ],
    teacher: {
      name: 'Miss Alina Naveed',
      bio:
        'Miss Alina prepares Class 9 and 10 students for their Board examinations. She has taken eleven batches through Matriculation and knows exactly which topics carry the marks, and where students usually lose them.',
      role: 'Matriculation Section Teacher',
      photo: '/teachers/alina-matric.jpg',
      photoFocus: '50% 12%',
      education: 'M.Sc. Physics, M.Ed — University of the Punjab',
      experience: '11 years preparing Class 9 & 10 board candidates',
      subjects: 'Physics & Mathematics (Class 9 – 10)',
      note: 'Takes extra board-paper practice sessions before exams, with past papers solved in class.',
    },
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
  const [activeStage, setActiveStage] = useState(STAGES[0].id)
  const tabRefs = useRef({})

  const stage = STAGES.find((s) => s.id === activeStage) ?? STAGES[0]

  const handleTabKeys = (e) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    e.preventDefault()
    const i = STAGES.findIndex((s) => s.id === activeStage)
    const next = STAGES[(i + step + STAGES.length) % STAGES.length]
    setActiveStage(next.id)
    tabRefs.current[next.id]?.focus()
  }

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

      <div className="curriculum-tabs">
        <div
          className="curriculum-tabs__list"
          role="tablist"
          aria-label="Academic stages"
          onKeyDown={handleTabKeys}
        >
          {STAGES.map((s) => {
            const isActive = s.id === stage.id
            return (
              <button
                key={s.id}
                id={`tab-${s.id}`}
                ref={(el) => { tabRefs.current[s.id] = el }}
                className={`curriculum-tab ${isActive ? 'curriculum-tab--active' : ''}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`panel-${s.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveStage(s.id)}
              >
                <span className="curriculum-tab__label">{s.tab}</span>
                <span className="curriculum-tab__age">{s.ageRange}</span>
              </button>
            )
          })}
        </div>

        <div
          className="stage-panel"
          id={`panel-${stage.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${stage.id}`}
          tabIndex={-1}
        >
          <div className="stage-panel__head">
            <h3>{stage.label}</h3>
            <span className="stage-panel__age">{stage.ageRange}</span>
          </div>
          <p className="stage-panel__blurb">{stage.blurb}</p>

          <p className="stage-panel__label">Classes &amp; Subjects</p>
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

          <div className="teacher-block">
            <p className="stage-panel__label">Meet the Teacher</p>
            <div className="teacher-profile">
              <div className="teacher-profile__photo">
                <img
                    src={stage.teacher.photo}
                    alt={stage.teacher.name}
                    style={{ objectPosition: stage.teacher.photoFocus }}
                    loading="lazy"
                  />
                <div className="teacher-profile__plate">
                  <p className="teacher-profile__plate-name">{stage.teacher.name}</p>
                  <p className="teacher-profile__plate-role">{stage.teacher.role}</p>
                </div>
              </div>

              <div className="teacher-profile__body">
                <p className="teacher-profile__eyebrow">Class Teacher</p>
                <h4 className="teacher-profile__name">{stage.teacher.name}</h4>
                <p className="teacher-profile__role">{stage.teacher.role}</p>
                <p className="teacher-profile__bio">{stage.teacher.bio}</p>
                {stage.teacher.note && (
                  <p className="teacher-profile__bio">{stage.teacher.note}</p>
                )}

                <ul className="teacher-profile__facts">
                  {[
                    ['Education', stage.teacher.education],
                    ['Experience', stage.teacher.experience],
                    ['Subjects Taught', stage.teacher.subjects],
                  ].map(([label, value]) => (
                    <li key={label}>
                      <span className="teacher-fact__tick" aria-hidden="true"><CheckIcon /></span>
                      <span>
                        <span className="teacher-fact__label">{label}</span>
                        <span className="teacher-fact__value">{value}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
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
