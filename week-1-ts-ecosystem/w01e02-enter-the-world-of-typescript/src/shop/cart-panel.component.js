import { article, p } from '../framework/dom-creators.ts'
import { cartItemSum } from './cart-item-sum.component.js'
import { cartItem } from './cart-item.component.ts'

export function cartPanel({ heading = 'Cart Items', items }) {
  const $article = article('panel is-primary my-6 w-75 mx-auto')
  const $heading = p('panel-heading')
  $heading.textContent = heading
  $article.append($heading)
  let value = 0
  items.forEach((item) => {
    value += item.price.value
    $article.appendChild(cartItem(item))
  })
  $article.append(cartItemSum({ value, currency: 'PLN' }))
  return $article
}
