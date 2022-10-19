import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './app/HomeView'
import ShoppingListView from './app/shopping-lists/ShoppingListView'

const routes = [
  { path: '/', component: HomeView },
  { path: '/lists/:id', component: ShoppingListView },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
