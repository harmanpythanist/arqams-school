import { GraduationCapIcon, CrescentIcon } from './CurriculumIcons.jsx'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">Who We Are</p>
        <h2 className="section-title section-title--dark">
          Welcome to The Arqam Schools
        </h2>
        <p className="section-sub">
          Since 1993, The Arqam Schools has been raising confident, capable
          learners in Lahore and Faisalabad &mdash; combining a strong,
          board-aligned academic education with Islamic studies and
          Hifz-o-Tajveed, so every child grows in knowledge and in character
          together.
        </p>
      </div>

      <div className="about__grid">
        <div className="about__story">
          <p>
            What began as a single campus over three decades ago has grown
            into a trusted school network, with generations of students
            passing through our classrooms &mdash; from their very first day
            in Play Group, all the way to Matriculation.
          </p>
          <p>
            We believe good schooling is more than test scores. Alongside a
            structured national curriculum in English, Mathematics, Science
            and Computer Studies, our students recite the Quran daily,
            study Islamiyat and Arabic, and are given a dedicated Hifz-e-Quran
            track for those who wish to memorize the Holy Quran &mdash; all
            without compromising on academic pace.
          </p>
          <p>
            Small class sizes, qualified and trained teachers, and a genuine
            focus on discipline and courtesy mean every child is known by
            name, not just by roll number.
          </p>
        </div>

        <div className="about__cards">
          <div className="about-card">
            <span className="about-card__icon" aria-hidden="true">
              <GraduationCapIcon />
            </span>
            <h3>Our Mission</h3>
            <p>
              To nurture confident, principled learners through a balanced
              blend of modern academics and Islamic values &mdash; preparing
              every child for worldly success and a life rooted in faith.
            </p>
          </div>
          <div className="about-card">
            <span className="about-card__icon" aria-hidden="true">
              <CrescentIcon />
            </span>
            <h3>Our Vision</h3>
            <p>
              To be a trusted name in Pakistani education, recognised for
              graduates who carry their learning, their Quran and their
              character with them wherever life takes them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
