'use client'

import { MessageCircle } from 'lucide-react'

const INSTAGRAM_URL = 'https://www.instagram.com/uiaralves'
const WHATSAPP_URL = 'https://wa.me/5585992563399'
const WHATSAPP_GREEN = '#25D366'

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">

      {/* Instagram */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram @uiaralves"
        className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg hover:bg-gold-light hover:scale-110 transition-all duration-200 text-dark"
      >
        <InstagramIcon size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp (85) 99256-3399"
        className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200"
        style={{ backgroundColor: WHATSAPP_GREEN }}
      >
        <span
          aria-hidden="true"
          className="absolute w-12 h-12 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: WHATSAPP_GREEN }}
        />
        <MessageCircle size={22} className="text-white relative z-10" fill="white" />
      </a>

    </div>
  )
}
