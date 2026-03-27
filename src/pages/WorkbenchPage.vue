<template>
  <div class="workbench-page" :class="{ 'is-dark': isDark }">
    <header class="wb-topbar">
      <div class="wb-topbar-inner">
        <div class="wb-left">
          <button class="icon-btn wb-menu-btn" type="button" @click="openSidebar">
            <i class="fa-solid fa-bars"></i>
          </button>

          <div class="wb-brand">
            <div class="wb-logo">YL</div>
            <span class="wb-brand-name">炎雷科技</span>
          </div>
        </div>

        <div class="wb-right">
          <button class="icon-btn" type="button" @click="toggleTheme" :aria-label="isDark ? '切换浅色' : '切换深色'">
            <i v-if="!isDark" class="fa-regular fa-moon"></i>
            <i v-else class="fa-regular fa-sun"></i>
          </button>

          <button class="icon-btn wb-bell" type="button" aria-label="通知">
            <i class="fa-regular fa-bell"></i>
            <span class="wb-dot"></span>
          </button>

          <div class="wb-user">
            <img class="wb-avatar" :src="user.avatar" alt="用户头像" />
            <div class="wb-user-meta">
              <p class="wb-user-name">{{ user.name }}</p>
            </div>
            <i class="fa-solid fa-chevron-down wb-user-chevron"></i>
          </div>
        </div>
      </div>
    </header>

    <div class="wb-body">
      <aside class="wb-sidebar" :class="{ open: isSidebarOpen }">
        <div class="wb-sidebar-header">
          <h2>系统分类</h2>
          <button class="icon-btn wb-close-btn" type="button" @click="closeSidebar" aria-label="关闭侧边栏">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav class="wb-nav">
          <h3 class="wb-nav-title">系统分类</h3>
          <ul class="wb-nav-list">
            <li v-for="c in categories" :key="c.key">
              <button
                type="button"
                class="wb-nav-item"
                :class="{ active: activeCategory === c.key }"
                @click="selectCategory(c.key)"
              >
                <i :class="c.icon"></i>
                <span>{{ c.label }}</span>
              </button>
            </li>
          </ul>

          <div class="wb-sidebar-footer">
            <div class="wb-update">
              <p class="wb-update-label">最后更新</p>
              <p class="wb-update-value">2025-08-22</p>
            </div>

            <button type="button" class="wb-add-btn">
              <i class="fa-solid fa-plus"></i>
              <span>添加自定义系统</span>
            </button>
          </div>
        </nav>
      </aside>

      <div v-show="isSidebarOpen" class="wb-overlay" @click="closeSidebar"></div>

      <main class="wb-main">
        <div class="wb-main-inner">
          <div class="wb-title">
            <h1>开发者 - 工作台</h1>
            <p>快速访问公司各类业务系统，提高工作效率</p>
          </div>

          <div v-if="filteredSystems.length" class="wb-grid">
            <a
              v-for="(s, idx) in filteredSystems"
              :key="s.id"
              class="wb-card"
              :href="s.url"
              target="_blank"
              rel="noopener noreferrer"
              :style="{ animationDelay: `${idx * 0.05}s` }"
            >
              <div class="wb-card-top">
                <div class="wb-icon" :class="categoryColorClass(s.category)">
                  <i :class="s.icon"></i>
                </div>
                <span class="wb-external">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
              </div>

              <div class="wb-card-body">
                <h3>{{ s.name }}</h3>
                <p>{{ s.description }}</p>
                <div class="wb-visit">
                  <span>访问系统</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </a>
          </div>

          <div v-else class="wb-empty">
            <i class="fa-solid fa-magnifying-glass"></i>
            <h3>未找到系统</h3>
            <p>当前分类下没有可用的系统，请尝试选择其他分类</p>
            <button type="button" class="wb-showall" @click="selectCategory('all')">查看全部系统</button>
          </div>
        </div>
      </main>
    </div>

    <footer class="wb-footer">
      <p>© 2025 IT互联网公司 - cookie - 员工工作台 - 版权所有</p>
    </footer>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const STORAGE_KEY = 'workbench-theme'

const user = {
  name: '员工账号 13898184863',
  avatar: 'http://120.79.133.254:53000/daiyuhang/pic/raw/branch/main/image/avatarlogo.jpg',
}

const categories = [
  { key: 'all', label: '全部系统', icon: 'fa-solid fa-table-cells-large' },
  { key: 'docs', label: '文档协作', icon: 'fa-regular fa-file-lines' },
  { key: 'devTools', label: '开发工具', icon: 'fa-solid fa-wrench' },
  { key: 'knowledge', label: '知识库', icon: 'fa-solid fa-book' },
  { key: 'project', label: '项目管理', icon: 'fa-solid fa-list-check' },
]

const systems = [
  {
    id: 'feishu',
    name: '飞书文档',
    url: 'https://htplatform.feishu.cn/wiki/RXglwVAOzikHBdkkrd3ckvusnDX',
    icon: 'fa-regular fa-file-lines',
    category: 'docs',
    description: '高效的团队协作与文档管理平台',
  },
  {
    id: 'apifox',
    name: 'Apifox',
    url: 'https://app.apifox.com/main',
    icon: 'fa-solid fa-code',
    category: 'devTools',
    description: '一体化的API设计、开发与测试工具',
  },
  {
    id: 'git',
    name: 'Git代码仓库',
    url: 'http://120.79.133.254:53000/',
    icon: 'fa-solid fa-code-branch',
    category: 'devTools',
    description: '强大的代码版本控制与协作平台',
  },
  {
    id: 'dify',
    name: 'Dify',
    url: 'http://43.136.56.81:57000/apps',
    icon: 'fa-solid fa-diagram-project',
    category: 'devTools',
    description: '智能化的工作流与AI应用构建平台',
  },
  {
    id: 'chengjiu',
    name: '知识库产品-诚就项目',
    url: 'https://hkb.htpsoftai.com/#/',
    icon: 'fa-solid fa-book',
    category: 'knowledge',
    description: '诚就项目的知识库与文档中心',
  },
  {
    id: 'demo',
    name: 'Demo后台',
    url: 'https://demo.htpsoftai.com/#/',
    icon: 'fa-solid fa-gauge-high',
    category: 'project',
    description: '项目演示与管理后台系统',
  },
  {
    id: 'huichebao',
    name: '知识库产品-慧车宝',
    url: 'https://kbzx.htpsoftai.com/#/',
    icon: 'fa-regular fa-bookmark',
    category: 'knowledge',
    description: '慧车宝项目的知识库与文档中心',
  },
  {
    id: 'haibao',
    name: '海报模板',
    url: 'https://ontest.htpsoftai.com/list.html',
    icon: 'fa-regular fa-image',
    category: 'knowledge',
    description: '诚就项目的海报模板库',
  },
  {
    id: 'pinganbanzu',
    name: '平安班组微应用',
    url: 'https://pabt.sagdemo.biz:50035/',
    icon: 'fa-solid fa-chart-line',
    category: 'knowledge',
    description: '平安班组的数据可视化大屏',
  },
]

const activeCategory = ref('all')
const isSidebarOpen = ref(false)
const isDark = ref(false)

const filteredSystems = computed(() => {
  if (activeCategory.value === 'all') return systems
  return systems.filter((s) => s.category === activeCategory.value)
})

const categoryColorClass = (category) => {
  if (category === 'docs') return 'is-blue'
  if (category === 'devTools') return 'is-purple'
  if (category === 'knowledge') return 'is-green'
  if (category === 'project') return 'is-amber'
  return 'is-gray'
}

const selectCategory = (key) => {
  activeCategory.value = key
  closeSidebar()
}

const openSidebar = () => {
  isSidebarOpen.value = true
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

const toggleTheme = () => {
  isDark.value = !isDark.value
}

const onResize = () => {
  if (window.innerWidth >= 768) closeSidebar()
}

onMounted(() => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark') isDark.value = true
  if (stored === 'light') isDark.value = false
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})

watch(isDark, (v) => {
  localStorage.setItem(STORAGE_KEY, v ? 'dark' : 'light')
})
</script>

<style scoped>
.workbench-page {
  background: #f3f4f6;
  padding-top: 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.wb-topbar {
  position: sticky;
  top: 50px;
  z-index: 200;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
}

.wb-topbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wb-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.wb-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.wb-logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--primary-color, #75a3e1);
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
}

.wb-brand-name {
  font-size: 18px;
  font-weight: 700;
  color: #111827;
}

.wb-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: none;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
}

.icon-btn:hover {
  background: rgba(0, 0, 0, 0.05);
  color: #374151;
}

.wb-menu-btn {
  border-radius: 10px;
  width: 40px;
  height: 40px;
}

.wb-bell {
  position: relative;
}

.wb-dot {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #ef4444;
}

.wb-user {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 8px;
  border-radius: 999px;
  cursor: pointer;
  user-select: none;
}

.wb-user:hover {
  background: rgba(0, 0, 0, 0.05);
}

.wb-avatar {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  object-fit: cover;
  border: 2px solid #e5e7eb;
}

.wb-user-meta {
  display: none;
}

.wb-user-name {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  line-height: 1.2;
}

.wb-user-chevron {
  font-size: 12px;
  color: #6b7280;
}

.wb-body {
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
}

.wb-sidebar {
  width: 260px;
  flex-shrink: 0;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  height: calc(100vh - 50px - 64px);
  position: fixed;
  left: 0;
  top: calc(50px + 64px);
  transform: translateX(-100%);
  transition: transform 0.25s ease;
  z-index: 300;
  overflow-y: auto;
}

.wb-sidebar.open {
  transform: translateX(0);
}

.wb-sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid #e5e7eb;
}

.wb-sidebar-header h2 {
  font-size: 16px;
  color: #111827;
}

.wb-close-btn {
  width: 34px;
  height: 34px;
  border-radius: 10px;
}

.wb-nav {
  padding: 16px;
}

.wb-nav-title {
  font-size: 12px;
  color: #6b7280;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.wb-nav-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.wb-nav-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: transparent;
  color: #374151;
  transition: background 0.2s, color 0.2s;
  text-align: left;
}

.wb-nav-item i {
  width: 18px;
  text-align: center;
  color: var(--primary-color, #75a3e1);
}

.wb-nav-item:hover {
  background: #f3f4f6;
}

.wb-nav-item.active {
  background: rgba(117, 163, 225, 0.18);
  color: var(--primary-color, #75a3e1);
  font-weight: 700;
}

.wb-sidebar-footer {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid #e5e7eb;
}

.wb-update-label {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
}

.wb-update-value {
  font-size: 14px;
  color: #374151;
  font-weight: 600;
}

.wb-add-btn {
  margin-top: 14px;
  width: 100%;
  border: 1px solid var(--primary-color, #75a3e1);
  background: transparent;
  color: var(--primary-color, #75a3e1);
  border-radius: 10px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: background 0.2s;
}

.wb-add-btn:hover {
  background: rgba(117, 163, 225, 0.12);
}

.wb-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 250;
}

.wb-main {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background: #f3f4f6;
  width: 100%;
}

.wb-main-inner {
  max-width: 1280px;
  margin: 0 auto;
}

.wb-title {
  margin: 10px 0 24px;
}

.wb-title h1 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #111827;
}

.wb-title p {
  color: #4b5563;
  margin-top: 6px;
}

.wb-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 18px;
}

.wb-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.25s, box-shadow 0.25s;
  animation: wbFadeIn 0.45s ease both;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  min-height: 180px;
}

.wb-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
}

.wb-card-top {
  padding: 18px 18px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.wb-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.wb-icon.is-blue {
  background: rgba(59, 130, 246, 0.12);
  color: #3b82f6;
}

.wb-icon.is-purple {
  background: rgba(168, 85, 247, 0.14);
  color: #a855f7;
}

.wb-icon.is-green {
  background: rgba(34, 197, 94, 0.14);
  color: #22c55e;
}

.wb-icon.is-amber {
  background: rgba(245, 158, 11, 0.14);
  color: #f59e0b;
}

.wb-icon.is-gray {
  background: rgba(107, 114, 128, 0.12);
  color: #6b7280;
}

.wb-external {
  color: #9ca3af;
  transition: color 0.2s;
  padding: 6px;
}

.wb-card:hover .wb-external {
  color: #6b7280;
}

.wb-card-body {
  padding: 14px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.wb-card-body h3 {
  font-size: 18px;
  font-weight: 800;
  color: #111827;
}

.wb-card-body p {
  color: #4b5563;
  font-size: 14px;
  line-height: 1.5;
  flex: 1;
}

.wb-visit {
  margin-top: 2px;
  background: var(--primary-color, #75a3e1);
  color: #fff;
  border-radius: 10px;
  padding: 10px 12px;
  font-weight: 800;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.wb-empty {
  padding: 64px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #6b7280;
}

.wb-empty i {
  font-size: 46px;
  color: #9ca3af;
}

.wb-empty h3 {
  font-size: 20px;
  color: #374151;
}

.wb-empty p {
  max-width: 520px;
}

.wb-showall {
  margin-top: 8px;
  border: none;
  background: var(--primary-color, #75a3e1);
  color: #fff;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 800;
}

.wb-footer {
  background: #fff;
  border-top: 1px solid #e5e7eb;
  padding: 14px 16px;
  text-align: center;
  color: #6b7280;
  font-size: 14px;
}

.workbench-page.is-dark {
  background: #0b1220;
}

.workbench-page.is-dark .wb-topbar {
  background: #111827;
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

.workbench-page.is-dark .wb-brand-name,
.workbench-page.is-dark .wb-title h1,
.workbench-page.is-dark .wb-sidebar-header h2 {
  color: #e5e7eb;
}

.workbench-page.is-dark .wb-main,
.workbench-page.is-dark .wb-sidebar {
  background: #0b1220;
  border-color: rgba(255, 255, 255, 0.08);
}

.workbench-page.is-dark .wb-title p,
.workbench-page.is-dark .wb-card-body p,
.workbench-page.is-dark .wb-update-label,
.workbench-page.is-dark .wb-empty,
.workbench-page.is-dark .wb-footer {
  color: rgba(229, 231, 235, 0.78);
}

.workbench-page.is-dark .wb-card {
  background: #111827;
  border-color: rgba(255, 255, 255, 0.08);
}

.workbench-page.is-dark .wb-card-body h3,
.workbench-page.is-dark .wb-update-value,
.workbench-page.is-dark .wb-empty h3 {
  color: #e5e7eb;
}

.workbench-page.is-dark .wb-nav-item {
  color: rgba(229, 231, 235, 0.86);
}

.workbench-page.is-dark .wb-nav-item:hover {
  background: rgba(255, 255, 255, 0.06);
}

.workbench-page.is-dark .wb-nav-item.active {
  background: rgba(117, 163, 225, 0.22);
}

.workbench-page.is-dark .wb-user:hover,
.workbench-page.is-dark .icon-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #e5e7eb;
}

.workbench-page.is-dark .wb-avatar {
  border-color: rgba(255, 255, 255, 0.2);
}

.workbench-page.is-dark .wb-footer {
  background: #111827;
  border-top-color: rgba(255, 255, 255, 0.08);
}

@keyframes wbFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 768px) {
  .wb-menu-btn {
    display: none;
  }

  .wb-user-meta {
    display: block;
  }

  .wb-sidebar {
    position: sticky;
    top: calc(50px + 64px);
    transform: translateX(0);
    height: calc(100vh - 50px - 64px);
    z-index: 1;
  }

  .wb-sidebar-header {
    display: none;
  }

  .wb-overlay {
    display: none;
  }

  .wb-main {
    padding: 20px 22px;
  }

  .wb-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
  }
}

@media (min-width: 1024px) {
  .wb-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
