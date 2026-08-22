import { useEffect, useState } from 'react'
import { CAMPUSES, WHATSAPP_NUMBER } from '../data.js'

export default function AdmissionPage({ selectedCampus }) {
  const [campusId, setCampusId] = useState(selectedCampus?.id || CAMPUSES[0].id)
  const [studentName, setStudentName] = useState('')
  const [parentName, setParentName] = useState('')
  const [phone, setPhone] = useState('')
  const [classFor, setClassFor] = useState('')

  useEffect(() => {
    if (selectedCampus?.id) setCampusId(selectedCampus.id)
  }, [selectedCampus])

  const campus = CAMPUSES.find((c) => c.id === campusId) || CAMPUSES[0]

  const message = [
    'Assalam-o-Alaikum, I am interested in admission at The Arqam Schools.',
    `Campus: ${campus.name}`,
    studentName && `Student Name: ${studentName}`,
    parentName && `Parent Name: ${parentName}`,
    classFor && `Class Applying For: ${classFor}`,
    phone && `Contact Number: ${phone}`,
    'I am applying online, so please apply the 10% online admission discount.',
  ]
    .filter(Boolean)
    .join('\n')

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  const handleSubmit = (e) => {
    e.preventDefault()
    window.open(waLink, '_blank', 'noreferrer')
  }

  return (
    <section id="admission-page" className="admission-page">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">Admissions</p>
        <h2 className="section-title section-title--dark">Apply for Admission</h2>
        <p className="section-sub">
          Fill in the details below and select your preferred campus. We&apos;ll
          get your admission enquiry over WhatsApp and reach out to guide you
          through the next steps.
        </p>
      </div>

      <div className="admission-layout">
        <form className="admission-form" onSubmit={handleSubmit}>
        <div className="admission-form__field">
          <label htmlFor="campus-select">Select Campus</label>
          <select
            id="campus-select"
            value={campusId}
            onChange={(e) => setCampusId(e.target.value)}
          >
            {CAMPUSES.map((c) => (
              <option value={c.id} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="admission-form__row">
          <div className="admission-form__field">
            <label htmlFor="student-name">Student Name</label>
            <input
              id="student-name"
              type="text"
              placeholder="e.g. Ali Ahmed"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </div>
          <div className="admission-form__field">
            <label htmlFor="parent-name">Parent / Guardian Name</label>
            <input
              id="parent-name"
              type="text"
              placeholder="e.g. Ahmed Khan"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="admission-form__row">
          <div className="admission-form__field">
            <label htmlFor="class-for">Class Applying For</label>
            <input
              id="class-for"
              type="text"
              placeholder="e.g. Class 3, Nursery"
              value={classFor}
              onChange={(e) => setClassFor(e.target.value)}
            />
          </div>
          <div className="admission-form__field">
            <label htmlFor="phone">Contact Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="03xx-xxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="admission-form__submit">
          Send Admission Enquiry on WhatsApp
        </button>
        </form>

        <aside className="admission-discount" aria-label="Online admission discount offer">
          <span className="admission-discount__shine" aria-hidden="true" />
          <span className="admission-discount__percent">10% OFF</span>
          <span className="admission-discount__title">Online Admission Discount</span>
          <p className="admission-discount__text">
            Apply for admission online right here and get a flat 10% discount
            on your admission fee &mdash; no need to visit campus first.
          </p>
        </aside>
      </div>
    </section>
  )
}
