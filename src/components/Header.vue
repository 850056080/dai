<template>
  <header v-if="!isMobile" class="pc_header">
    <nav class="pc_nav">
      <ul class="pc_menu">
        <li v-for="item in navItems" :key="item.to" class="pc_item">
          <router-link :to="item.to" :class="['pc_link', { pc_linkActive: isItemActive(item) }]">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>

  <header v-else class="m_header">
    <nav class="m_nav">
      <button
        class="m_toggle"
        type="button"
        aria-label="切换导航菜单"
        aria-controls="m_menu"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        <img class="m_toggleIcon" :src="menuIcon" alt="" aria-hidden="true" />
      </button>

      <div class="m_title">{{ currentTitle }}</div>

      <div v-if="isMenuOpen" class="m_overlay" @click="closeMenu"></div>

      <ul id="m_menu" class="m_menu" :class="{ m_menuOpen: isMenuOpen }" :aria-hidden="!isMenuOpen">
        <li v-for="item in navItems" :key="item.to" class="m_item">
          <router-link
            :to="item.to"
            :class="['m_link', { m_linkActive: isItemActive(item) }]"
            @click="closeMenu"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import menuIcon from '../tup/menu.svg'

const isMenuOpen = ref(false)
const isMobile = ref(false)
const route = useRoute()

const navItems = [
  { to: '/', label: '在线简历' },
  { to: '/cases', label: '项目案例' },
  { to: '/download', label: '简历下载' },
  { to: '/workbench', label: '开发工作台' },
  { to: '/software', label: '软件下载' },
  { to: '/aibox', label: 'AI工具箱' },
]

const isItemActive = (item) => {
  const path = route.path
  return item.to === '/' ? path === '/' : path.startsWith(item.to)
}

const currentTitle = computed(() => {
  const path = route.path
  const match = navItems.find((item) => (item.to === '/' ? path === '/' : path.startsWith(item.to)))
  return match?.label ?? ''
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const mobileMediaQuery = '(max-width: 768px)'
let mobileMediaMatcher
let mobileMediaHandler

const syncIsMobile = () => {
  isMobile.value = window.matchMedia(mobileMediaQuery).matches
}

const handleKeydown = (event) => {
  if (!isMenuOpen.value) return
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => {
  syncIsMobile()
  mobileMediaMatcher = window.matchMedia(mobileMediaQuery)
  mobileMediaHandler = (event) => {
    isMobile.value = event.matches
  }
  if (mobileMediaMatcher.addEventListener) {
    mobileMediaMatcher.addEventListener('change', mobileMediaHandler)
  } else {
    mobileMediaMatcher.addListener(mobileMediaHandler)
  }
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  if (mobileMediaMatcher && mobileMediaHandler) {
    if (mobileMediaMatcher.removeEventListener) {
      mobileMediaMatcher.removeEventListener('change', mobileMediaHandler)
    } else {
      mobileMediaMatcher.removeListener(mobileMediaHandler)
    }
  }
  window.removeEventListener('keydown', handleKeydown)
})

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)

watch(
  () => isMobile.value,
  () => {
    closeMenu()
  }
)
</script>

<style scoped>
.pc_header,
.m_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--primary-color, #75a3e1);
  z-index: 1000;
}

.pc_nav {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pc_menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.pc_item {
  padding: 0 15px;
}

.pc_link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
  line-height: 50px;
  display: block;
}

.pc_link:hover,
.pc_linkActive {
  color: var(--accent-color, #ffde7c);
}

.m_nav {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.m_title {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 50px;
  padding: 0 12px;
  white-space: nowrap;
  max-width: calc(100% - 120px);
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

.m_toggle {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.m_toggleIcon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 0 auto;
}

.m_overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 999;
}

.m_menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  background-color: var(--primary-color, #75a3e1);
  transform: translateY(-8px);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.2s ease, opacity 0.2s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  z-index: 1000;
}

.m_menuOpen {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.m_item {
  padding: 0;
}

.m_link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  line-height: 50px;
  display: block;
  padding: 0 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  transition: color 0.3s;
}

.m_link:hover,
.m_linkActive {
  color: var(--accent-color, #ffde7c);
}
</style>
