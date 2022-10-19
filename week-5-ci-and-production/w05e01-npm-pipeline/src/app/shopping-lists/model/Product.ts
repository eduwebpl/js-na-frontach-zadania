export interface Product {
  id: string
  name: string
  description?: string
  quantity: number
  value: number
  price: number
  unit: 'item' | 'kg' | 'l'
  status: 'AWAITING' | 'BOUGHT'
}
