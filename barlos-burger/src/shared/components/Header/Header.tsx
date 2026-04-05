const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Cardápio', href: '#menu' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-primary-default)] text-white shadow-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#hero" className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Fredoka', sans-serif" }}>
          Barlos Burger
        </a>

        <nav className="flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium hover:text-[var(--color-tertiary)] transition-colors"
            >
              {label}
            </a>
          ))}

          <a
            href="#menu"
            className="bg-[var(--color-tertiary)] text-[var(--color-primary)] text-sm font-semibold px-4 py-2 rounded-full hover:brightness-95 transition-all"
          >
            Fazer Pedido
          </a>
        </nav>

      </div>
    </header>
  )
}
