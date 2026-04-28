import { createRouter, createWebHashHistory } from 'vue-router'
import ResumePage from '../pages/ResumePage.vue'
import CasesPage from '../pages/CasesPage/CasesPage.vue'
import DownloadPage from '../pages/DownloadPage.vue'
import BodyWebPage from '../pages/BodyWebPage.vue'
import SoftwarePage from '../pages/SoftwarePage.vue'
import AiboxPage from '../pages/AiboxPage.vue'
import WorkbenchPage from '../pages/WorkbenchPage.vue'
import ImagesPage from '../pages/ImagesPage.vue'
import ActivatePage from '../pages/ActivatePage.vue'

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
  {
    path: '/images',
    name: 'images',
    component: ImagesPage
  },
  {
    path: '/activate',
    name: 'activate',
    component: ActivatePage
  },
  // 其他路由可以在这里添加
]

const router = createRouter({
  // Gitee/GitHub Pages 都是纯静态托管：使用 Hash 路由最稳
  // 传入 BASE_URL 以确保在 /dai/ 子路径部署时路由生成的链接正确
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

// 轻量“开发者入口”控制（注意：静态站点只能做到“防君子不防小人”）
const DEV_FLAG_KEY = 'dai_dev_access_enabled'
router.beforeEach((to) => {
  if (to.name !== 'images') return true
  try {
    if (localStorage.getItem(DEV_FLAG_KEY) === '1') return true
  } catch {}
  return { name: 'resume' }
})

export default router
