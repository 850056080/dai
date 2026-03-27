<template>
  <div class="aibox-page">
    <main class="aibox-main">
      <aside class="aibox-aside">
        <h2>Dai·AI工具箱</h2>
        <ul>
          <li
            v-for="c in menuCategories"
            :key="c.key"
            :class="{ active: currentCategory === c.key }"
            @click="onCategoryClick(c.key)"
          >
            <i class="fas" :class="c.icon"></i>{{ c.label }}
          </li>
        </ul>
      </aside>

      <section class="aibox-section" ref="sectionRef">
        <div class="search">
          <h2>Dai·AI工具箱</h2>
          <input v-model="searchText" type="text" placeholder="搜索AI工具..." />
        </div>

        <div v-if="searchText.trim().length" class="search-results active">
          <h3><i class="fas fa-search"></i>搜索结果</h3>
          <ol>
            <template v-if="searchResults.length">
              <li
                v-for="tool in searchResults"
                :key="tool.id"
                class="tool-card"
                @click="openTool(tool)"
              >
                <img :src="tool.logo" :alt="tool.name" />
                <div class="name">{{ tool.name }}</div>
                <div class="dec">{{ tool.category }}</div>
                <div class="tags">
                  <span v-for="t in tool.tags" :key="t">{{ t }}</span>
                </div>
              </li>
            </template>
            <div v-else class="no-results">未找到相关工具</div>
          </ol>
        </div>

        <div v-else class="tools-container">
          <div v-if="currentCategory === 'all'" class="tools">
            <h3><i class="fas fa-star"></i>常用工具</h3>
            <ol>
              <li v-for="tool in commonTools" :key="tool.id" class="tool-card" @click="openTool(tool)">
                <img :src="tool.logo" :alt="tool.name" />
                <div class="name">{{ tool.name }}</div>
                <div class="dec">{{ tool.category }}</div>
                <div class="tags">
                  <span v-for="t in tool.tags" :key="t">{{ t }}</span>
                </div>
              </li>
            </ol>
          </div>

          <div v-if="currentCategory === 'all'" class="tools">
            <h3><i class="fas fa-clock"></i>最新收录</h3>
            <ol>
              <li v-for="tool in latestTools" :key="tool.id" class="tool-card" @click="openTool(tool)">
                <img :src="tool.logo" :alt="tool.name" />
                <div class="name">{{ tool.name }}</div>
                <div class="dec">{{ tool.category }}</div>
                <div class="tags">
                  <span v-for="t in tool.tags" :key="t">{{ t }}</span>
                </div>
              </li>
            </ol>
          </div>

          <div v-for="c in contentCategories" :key="c.key" v-show="currentCategory === 'all' || currentCategory === c.key" class="tools">
            <h4><i class="fas" :class="c.headerIcon"></i>{{ c.key }}</h4>
            <ol>
              <li v-for="tool in toolsByCategory[c.key]" :key="tool.id" class="tool-card" @click="openTool(tool)">
                <img :src="tool.logo" :alt="tool.name" />
                <div class="name">{{ tool.name }}</div>
                <div class="dec">{{ tool.category }}</div>
                <div class="tags">
                  <span v-for="t in tool.tags" :key="t">{{ t }}</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const tools = [
  {
    id: 'doubao',
    name: '豆包',
    logo: 'https://picsum.photos/seed/doubao/200/200',
    category: 'AI写作工具',
    tags: ['字节跳动', '免费AI助手', '智能对话'],
    url: 'https://www.doubao.com'
  },
  {
    id: 'toast-ai',
    name: '吐司AI',
    logo: 'https://picsum.photos/seed/toastai/200/200',
    category: 'AI图像工具',
    tags: ['AI绘画', '模型社区', '在线生图'],
    url: 'https://www.toastai.com'
  },
  {
    id: 'wen-xiaobai',
    name: '问小白',
    logo: 'https://picsum.photos/seed/wenxiaobai/200/200',
    category: 'AI写作工具',
    tags: ['元石科技', 'DeepSeek', '智能助手'],
    url: 'https://www.wenxiaobai.com'
  },
  {
    id: 'ai-ppt',
    name: 'AiPPT',
    logo: 'https://picsum.photos/seed/aippt/200/200',
    category: 'AI办公工具',
    tags: ['AI生成', 'PPT工具', '办公效率'],
    url: 'https://www.aippt.com'
  },
  {
    id: 'mita-ai-search',
    name: '秘塔AI搜索',
    logo: 'https://picsum.photos/seed/mitaai/200/200',
    category: 'AI写作工具',
    tags: ['无广告', '精准搜索', 'AI搜索'],
    url: 'https://www.mitaaisearch.com'
  },
  {
    id: 'trae',
    name: 'Trae',
    logo: 'https://picsum.photos/seed/trae/200/200',
    category: 'AI写作工具',
    tags: ['字节跳动', '免费工具', 'Claude模型']
  },
  {
    id: 'duiyou-ai',
    name: '堆友AI',
    logo: 'https://picsum.photos/seed/duiyouai/200/200',
    category: 'AI图像工具',
    tags: ['阿里巴巴', '免费绘画', 'AI出图']
  },
  {
    id: 'meitu-design',
    name: '美图设计室',
    logo: 'https://picsum.photos/seed/meitudesign/200/200',
    category: 'AI图像工具',
    tags: ['美图公司', '图像创作', '设计平台']
  },
  {
    id: 'gaoding-ai-design',
    name: '稿定AI设计',
    logo: 'https://picsum.photos/seed/gaodingai/200/200',
    category: 'AI图像工具',
    tags: ['一站式设计', '创意平台', 'AI设计']
  },
  {
    id: 'office-coon',
    name: '办公小浣熊',
    logo: 'https://picsum.photos/seed/officecoon/200/200',
    category: 'AI办公工具',
    tags: ['数据分析', 'AI助手', '办公工具']
  },
  {
    id: 'huiwa',
    name: '绘蛙',
    logo: 'https://picsum.photos/seed/huiwa/200/200',
    category: 'AI图像工具',
    tags: ['电商营销', '商品图生成', '种草文案']
  },
  {
    id: 'kouzi-space',
    name: '扣子空间',
    logo: 'https://picsum.photos/seed/kouzispace/200/200',
    category: 'AI智能体',
    tags: ['免费开放', 'AI Agent', '专业服务']
  },
  {
    id: 'clacky-ai',
    name: 'Clacky AI',
    logo: 'https://picsum.photos/seed/clackyai/200/200',
    category: 'AI写作工具',
    tags: ['AI编程', 'Coding Studio', 'L3级']
  },
  {
    id: 'promptpilot',
    name: 'PromptPilot',
    logo: 'https://picsum.photos/seed/promptpilot/200/200',
    category: 'AI写作工具',
    tags: ['字节跳动', '提示词工具', 'AI解决方案']
  },
  {
    id: 'bimuyu',
    name: '笔目鱼',
    logo: 'https://picsum.photos/seed/bimuyu/200/200',
    category: 'AI写作工具',
    tags: ['英文论文', 'AI写作', '学术辅助']
  },
  {
    id: 'xiaolvjing',
    name: '小绿鲸',
    logo: 'https://picsum.photos/seed/xiaolvjing/200/200',
    category: 'AI写作工具',
    tags: ['英文文献', 'AI阅读', '学术工具']
  },
  {
    id: 'dia',
    name: 'Dia',
    logo: 'https://picsum.photos/seed/dia/200/200',
    category: 'AI智能体',
    tags: ['Arc团队', 'AI浏览器', '原生工具']
  },
  {
    id: 'coco',
    name: 'CoCo',
    logo: 'https://picsum.photos/seed/coco/200/200',
    category: 'AI智能体',
    tags: ['智谱AI', '企业级', '超级助手']
  },
  {
    id: 'xunfei-huiwen',
    name: '讯飞绘文',
    logo: 'https://picsum.photos/seed/xunfeihuiwen/200/200',
    category: 'AI写作工具',
    tags: ['科大讯飞', '免费写作', '原创内容']
  },
  {
    id: 'huoshan-writing',
    name: '火山写作',
    logo: 'https://picsum.photos/seed/huoshanwriting/200/200',
    category: 'AI写作工具',
    tags: ['字节跳动', '免费工具', '内容助手']
  },
  {
    id: 'huiwa-ai-video',
    name: '绘蛙AI视频',
    logo: 'https://picsum.photos/seed/huiwaaivideo/200/200',
    category: 'AI视频工具',
    tags: ['AI视频', '图生视频', '绘蛙工具']
  },
  {
    id: 'baiyimeng',
    name: '白日梦',
    logo: 'https://picsum.photos/seed/baiyimeng/200/200',
    category: 'AI视频工具',
    tags: ['视频创作', '长视频生成', 'AI平台']
  },
  {
    id: 'xunfei-huijing',
    name: '讯飞绘镜',
    logo: 'https://picsum.photos/seed/xunfeihuijing/200/200',
    category: 'AI视频工具',
    tags: ['科大讯飞', '短视频', 'AI创作']
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    logo: 'https://picsum.photos/seed/heygen/200/200',
    category: 'AI视频工具',
    tags: ['数字人', '视频创作', 'AI平台']
  },
  {
    id: 'sora',
    name: 'Sora',
    logo: 'https://picsum.photos/seed/sora/200/200',
    category: 'AI视频工具',
    tags: ['OpenAI', '视频生成', 'AI模型']
  }
]

const menuCategories = [
  { key: 'all', label: '全部工具', icon: 'fa-home' },
  { key: 'AI写作工具', label: 'AI写作工具', icon: 'fa-pen-fancy' },
  { key: 'AI图像工具', label: 'AI图像工具', icon: 'fa-image' },
  { key: 'AI视频工具', label: 'AI视频工具', icon: 'fa-video' },
  { key: 'AI办公工具', label: 'AI办公工具', icon: 'fa-briefcase' },
  { key: 'AI智能体', label: 'AI智能体', icon: 'fa-robot' }
]

const contentCategories = [
  { key: 'AI写作工具', headerIcon: 'fa-pen' },
  { key: 'AI图像工具', headerIcon: 'fa-image' },
  { key: 'AI视频工具', headerIcon: 'fa-video' },
  { key: 'AI办公工具', headerIcon: 'fa-briefcase' },
  { key: 'AI智能体', headerIcon: 'fa-robot' }
]

const searchText = ref('')
const currentCategory = ref('all')
const sectionRef = ref(null)

const toolsByCategory = computed(() => {
  const map = {}
  for (const c of contentCategories) map[c.key] = []
  for (const t of tools) {
    if (!map[t.category]) map[t.category] = []
    map[t.category].push(t)
  }
  return map
})

const commonTools = computed(() => tools.slice(0, 3))
const latestTools = computed(() => tools.slice(-3))

const searchResults = computed(() => {
  const q = searchText.value.trim().toLowerCase()
  if (!q) return []
  return tools.filter((t) => {
    const matchName = t.name.toLowerCase().includes(q)
    const matchCategory = t.category.toLowerCase().includes(q)
    const matchTags = (t.tags || []).some((tag) => String(tag).toLowerCase().includes(q))
    return matchName || matchCategory || matchTags
  })
})

const openTool = (tool) => {
  if (!tool?.url) return
  window.open(tool.url, '_blank', 'noopener,noreferrer')
}

const onCategoryClick = (key) => {
  currentCategory.value = key
  searchText.value = ''
  const el = sectionRef.value
  if (el) el.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.aibox-page {
  padding-top: 50px;
  background-color: #f5f7fa;
}

.aibox-main {
  display: flex;
  height: calc(100vh - 50px);
  background: #f5f7fa;
}

.aibox-aside {
  width: 240px;
  background: #fff;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
}

.aibox-section {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.aibox-aside h2 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
}

.aibox-aside ul {
  list-style: none;
}

.aibox-aside ul li {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin: 5px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
}

.aibox-aside ul li:hover {
  background: #f0f6ff;
}

.aibox-aside ul li.active {
  background: #75a3e1;
  color: white;
}

.aibox-aside ul li.active i {
  color: white;
}

.aibox-aside ul li i {
  margin-right: 10px;
  color: #75a3e1;
}

.search {
  margin-bottom: 30px;
}

.search h2 {
  margin-bottom: 15px;
  color: #333;
}

.search input {
  width: 100%;
  padding: 12px 20px;
  border: 2px solid #e6e8eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s;
}

.search input:focus {
  border-color: #75a3e1;
  outline: none;
}

.tools {
  margin-bottom: 40px;
  scroll-margin-top: 20px;
}

.tools h3,
.tools h4 {
  margin-bottom: 20px;
  color: #333;
  display: flex;
  align-items: center;
}

.tools h3 i,
.tools h4 i {
  margin-right: 10px;
  color: #75a3e1;
}

.tools ol {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  list-style: none;
}

.tools ol li {
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  cursor: pointer;
}

.tools ol li:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tools ol li img {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  margin-bottom: 12px;
}

.tools ol li .name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}

.tools ol li .dec {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.tools ol li .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tools ol li .tags span {
  padding: 4px 8px;
  background: #f0f6ff;
  color: #75a3e1;
  border-radius: 4px;
  font-size: 12px;
}

.search-results {
  display: none;
  margin-bottom: 40px;
}

.search-results.active {
  display: block;
}

.no-results {
  text-align: center;
  padding: 20px;
  color: #666;
  font-style: italic;
}

@media (max-width: 768px) {
  .aibox-main {
    flex-direction: column;
    height: auto;
    min-height: calc(100vh - 50px);
  }

  .aibox-aside {
    width: 100%;
  }

  .tools ol {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>
