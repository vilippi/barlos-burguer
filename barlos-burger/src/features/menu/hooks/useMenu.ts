import { useState } from 'react'
import type { MenuItem } from '../types/menu.types'

const mockItems: MenuItem[] = [
  {
    id: '1',
    name: 'Barlos Classic',
    description: 'Hambúrguer artesanal, queijo cheddar, alface, tomate e molho especial',
    price: 28.90,
    category: 'burger',
  },
  {
    id: '2',
    name: 'Barlos Duplo',
    description: 'Dois hambúrgueres artesanais, queijo cheddar duplo e molho especial',
    price: 38.90,
    category: 'burger',
  },
  {
    id: '3',
    name: 'Barlos Smash',
    description: 'Smash burger crocante, bacon, cebola caramelizada e maionese defumada',
    price: 34.90,
    category: 'burger',
  },
]

export function useMenu() {
  const [items] = useState<MenuItem[]>(mockItems)
  return { items }
}
