<template>
  <header class="header">
    <nav class="nav">
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="切换导航菜单"
        @click="toggleMenu"
      >
        <img class="menu-toggle__icon" :src="menuIcon" alt="" aria-hidden="true" />
      </button>

      <div v-if="isMenuOpen" class="menu-overlay" @click="closeMenu"></div>

      <div class="nav-title">{{ currentTitle }}</div>

      <ul class="menu menu--desktop menu--left">
        <li v-for="item in leftItems" :key="item.to">
          <router-link :to="item.to">{{ item.label }}</router-link>
        </li>
      </ul>

      <ul class="menu menu--desktop menu--right">
        <li v-for="item in rightItems" :key="item.to">
          <router-link :to="item.to">{{ item.label }}</router-link>
        </li>
      </ul>

      <ul class="menu menu--mobile" :class="{ 'menu--open': isMenuOpen }">
        <li v-for="item in navItems" :key="item.to">
          <router-link :to="item.to" @click="closeMenu">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import menuIcon from '../tup/menu.svg'

const isMenuOpen = ref(false)
const route = useRoute()

const navItems = [
  { to: '/', label: '在线简历' },
  { to: '/cases', label: '项目案例' },
  { to: '/download', label: '简历下载' },
  { to: '/workbench', label: '开发工作台' },
  { to: '/software', label: '软件下载' },
  { to: '/aibox', label: 'AI工具箱' },
]

const leftItems = computed(() => navItems.slice(0, 3))
const rightItems = computed(() => navItems.slice(3))

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

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--primary-color, #75a3e1);
  z-index: 1000;
}

.nav {
  height: 50px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-content: center;
  align-items: center;
  position: relative;
}

.nav-title {
  grid-column: 2;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 50px;
  padding: 0 12px;
  white-space: nowrap;
  max-width: 60vw;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.menu--left {
  grid-column: 1;
  justify-content: flex-end;
}

.menu--right {
  grid-column: 3;
  justify-content: flex-start;
}

.menu--mobile {
  display: none;
}

.menu li {
  padding: 0 15px;
}

.menu a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
  line-height: 50px;
  display: block;
}

.menu a:hover,
.menu a.router-link-active {
  color: var(--accent-color, #ffde7c);
}

.menu-toggle {
  display: none;
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

.menu-toggle__icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 0 auto;
}

.menu-overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 999;
}

@media (max-width: 768px) {
  .nav {
    display: flex;
    justify-content: center;
  }

  .menu-toggle {
    display: block;
  }

  .menu--desktop {
    display: none;
  }

  .nav-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    max-width: calc(100% - 120px);
  }

  .menu--mobile {
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

  .menu--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .menu--mobile li {
    padding: 0;
  }

  .menu--mobile a {
    padding: 0 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }
}
</style>
