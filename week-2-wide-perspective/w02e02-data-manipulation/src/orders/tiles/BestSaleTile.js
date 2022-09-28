const componentId = 'best-sale'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

// Ta wartość powinna pochodzić z kolekcji ordersFakeData
content.innerHTML = '5522.0'
