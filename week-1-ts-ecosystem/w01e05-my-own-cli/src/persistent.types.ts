export type FreeItem = {
  id: string
  name: string
  amount: number
}

export type BuyNowItem = {
  id: string
  name: string
  amount: number
  price: number
}
export type AuctionItem = {
  id: string
  name: string
  amount: number
  price: number
}

export type CartItemsPersistance = {
  forFree: FreeItem[]
  buyNow: BuyNowItem[]
  auctions: AuctionItem[]
}
