import Image from 'next/image'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#especialidade', label: 'Especialidade' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div className="flex flex-col gap-3">
            <Image
              src="/logo.png"
              alt="Uiara Alves Advocacia"
              width={200}
              height={48}
              className="h-12 w-auto max-w-[200px] object-contain"
            />
            <p className="text-gray-400 text-sm">Uiara Alves Advocacia</p>
            <p className="text-gray-400 text-sm">OAB/CE 22.546</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">
              Navegação
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 text-sm hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">
              Contato
            </p>
            <a href="https://wa.me/5585991516028" className="text-gray-400 text-sm hover:text-gold transition-colors">
              (85) 99151-6028
            </a>
            <a href="https://wa.me/5585992563399" className="text-gray-400 text-sm hover:text-gold transition-colors">
              (85) 99256-3399
            </a>
            <a href="mailto:advocaciauiaraalves@gmail.com" className="text-gray-400 text-sm hover:text-gold transition-colors">
              advocaciauiaraalves@gmail.com
            </a>
            <a
              href="https://www.instagram.com/uiaralves"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm hover:text-gold transition-colors"
            >
              @uiaralves
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-xs">
          <p>© {currentYear} Uiara Alves Advocacia. Todos os direitos reservados.</p>
          <p className="text-center max-w-sm">
            As informações contidas neste site têm caráter informativo e não constituem consulta jurídica.
          </p>
        </div>
      </div>
    </footer>
  )
}
