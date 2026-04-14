'use client'

import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5585991516028'
const WHATSAPP_GREEN = '#25D366'

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{ backgroundColor: WHATSAPP_GREEN }}
    >
      <span
        className="absolute w-14 h-14 rounded-full animate-ping opacity-40"
        style={{ backgroundColor: WHATSAPP_GREEN }}
      />
      <MessageCircle size={26} className="text-white relative z-10" fill="white" />
    </a>
  )
}
