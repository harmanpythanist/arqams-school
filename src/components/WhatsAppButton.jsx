import { WHATSAPP_NUMBER } from '../data.js'
import { WhatsAppIcon } from './SocialIcons.jsx'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon width={28} height={28} />
      <span className="whatsapp-float__pulse" />
    </a>
  )
}
