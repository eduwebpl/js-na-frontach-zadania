const componentId = 'total-income'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

// Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData
content.innerHTML = '10829.22'
