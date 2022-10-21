export type priceType = {
    value: number,
    currency: string
}

export type productType = {
    name: string,
    amount: number,
    unit: string,
    price: priceType,
}

export type cartPanelValueType = { heading?: string, items: Array<productType> }

