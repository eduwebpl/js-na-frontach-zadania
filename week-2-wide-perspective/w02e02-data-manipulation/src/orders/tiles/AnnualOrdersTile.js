const componentId = 'annual-orders'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const subTitle = mountPoint.querySelector('[data-subtitle]')
const panel = mountPoint.querySelector('[data-panel]')

// Uważaj na odfiltrowanie wg. roku (2022)
subTitle.textContent = 'Year 2022'
panel.innerHTML = ''

// Tutaj podobnie, powinniśmy interpretować dane z: ordersFakeData
for (const orderDate of [
  '2022-10-06T15:03:25.132Z',
  '2022-10-16T17:43:26.300Z',
  '2022-11-07T02:37:43.525Z',
]) {
  panel.appendChild(makeLiElement({ orderDate, orderNumber: '02/2022' }))
}

function makeLiElement({ orderDate, orderNumber }) {
  const li = document.createElement('li')
  li.className = 'panel-block'
  // Dodaj jakieś ładne formatowanie daty!
  li.innerText = `${orderNumber} | ${orderDate}`
  return li
}
