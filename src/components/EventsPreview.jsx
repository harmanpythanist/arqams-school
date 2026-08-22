import { EVENTS } from './Events.jsx'

const FEATURED_IDS = ['independence-day', 'sports-day', 'naat-competition', 'funfare']

export default function EventsPreview({ onNavigate }) {
  const featured = FEATURED_IDS
    .map((id) => EVENTS.find((e) => e.id === id))
    .filter(Boolean)

  return (
    <section id="events-preview" className="events-preview">
      <div className="section-head">
        <p className="eyebrow eyebrow--dark">What&apos;s Happening</p>
        <h2 className="section-title section-title--dark">
          Life at The Arqam Schools
        </h2>
        <p className="section-sub">
          Beyond the classroom, our academic calendar is full of events that
          build confidence, community and school spirit &mdash; from sports
          days to Naat competitions.
        </p>
      </div>

      <div className="events-grid">
        {featured.map((e) => (
          <div className="event-card event-card--preview" key={e.id}>
            <div className="event-card__image">
              <img src={e.image} alt={e.title} loading="lazy" />
            </div>
            <div className="event-card__body">
              <p className="event-card__date">{e.date}</p>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="events-preview__cta">
        <button
          type="button"
          className="btn btn--gold"
          onClick={() => onNavigate?.('events')}
        >
          View All Events
        </button>
      </div>
    </section>
  )
}
