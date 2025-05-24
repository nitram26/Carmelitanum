import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// ENTRADA++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import IndexEntrada from '../views/01entrada/IndexEntrada.vue'
import VienenConAlegria from '../views/01entrada/VienenConAlegria.vue'
import DiosTrino from '../views/01entrada/DiosTrino.vue'
// PENITENCIAL++++++++++++++++++++++++++++++++++++++++++++++++++++++
import IndexPenitencial from '../views/02penitencial/IndexPenitencial.vue'




const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  // ENTRADA+++++++++++++++++++++++++++++++++++++++++
  {
    path: '/indexEntrada',
    name: 'IndexEntrada',
    component: IndexEntrada
  },
  {
    path: '/vienenConAlegria',
    name: 'VienenConAlegria',
    component: VienenConAlegria
  },
  {
    path: '/diosTrino',
    name: 'DiosTrino',
    component: DiosTrino
  },
  // PENITENCIAL+++++++++++++++++++++++++++++++++++++++
  {
    path: '/indexPenitencial',
    name: 'IndexPenitencial',
    component: IndexPenitencial
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router