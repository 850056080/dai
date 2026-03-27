import { createRouter, createWebHashHistory } from 'vue-router'
import ResumePage from '../pages/ResumePage.vue'
import CasesPage from '../pages/CasesPage.vue'
import DownloadPage from '../pages/DownloadPage.vue'
import BodyWebPage from '../pages/BodyWebPage.vue'
import SoftwarePage from '../pages/SoftwarePage.vue'
import AiboxPage from '../pages/AiboxPage.vue'
import WorkbenchPage from '../pages/WorkbenchPage.vue'

const routes = [
  {
    path: '/',
    name: 'resume',
    component: ResumePage
  },
  {
    path: '/cases',
    name: 'cases',
    component: CasesPage
  },
  {
    path: '/download',
    name: 'download',
    component: DownloadPage
  },
  {
    path: '/bodyweb',
    name: 'bodyweb',
    component: BodyWebPage
  },
  {
    path: '/workbench',
    name: 'workbench',
    component: WorkbenchPage
  },
  {
    path: '/software',
    name: 'software',
    component: SoftwarePage
  },
  {
    path: '/aibox',
    name: 'aibox',
    component: AiboxPage
  },
  // 其他路由可以在这里添加
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
