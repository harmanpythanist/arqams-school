import { GraduationCapIcon, CrescentIcon, CheckIcon } from './CurriculumIcons.jsx'

const POINTS = [
  {
    title: 'Board-aligned academics',
    text: 'English, Mathematics, Science and Computer Studies, taught to the national curriculum.',
  },
  {
    title: 'Quran every single day',
    text: 'Daily Nazra with correct Tajweed for everyone, and a full Hifz track for those who want it.',
  },
  {
    title: 'Small classes',
    text: 'Every child is known by name, not by roll number.',
  },
  {
    title: 'Character, not just marks',
    text: 'Discipline and courtesy practised daily, not lectured about.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">Who We Are</p>
        <h2 className="section-title section-title--dark">
          Welcome to The Arqam Schools
        </h2>
        <p className="section-sub">
          Since 1993 we have taught children in Lahore and Faisalabad &mdash;
          from their first day in Play Group all the way to Matriculation.
        </p>
      </div>

      <div className="about__grid">
        <div className="about__media">
          <img
            src="/gallery/1.jpg"
            alt="Students of The Arqam Schools lined up in uniform"
            loading="lazy"
          />
        </div>

        <div className="about__body">
          <p className="about__lead">
            What began as a single campus more than thirty years ago is now a
            trusted school network &mdash; with generations of families
            sending their children through the same classrooms.
          </p>

          <ul className="about__points">
            {POINTS.map((p) => (
              <li key={p.title}>
                <span className="about__tick" aria-hidden="true"><CheckIcon /></span>
                <span>
                  <strong>{p.title}</strong>
                  {p.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="about__cards">
        <div className="about-card">
          <span className="about-card__icon" aria-hidden="true">
            <GraduationCapIcon />
          </span>
          <h3>Our Mission</h3>
          <p>
            To nurture confident, principled learners through modern academics
            and Islamic values &mdash; ready for worldly success and a life
            rooted in faith.
          </p>
        </div>
        <div className="about-card">
          <span className="about-card__icon" aria-hidden="true">
            <CrescentIcon />
          </span>
          <h3>Our Vision</h3>
          <p>
            To be a trusted name in Pakistani education, known for graduates
            who carry their learning, their Quran and their character wherever
            life takes them.
          </p>
        </div>
      </div>
    </section>
  )
}
