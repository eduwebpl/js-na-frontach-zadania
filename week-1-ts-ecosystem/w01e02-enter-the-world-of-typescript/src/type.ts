
export type ReturnType = HTMLDivElement | HTMLElement | HTMLParagraphElement

export  type CartItem = {
    name: string
    amount: number
    unit: string,
    price: {
        value: number
        currency: string
    }
}

export type CartItemSum = {
    value: number
    currency:  "PLN"
}

export type CartPanel = {
    heading?: string
    items: CartItem[]
}

export type HeroType = {
    title: string,
    subTitle: string
}