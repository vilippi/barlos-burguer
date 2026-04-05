const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="w-full bg-[var(--color-neutral-default)] text-white mt-auto items-center align-middle rounded-t-2xl">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8 items-center ">

        <div>
          <span className="text-2xl font-bold" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            Barlo's Burger
          </span>
        </div>

        <nav className="flex gap-2 items-center align-middle">
          <a href="#hero" className="text-sm hover:text-[var(--color-tertiary)] transition-colors">Início</a>
          <a href="#menu" className="text-sm hover:text-[var(--color-tertiary)] transition-colors">Cardápio</a>
          <a href="#menu" className="text-sm hover:text-[var(--color-tertiary)] transition-colors">Contato</a>
        </nav>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-white/80">© {CURRENT_YEAR} Barlos Burger. Todos os direitos reservados.</span>
        </div>

      </div>

    </footer>
  )
}
