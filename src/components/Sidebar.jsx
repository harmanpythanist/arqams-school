const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'events', label: 'Events' },
  { id: 'admission', label: 'Admission' },
  { id: 'campus', label: 'Campus' },
  { id: 'schedule', label: 'Yearly Schedule' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'curriculum', label: 'Curriculum' },
]

const PARENT_LINKS = [
  { id: 'result', label: 'Result' },
  { id: 'attendance', label: 'Attendance' },
]

export default function Sidebar({ active, onNavigate, open, onToggle }) {
  const handleClick = (id) => {
    onNavigate(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {!open && (
        <button className="sidebar__open-btn" aria-label="Open menu" onClick={() => onToggle(true)}>
          <span />
          <span />
          <span />
        </button>
      )}

      <div
        className={`sidebar__backdrop ${open ? 'sidebar__backdrop--visible' : ''}`}
        onClick={() => onToggle(false)}
      />

      <aside className={`sidebar ${open ? 'sidebar--open' : 'sidebar--closed'}`}>
        <div className="sidebar__top">
          <button className="sidebar__brand" onClick={() => handleClick('home')}>
            <span className="sidebar__mark">
              <img src="/brand/logo.png" alt="The Arqam Schools logo" />
            </span>
            <span className="sidebar__brand-text">
              <strong>The Arqam</strong>
              <em>Schools</em>
            </span>
          </button>

          <button className="sidebar__close-btn" aria-label="Close menu" onClick={() => onToggle(false)}>
            ‹
          </button>
        </div>

        <nav className="sidebar__nav">
          {LINKS.map((link) => (
            <button
              key={link.id}
              className={`sidebar__link ${active === link.id ? 'sidebar__link--active' : ''}`}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </button>
          ))}

          <p className="sidebar__group-label">For Parents</p>
          {PARENT_LINKS.map((link) => (
            <button
              key={link.id}
              className={`sidebar__link sidebar__link--sub ${active === link.id ? 'sidebar__link--active' : ''}`}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}
