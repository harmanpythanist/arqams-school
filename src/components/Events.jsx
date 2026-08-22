import { useState } from 'react'

export const EVENTS = [
  {
    id: 'new-year',
    title: 'New Year',
    date: 'January 1',
    image: '/events/new-year.jpg',
    description:
      'We welcome the new year with a special morning assembly, students sharing their resolutions, and fun classroom activities to kick off the academic year on a positive note.',
  },
  {
    id: 'earth-day',
    title: 'Earth Day',
    date: 'February 23',
    image: '/events/earth-day.jpg',
    description:
      'Students take part in tree plantation drives, cleanliness campaigns, and awareness sessions to celebrate our planet and learn about caring for the environment.',
  },
  {
    id: 'speech-competition',
    title: 'Speech Competition',
    date: 'March 4',
    image: '/events/speech-competition.jpg',
    description:
      'A stage for our students to build confidence and public-speaking skills, with participants from every class competing on thoughtfully chosen topics.',
  },
  {
    id: 'workers-day',
    title: 'Workers Day',
    date: 'April 1',
    image: '/events/workers-day.jpg',
    description:
      'A day dedicated to honoring the hard work and dedication of our support staff and workers, with a small ceremony of appreciation and thanks.',
  },
  {
    id: 'environment-day',
    title: 'Environment Day',
    date: 'June 5',
    image: '/events/environment-day.jpg',
    description:
      'Students engage in eco-friendly activities, poster-making, and short presentations to build awareness around pollution, recycling, and protecting our surroundings.',
  },
  {
    id: 'independence-day',
    title: 'Independence Day',
    date: 'August 14',
    image: '/events/independence-day.jpg',
    description:
      'A patriotic celebration filled with tableaus, national songs, flag hoisting, and activities that honor the spirit of Pakistan\u2019s independence.',
  },
  {
    id: 'sports-day',
    title: 'Sports Day',
    date: 'September 15',
    image: '/events/sports-day.jpg',
    description:
      'An energetic day of races, team games, and friendly competition that encourages fitness, teamwork, and sportsmanship among all students.',
  },
  {
    id: 'naat-competition',
    title: 'Naat Competition',
    date: 'October 3',
    image: '/events/naat-competition.jpg',
    description:
      'Students showcase their talent for reciting Naat in a peaceful and spiritually uplifting event that brings the whole school community together.',
  },
  {
    id: 'colors-day',
    title: 'Colors Day',
    date: 'November 4',
    image: '/events/colors-day.jpg',
    description:
      'A vibrant celebration of colors, creativity and togetherness, bringing energy and excitement across every campus.',
  },
  {
    id: 'iqbal-day',
    title: 'Iqbal Day',
    date: 'November 9',
    image: '/events/iqbal-day.jpg',
    description:
      'A tribute to the life and poetry of Allama Iqbal, marked with recitations, speeches, and discussions on his vision for the nation.',
  },
  {
    id: 'funfare',
    title: 'Fun Fare',
    date: 'December 12',
    image: '/events/funfare.jpg',
    description:
      'A day full of games, rides, stalls and laughter \u2014 students and families come together for our annual Fun Fare celebration.',
  },
  {
    id: 'quaid-day',
    title: 'Quaid Day',
    date: 'December 25',
    image: '/events/quaid-day.jpg',
    description:
      'We remember the life and leadership of Quaid-e-Azam Muhammad Ali Jinnah through speeches, tableaus, and a special assembly.',
  },
]

export default function Events() {
  const [activeEvent, setActiveEvent] = useState(null)

  return (
    <section id="events" className="events-page">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">What&apos;s Happening</p>
        <h2 className="section-title section-title--dark">Events</h2>
        <p className="section-sub">
          A look at the events that bring our school community together
          throughout the year. Tap any event to see its details.
        </p>
      </div>

      <div className="events-grid">
        {EVENTS.map((e) => (
          <button
            type="button"
            className="event-card"
            key={e.id}
            onClick={() => setActiveEvent(e)}
          >
            <div className="event-card__image">
              <img src={e.image} alt={e.title} loading="lazy" />
            </div>
            <div className="event-card__body">
              <p className="event-card__date">{e.date}</p>
              <h3>{e.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {activeEvent && (
        <div
          className="event-modal__overlay"
          onClick={() => setActiveEvent(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="event-modal__close"
              onClick={() => setActiveEvent(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="event-modal__image">
              <img src={activeEvent.image} alt={activeEvent.title} />
            </div>
            <div className="event-modal__body">
              <p className="event-modal__date">{activeEvent.date}</p>
              <h3>{activeEvent.title}</h3>
              <p className="event-modal__description">{activeEvent.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
