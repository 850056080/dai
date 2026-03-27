<template>
  <div class="software-page">
    <div class="page-header">
      <h1>软件下载中心</h1>
      <div class="tabs">
        <button
          v-for="c in categories"
          :key="c.id"
          class="tab"
          :class="{ active: activeCategoryId === c.id }"
          @click="scrollToCategory(c.id)"
        >
          {{ c.label }}
        </button>
      </div>
    </div>

    <div class="container">
      <section v-for="c in categories" :key="c.id" :id="c.id" class="category" :ref="setCategoryEl(c.id)">
        <h2 class="category-title">{{ c.label }}</h2>
        <div class="software-list">
          <div v-for="item in c.items" :key="item.name" class="software-card" @click="openModal(item.name)">
            <div class="software-icon">{{ item.icon }}</div>
            <div class="software-name">{{ item.shortName || item.name }}</div>
          </div>
        </div>
      </section>
    </div>

    <div v-show="isModalOpen" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <span class="close-btn" @click="closeModal">&times;</span>
        <h3 class="modal-title">{{ modalTitle }}</h3>

        <div class="version-list">
          <div
            v-for="(v, idx) in versions"
            :key="v.id"
            class="version-item"
            :class="{ active: expandedVersionIndex === idx }"
            @click="toggleVersion(idx)"
          >
            <div class="version-header">
              <span>{{ v.label }}</span>
              <span class="chevron">{{ expandedVersionIndex === idx ? '−' : '+' }}</span>
            </div>
            <div class="download-box">
              <button class="download-btn" @click.stop="download(v.id)">立即下载</button>
              <button class="copy-btn" @click.stop="copyLink(v.id)">复制链接</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue'

const categories = [
  {
    id: 'ai-ide',
    label: 'AI原生IDE',
    items: [
      { name: 'Trae', shortName: 'Trae', icon: '💻' },
      { name: 'Trae CN', shortName: 'Trae CN', icon: '💻' },
      { name: 'Cursor', shortName: 'Cursor', icon: '⚡' },
      { name: 'Windsurf', shortName: 'Windsurf', icon: '🌊' },
      { name: 'Zed', shortName: 'Zed', icon: '🧩' },
      { name: 'Replit', shortName: 'Replit', icon: '☁️' },
      { name: 'CodeArts', shortName: 'CodeArts', icon: '🛠️' },
      { name: 'CodeBuddy', shortName: 'CodeBuddy', icon: '🤝' },
      { name: 'JoyCode', shortName: 'JoyCode', icon: '🎉' },
      { name: 'Fleet', shortName: 'Fleet', icon: '🚀' },
      { name: 'Visual Studio Code', shortName: 'VS Code', icon: '🧷' },
    ],
  },
  {
    id: 'adobe',
    label: 'Adobe软件',
    items: [
      { name: 'Photoshop', shortName: 'PS', icon: '🖌️' },
      { name: 'Premiere', shortName: 'PR', icon: '🎬' },
      { name: 'After Effects', shortName: 'AE', icon: '✨' },
      { name: 'Illustrator', shortName: 'AI', icon: '📐' },
      { name: 'Lightroom', shortName: 'LR', icon: '🧿' },
      { name: 'InDesign', shortName: 'ID', icon: '📚' },
      { name: 'Audition', shortName: 'AU', icon: '🎧' },
      { name: 'Adobe XD', shortName: 'XD', icon: '🧪' },
    ],
  },
  {
    id: 'ai-assistant',
    label: 'AI对话助手',
    items: [
      { name: '豆包', shortName: '豆包', icon: '🌱' },
      { name: 'DeepSeek', shortName: 'DeepSeek', icon: '🔍' },
      { name: '通义千问', shortName: '千问', icon: '☁️' },
      { name: '元宝AI', shortName: '元宝', icon: '💰' },
      { name: 'ChatGPT', shortName: 'ChatGPT', icon: '💬' },
      { name: 'Claude', shortName: 'Claude', icon: '🧠' },
      { name: 'Kimi', shortName: 'Kimi', icon: '🌙' },
      { name: '文心一言', shortName: '文心', icon: '🧾' },
    ],
  },
  {
    id: 'office',
    label: '办公设计工具',
    items: [
      { name: '剪映', shortName: '剪映', icon: '🎥' },
      { name: 'WPS', shortName: 'WPS', icon: '📄' },
      { name: '飞书', shortName: '飞书', icon: '🗂️' },
      { name: '腾讯文档', shortName: '腾讯文档', icon: '📝' },
      { name: 'C4D', shortName: 'C4D', icon: '📦' },
      { name: 'Blender', shortName: 'Blender', icon: '🔶' },
      { name: 'FileZilla', shortName: 'FileZilla', icon: '📡' },
      { name: 'Figma', shortName: 'Figma', icon: '🎨' },
      { name: 'Xmind', shortName: 'Xmind', icon: '🧠' },
      { name: 'Canva', shortName: 'Canva', icon: '🖼️' },
      { name: 'Notion', shortName: 'Notion', icon: '📒' },
      { name: 'ProcessOn', shortName: 'ProcessOn', icon: '🔗' },
      { name: '亿图图示', shortName: '亿图图示', icon: '📊' },
    ],
  },
]

const activeCategoryId = ref(categories[0]?.id || '')
const categoryEls = new Map()

const setCategoryEl = (id) => (el) => {
  if (el) categoryEls.set(id, el)
}

const scrollToCategory = async (id) => {
  activeCategoryId.value = id
  await nextTick()
  const el = categoryEls.get(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const isModalOpen = ref(false)
const selectedSoftwareName = ref('')
const expandedVersionIndex = ref(-1)

const versions = [
  { id: 'win1.0', label: 'Windows 1.0 版本' },
  { id: 'win2.0', label: 'Windows 2.0 版本' },
  { id: 'mac1.0', label: 'Mac 1.0 版本' },
  { id: 'mac2.0', label: 'Mac 2.0 版本' },
]

const modalTitle = computed(() => (selectedSoftwareName.value ? `${selectedSoftwareName.value} 下载` : '软件下载'))

const openModal = (softwareName) => {
  selectedSoftwareName.value = String(softwareName || '')
  expandedVersionIndex.value = -1
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const toggleVersion = (idx) => {
  expandedVersionIndex.value = expandedVersionIndex.value === idx ? -1 : idx
}

const download = (versionId) => {
  alert(`开始下载：${versionId} 版本`)
}

const copyLink = async (versionId) => {
  const link = `https://download.xxx.com/${versionId}.zip`
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(link)
      alert('复制下载链接成功！')
      return
    }
  } catch (e) {}
  window.prompt('复制下面链接：', link)
}
</script>

<style scoped>
.software-page {
  background-color: #f5f7fa;
  padding-top: 50px;
  padding-bottom: 60px;
  min-height: 100vh;
}

.page-header {
  background: #a4c4ef;
  color: white;
  padding: 20px;
  text-align: center;
  position: sticky;
  top: 50px;
  z-index: 99;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.page-header h1 {
  font-size: 24px;
  margin-bottom: 15px;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.tab {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  color: white;
  border: none;
  font-size: 14px;
}

.tab:hover,
.tab.active {
  background: white;
  color: var(--primary-color, #75a3e1);
}

.container {
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 20px;
}

.category {
  margin-bottom: 50px;
  scroll-margin-top: 170px;
}

.category-title {
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-color, #75a3e1);
  display: inline-block;
}

.software-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px;
}

.software-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  user-select: none;
}

.software-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.software-icon {
  font-size: 40px;
  margin-bottom: 10px;
}

.software-name {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
}

.modal-content {
  background: white;
  width: 90%;
  max-width: 500px;
  border-radius: 12px;
  padding: 25px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
  color: #666;
}

.modal-title {
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
  color: var(--primary-color, #75a3e1);
}

.version-list {
  width: 100%;
}

.version-item {
  padding: 12px 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  user-select: none;
}

.version-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}

.chevron {
  color: #999;
  font-weight: 700;
}

.download-box {
  display: none;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed #eee;
  gap: 10px;
}

.download-btn,
.copy-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
}

.download-btn {
  background: var(--primary-color, #75a3e1);
  color: white;
}

.copy-btn {
  background: #f5f7fa;
  color: #333;
}

.version-item.active .download-box {
  display: flex;
}
</style>
