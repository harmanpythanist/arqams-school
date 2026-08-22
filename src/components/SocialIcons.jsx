import { SOCIAL_LINKS } from '../data.js'

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.5 1a4 4 0 0 1 1 1.5c.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5a4 4 0 0 1-1 1.5 4 4 0 0 1-1.5 1c-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5a4 4 0 0 1-1.5-1 4 4 0 0 1-1-1.5c-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5a4 4 0 0 1 1-1.5 4 4 0 0 1 1.5-1c.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 3a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6Zm0 2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm6.9-.4a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0Z" />
    </svg>
  )
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.7 4.3.7.3 1.2.4 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4ZM12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2Z" />
    </svg>
  )
}

// Compact icon-only circular buttons, used on the Hero and anywhere a
// lightweight (non-labelled) social row is needed.
export default function SocialIconRow({ className = '' }) {
  return (
    <div className={`social-icons ${className}`}>
      <a
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="The Arqam Schools on Facebook"
        className="social-icons__btn social-icons__btn--facebook"
      >
        <FacebookIcon />
      </a>
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="The Arqam Schools on Instagram"
        className="social-icons__btn social-icons__btn--instagram"
      >
        <InstagramIcon />
      </a>
    </div>
  )
}
