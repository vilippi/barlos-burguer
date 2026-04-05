import { useMenu } from '../hooks/useMenu'

export function MenuSection() {
  const { items } = useMenu()

  return (
    <section id="menu" className="border-t border-[var(--border)] px-8 py-12 text-left">
      <h2>Cardápio</h2>
      <ul className="list-none p-0 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 mt-8">
        {items.map((item) => (
          <li key={item.id} className="bg-[var(--social-bg)] border border-[var(--border)] rounded-lg p-5">
            <h3 className="text-[var(--text-h)] text-lg font-medium mt-0 mb-2">{item.name}</h3>
            <p className="text-sm mb-3">{item.description}</p>
            <span className="font-semibold text-[var(--color-primary)]">
              R$ {item.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
