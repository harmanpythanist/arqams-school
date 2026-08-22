import { SOCIAL_LINKS, WHATSAPP_NUMBER, BRANCHES } from '../data.js'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons.jsx'

export default function Footer({ onNavigate }) {
  return (
    <footer id="footer" className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <span className="navbar__mark navbar__mark--footer">
            <img src="/brand/logo.png" alt="The Arqam Schools logo" />
          </span>
          <div>
            <strong>The Arqam Schools</strong>
            <p>Modern academics. Timeless values. Since 1993.</p>
          </div>
        </div>

        <div className="footer__social">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noreferrer"
            className="social-btn social-btn--facebook"
            aria-label="Facebook"
          >
            <FacebookIcon />
            Facebook
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            className="social-btn social-btn--instagram"
            aria-label="Instagram"
          >
            <InstagramIcon />
            Instagram
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="social-btn social-btn--whatsapp"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer__grid">
        <div>
          <h4>Quick Links</h4>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              onNavigate?.('home')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Home
          </a>
          <a href="#curriculum">Curriculum</a>
          <a href="#gallery">Gallery</a>
          <a href="#branches">Branches</a>
        </div>
        {BRANCHES.map((b) => (
          <div key={b.city}>
            <h4>{b.name}</h4>
            <p>{b.address}</p>
            <a href={`tel:${b.phone}`}>{b.phone}</a>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} The Arqam Schools. All rights reserved.</p>
      </div>
    </footer>
  )
}
