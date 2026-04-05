export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'burger' | 'side' | 'drink' | 'combo'
  imageUrl?: string
}
