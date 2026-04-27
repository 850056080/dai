<template>
  <div class="cases-container">
    <!-- Banner区域 -->
    <div class="banner-section">
      <img :src="withBase('img/cases_k_banner.png')" alt="项目展示" class="banner-image" />
    </div>

    <!-- 个人信息区域 -->
    <div class="profile-section">
      <div class="profile-header">
        <img :src="withBase('img/cases_k_all_pc_ui_myphoto.png')" alt="个人头像" class="profile-avatar" />
        <div class="profile-info">
          <h1 class="profile-name">Dom代宇航</h1>
          <p class="profile-title">上海 | 项目经理</p>
          <p class="profile-motto">以结果为导向，聚焦交付质量：从需求澄清到上线运营，全流程推进。</p>
          <div class="stats">
            <div class="stat-item">
              <span class="stat-label">项目数量：</span>
              <span class="stat-value">{{ statsTotal }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">PC端项目：</span>
              <span class="stat-value">{{ statsPC }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">移动端项目：</span>
              <span class="stat-value">{{ statsM }}</span>
            </div>
          </div>
        </div>
        <div class="profile-action">
          <button class="project-btn" type="button" @click="scrollToTypeTabs">项目展示</button>
        </div>
      </div>
    </div>

    <!-- 项目类型筛选（PC端） -->
    <div ref="typeTabsRef" class="type-tabs" aria-label="项目类型筛选">
      <div class="type-tabs__row">
        <button
          v-for="item in companyNavOptions"
          :key="item.key"
          type="button"
          class="type-tabs__item"
          :class="{ 'is-active': activeCompanyNav === item.key }"
          @click="scrollToCompany(item.key)"
        >
          {{ item.label }}
        </button>
      </div>
      <div class="type-tabs__row" aria-label="端和分类筛选">
        <button
          v-for="item in platformOptions"
          :key="item.key"
          type="button"
          class="type-tabs__item"
          :class="{ 'is-active': isPlatformSelected(item.key) }"
          @click="togglePlatform(item.key)"
        >
          {{ item.label }}
        </button>
        <span class="type-tabs__divider" aria-hidden="true">｜</span>
        <button
          v-for="item in typeOptions"
          :key="item.key"
          type="button"
          class="type-tabs__item"
          :class="{ 'is-active': isTypeSelected(item.key) }"
          @click="toggleType(item.key)"
        >
          {{ item.label }}
        </button>
      </div>
    </div>

    <!-- 项目展示 -->
    <div class="project-showcase">
      <div ref="showcaseTopRef"></div>

      <section
        v-for="section in companySections"
        :key="section.company"
        class="company-section"
        v-show="section.pcItems.length || section.mItems.length"
        :ref="(el) => setCompanySectionRef(section.company, el)"
      >
        <div class="company-section__title">{{ section.title }}</div>

        <div v-if="section.pcItems.length" class="company-section__block">
          <div class="project-row column2">
            <div v-for="item in section.pcItems" :key="item.name" class="project-item project-card">
              <img
                :src="withBase(`img/${item.img || FALLBACK_IMG}`)"
                :alt="item.name"
                class="project-image"
                loading="lazy"
                @click="openProjectModal(item)"
              />
              <span class="project-label">
                <a
                  v-if="item.url"
                  class="project-label__link"
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="打开项目链接"
                  @click.stop
                >
                  <i class="fa-solid fa-link project-label__icon" aria-hidden="true"></i>
                </a>
                <span class="project-label__text">{{ item.name }}</span>
              </span>
            </div>
          </div>
        </div>

        <div v-if="section.mItems.length" class="company-section__block">
          <div class="project-row column4">
            <div v-for="item in section.mItems" :key="item.name" class="project-item project-card">
              <img
                :src="withBase(`img/${item.img || FALLBACK_IMG}`)"
                :alt="item.name"
                class="project-image"
                loading="lazy"
                @click="openProjectModal(item)"
              />
              <span class="project-label">
                <a
                  v-if="item.url"
                  class="project-label__link"
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="打开项目链接"
                  @click.stop
                >
                  <i class="fa-solid fa-link project-label__icon" aria-hidden="true"></i>
                </a>
                <span class="project-label__text">{{ item.name }}</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 项目弹窗 -->
    <div v-if="isProjectModalOpen" class="img-modal" role="dialog" aria-modal="true" @click.self="closeProjectModal">
      <div class="img-modal__content">
        <div class="img-modal__header">
          <div class="img-modal__headerTitle" :title="currentProject?.name">{{ currentProject?.name }}</div>
          <button
            ref="closeButtonRef"
            class="img-modal__close"
            type="button"
            aria-label="关闭"
            @click="closeProjectModal"
          >
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
        <img class="img-modal__img" :src="currentProjectImg" :alt="currentProject?.name" />
        <div v-if="currentProject?.desc" class="project-modal__desc">{{ currentProject.desc }}</div>
        <div class="project-modal__actions">
          <a
            v-if="currentProject?.url"
            class="project-modal__btn"
            :href="currentProject.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            打开项目链接
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const baseUrl = import.meta.env.BASE_URL
const withBase = (path) => `${baseUrl}${path}`

const FALLBACK_IMG = 'cases_k_banner.png'
const typeTabsRef = ref(null)
const showcaseTopRef = ref(null)

const scrollToTypeTabs = () => {
  const el = typeTabsRef.value
  if (!el) return
  // 顶部有固定导航（50px）+ 给一点留白
  const top = el.getBoundingClientRect().top + window.scrollY - 60
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}

const getCompanyScrollOffset = () => {
  // 顶部固定导航（约 50px）+ 留白
  const base = 60
  // 公司按钮所在的 .type-tabs 是 sticky，会遮挡内容，滚动定位时需要额外减去它的高度
  const tabsHeight = typeTabsRef.value?.getBoundingClientRect()?.height ?? 0
  return base + tabsHeight
}

// ========== 筛选项 ==========
// 公司（用于导航滚动）
const companyNavOptions = [
  { key: 'all', label: '全部' },
  { key: 'yl', label: '上海炎雷公司' },
  { key: 'lg', label: '临港集团' },
  { key: 'rh', label: '上海仁海公司' },
  { key: 'hc', label: '慧聪集团' },
]

// 选中高亮：用于公司导航（不做筛选）
const activeCompanyNav = ref('all')

const companySectionRefs = ref({})

const setCompanySectionRef = (key, el) => {
  if (!el) return
  companySectionRefs.value[key] = el
}

const scrollToCompany = (key) => {
  activeCompanyNav.value = key

  // “全部”滚回项目展示顶部
  if (key === 'all') {
    const el = showcaseTopRef.value || typeTabsRef.value
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - getCompanyScrollOffset()
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
    return
  }

  const el = companySectionRefs.value[key]
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - getCompanyScrollOffset()
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}

// 分类（用于 type / platform 筛选：单选）
const platformOptions = [
  { key: 'all', label: '全部' },
  { key: 'pc', label: 'PC端' },
  { key: 'm', label: '移动端' },
]

const typeOptions = [
  { key: 'all', label: '全部' },
  { key: 'sys', label: '系统集成' },
  { key: 'bi', label: 'BI可视化' },
  { key: 'web', label: '企业网站' },
  { key: 'app', label: 'APP' },
  { key: 'h5', label: 'H5' },
  { key: 'mp', label: '小程序' },
]

const activePlatform = ref('all')
const activeType = ref('all')

const isPlatformSelected = (key) => activePlatform.value === key
const isTypeSelected = (key) => activeType.value === key
const togglePlatform = (key) => {
  activePlatform.value = key
}
const toggleType = (key) => {
  activeType.value = key
}

// ========== 页面主数据 ==========
// 结构：[{name,seq,img,url,company,type,platform,desc}]
// 你后续可以在这里手动补录/修改数据；保持字段固定，便于筛选与排序。
const pageMainData = [
  {
    name: '炎雷公司-工程管家快应用',
    seq: 11,
    img: 'cases_n_yl_pc_gc.jpg',
    url: 'https://yhjc.htpsoftai.com/#/',
    company: 'yl',
    type: 'sys',
    platform: 'pc',
    desc: '',
  },
  {
    name: '炎雷公司-工程管家快应用-管理后台',
    seq: 12,
    img: 'cases_n_yl_pc_bi_sdpl012.jpg',
    url: 'https://ontest.htpsoftai.com:58500/sdpl012/index.html',
    company: 'yl',
    type: 'bi',
    platform: 'pc',
    desc: '',
  },
  {
    name: '炎雷公司-工程管家-项目收支屏',
    seq: 13,
    img: 'cases_n_yl_pc_bi_sdpl013.jpg',
    url: 'https://ontest.htpsoftai.com:58500/sdpl013/index.html',
    company: 'yl',
    type: 'bi',
    platform: 'pc',
    desc: '',
  },
  {
    name: '炎雷公司-工程管家-项目展示屏',
    seq: 14,
    img: 'cases_n_yl_pc_bi_sdpl014.jpg',
    url: 'https://ontest.htpsoftai.com:58500/sdpl014/index.html',
    company: 'yl',
    type: 'bi',
    platform: 'pc',
    desc: '',
  },
  {
    name: '炎雷公司-工程管家-整体收支屏',
    seq: 15,
    img: 'cases_n_yl_pc_bi_sdpl015.jpg',
    url: 'https://ontest.htpsoftai.com:58500/sdpl015/index.html',
    company: 'yl',
    type: 'bi',
    platform: 'pc',
    desc: '',
  },
  {
    name: '炎雷公司-工程管家-生产工序进度屏',
    seq: 16,
    img: 'cases_n_yl_pc_bi_sdpl017.jpg',
    url: 'https://ontest.htpsoftai.com:58500/sdpl017/index.html',
    company: 'yl',
    type: 'bi',
    platform: 'pc',
    desc: '',
  },
  {
    name: '炎雷公司-广晟集团-安全生产屏',
    seq: 17,
    img: 'cases_n_yl_pc_bi_sdpl019.jpg',
    url: 'https://ontest.htpsoftai.com:58500/sdpl019/index.html',
    company: 'yl',
    type: 'bi',
    platform: 'pc',
    desc: '',
  },
  {
    name: '炎雷公司-知识库',
    seq: 21,
    img: 'cases_n_yl_m_h5_1.jpg',
    url: '',
    company: 'yl',
    type: 'h5',
    platform: 'm',
    desc: '',
  },
  {
    name: '炎雷公司-工程管家-移动端',
    seq: 22,
    img: 'cases_n_yl_m_h5_2.jpg',
    url: 'https://yhjc.htpsoftai.com/#/',
    company: 'yl',
    type: 'h5',
    platform: 'm',
    desc: '',
  },
  {
    name: '炎雷公司-广晟集团-移动端',
    seq: 23,
    img: 'cases_n_yl_m_h5_3.jpg',
    url: 'https://web1.sagdemo.biz/#/',
    company: 'yl',
    type: 'h5',
    platform: 'm',
    desc: '',
  },
  {
    name: '炎雷公司-诚就智库-移动端',
    seq: 24,
    img: 'cases_n_yl_m_h5_4.jpg',
    url: 'https://hkb.htpsoftai.com/#/',
    company: 'yl',
    type: 'h5',
    platform: 'm',
    desc: '',
  },
  {
    name: '炎雷公司-诚就智库-自定义海报',
    seq: 25,
    img: 'cases_n_yl_m_h5_5.jpg',
    url: 'https://ontest.htpsoftai.com:57500/',
    company: 'yl',
    type: 'h5',
    platform: 'm',
    desc: '',
  },
  {
    name: '临港集团-上海火车站排队预警屏',
    seq: 31,
    img: 'cases_n_rh_pc_all_lg1.jpg',
    url: '',
    company: 'lg',
    type: 'bi',
    platform: 'pc',
    desc: '',
  },
  {
    name: '临港集团-上海教委',
    seq: 32,
    img: 'cases_n_lg_pc_all_service-index.jpg',
    url: '',
    company: 'lg',
    type: 'all',
    platform: 'pc',
    desc: '',
  },
  {
    name: '临港集团-上海海洋大学',
    seq: 33,
    img: 'cases_n_lg_pc_sys_hydx1.jpg',
    url: '',
    company: 'lg',
    type: 'all',
    platform: 'pc',
    desc: '',
  },
  {
    name: '仁海公司-传恒羽毛球比赛预约系统',
    seq: 51,
    img: 'cases_n_rh_pc_all_l1.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'pc',
    desc: '',
  },
  {
    name: '仁海-巴斯夫官网',
    seq: 52,
    img: 'cases_n_rh_pc_all_l10.jpg',
    url: 'https://www.basf.com/cn/zh',
    company: 'rh',
    type: 'all',
    platform: 'pc',
    desc: '',
  },
  {
    name: '',
    seq: 53,
    img: 'cases_n_rh_pc_all_l2.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'pc',
    desc: '',
  },
  {
    name: '',
    seq: 54,
    img: 'cases_n_rh_pc_all_l3.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'pc',
    desc: '',
  },
  {
    name: '',
    seq: 55,
    img: 'cases_n_rh_pc_all_l4.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'pc',
    desc: '',
  },
  {
    name: '',
    seq: 56,
    img: 'cases_n_rh_pc_all_l5.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'pc',
    desc: '',
  },
  {
    name: '仁海-传恒房产拍卖小程序',
    seq: 57,
    img: 'cases_n_rh_pc_all_l7.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'pc',
    desc: '',
  },
  {
    name: '',
    seq: 58,
    img: 'cases_n_rh_pc_all_l8.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'pc',
    desc: '',
  },
  {
    name: '仁海-匠智堂书画艺术品拍卖小程序',
    seq: 59,
    img: 'cases_n_rh_pc_all_l9.jpg',
    url: 'https://www.lesu3d.com/',
    company: 'rh',
    type: 'all',
    platform: 'pc',
    desc: '',
  },
  {
    name: '仁海-传恒羽毛球课程预约系统',
    seq: 61,
    img: 'cases_n_rh_m_all_l11.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'm',
    desc: '',
  },
  {
    name: '',
    seq: 62,
    img: 'cases_n_rh_m_all_l6.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'm',
    desc: '',
  },
  {
    name: '仁海-传恒课程预约小程序',
    seq: 63,
    img: 'cases_n_rh_m_all_wechatimg327.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'm',
    desc: '',
  },
  {
    name: '',
    seq: 64,
    img: 'cases_n_rh_m_all_wechatimg328.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'm',
    desc: '',
  },
  {
    name: '仁海-湘南校友会',
    seq: 65,
    img: 'cases_n_rh_m_all_wechatimg329.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'm',
    desc: '',
  },
  {
    name: '仁海-品家甄选-社区家装小程序',
    seq: 66,
    img: 'cases_n_rh_m_all_wechatimg330.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'm',
    desc: '',
  },
  {
    name: '仁海-中外甄选-牛排礼盒商城小程序',
    seq: 67,
    img: 'cases_n_rh_m_all_wechatimg331.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'm',
    desc: '',
  },
  {
    name: '仁海-上海建工-温度监测小程序',
    seq: 68,
    img: 'cases_n_rh_m_all_wechatimg332.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'm',
    desc: '',
  },
  {
    name: '仁海-玄马-创业者俱乐部-活动路演',
    seq: 69,
    img: 'cases_n_rh_m_all_wechatimg333.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'm',
    desc: '',
  },
  {
    name: '仁海-美沃测评小程序',
    seq: 70,
    img: 'cases_n_rh_m_all_wechatimg334.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'm',
    desc: '',
  },
  {
    name: '仁海-爱在路上公益小程序',
    seq: 71,
    img: 'cases_n_rh_m_all_wechatimg335.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'm',
    desc: '',
  },
  {
    name: '仁海-爱在路上公益捐赠小程序',
    seq: 72,
    img: 'cases_n_rh_m_all_wechatimg336.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'm',
    desc: '',
  },
  {
    name: '仁海-富士胶片-故障排查小程序',
    seq: 73,
    img: 'cases_n_rh_m_all_wechatimg337.jpg',
    url: '',
    company: 'rh',
    type: 'all',
    platform: 'm',
    desc: '',
  }
]

const normalizedData = computed(() => {
  return pageMainData.map((raw) => {
    const seq = Number.isFinite(Number(raw?.seq)) ? Number(raw.seq) : 0
    const img = String(raw?.img || '').trim() || FALLBACK_IMG
    const name = String(raw?.name || '').trim() || img
    const company = String(raw?.company || 'all')
    const type = String(raw?.type || 'all')
    // platform 必须用于布局分组：只允许 pc/m，不合法则默认 pc
    const platform = raw?.platform === 'm' ? 'm' : 'pc'
    const url = String(raw?.url || '').trim()
    const desc = String(raw?.desc || '').trim()

    return { name, seq, img, url, company, type, platform, desc }
  })
})

// ========== 统计（基于主数据） ==========
const statsTotal = computed(() => normalizedData.value.length)
const statsPC = computed(() => normalizedData.value.filter((i) => i.platform === 'pc').length)
const statsM = computed(() => normalizedData.value.filter((i) => i.platform === 'm').length)

const sortedData = computed(() => [...normalizedData.value].sort((a, b) => (a?.seq ?? 0) - (b?.seq ?? 0)))

const filteredData = computed(() => {
  return sortedData.value.filter((item) => {
    // platform/type 允许 item 为 all 表示“通用/未归类”——在筛选时算匹配
    if (activePlatform.value !== 'all' && item.platform !== activePlatform.value && item.platform !== 'all') return false

    if (activeType.value !== 'all' && item.type !== activeType.value && item.type !== 'all') return false

    return true
  })
})

const companySections = computed(() => {
  const sectionOrder = companyNavOptions.filter((c) => c.key !== 'all')
  const sections = sectionOrder.map((c) => ({
    company: c.key,
    title: c.label,
    pcItems: [],
    mItems: [],
  }))

  // 可选：把 company=all 的项目放到“通用”区块（如果有）
  const misc = { company: 'misc', title: '通用', pcItems: [], mItems: [] }

  const map = new Map(sections.map((s) => [s.company, s]))

  for (const item of filteredData.value) {
    const target =
      item.company === 'all' ? misc : map.get(item.company) || misc
    if (item.platform === 'm') target.mItems.push(item)
    else target.pcItems.push(item)
  }

  // pc/m 内部按 seq 保持顺序（已 sortedData，但分组后再稳一次）
  for (const s of sections) {
    s.pcItems.sort((a, b) => (a.seq ?? 0) - (b.seq ?? 0))
    s.mItems.sort((a, b) => (a.seq ?? 0) - (b.seq ?? 0))
  }
  misc.pcItems.sort((a, b) => (a.seq ?? 0) - (b.seq ?? 0))
  misc.mItems.sort((a, b) => (a.seq ?? 0) - (b.seq ?? 0))

  const res = [...sections]
  if (misc.pcItems.length || misc.mItems.length) res.push(misc)
  return res
})

// ========== 弹窗 ==========
const isProjectModalOpen = ref(false)
const currentProject = ref(null)
const closeButtonRef = ref(null)

const currentProjectImg = computed(() => {
  const img = currentProject.value?.img || FALLBACK_IMG
  return img ? withBase(`img/${img}`) : ''
})

const openProjectModal = (item) => {
  currentProject.value = item
  isProjectModalOpen.value = true
}

const closeProjectModal = () => {
  isProjectModalOpen.value = false
  currentProject.value = null
}

const handleKeydown = (e) => {
  if (!isProjectModalOpen.value) return
  if (e.key === 'Escape') closeProjectModal()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))

// 弹窗打开时禁止背景滚动，并自动聚焦关闭按钮
watch(isProjectModalOpen, async (open) => {
  if (typeof document === 'undefined') return
  if (open) {
    // lock scroll
    document.body.dataset.prevOverflow = document.body.style.overflow || ''
    document.body.style.overflow = 'hidden'
    await nextTick()
    closeButtonRef.value?.focus?.()
  } else {
    const prev = document.body.dataset.prevOverflow ?? ''
    document.body.style.overflow = prev
    delete document.body.dataset.prevOverflow
  }
})

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  const prev = document.body.dataset.prevOverflow
  if (prev !== undefined) {
    document.body.style.overflow = prev
    delete document.body.dataset.prevOverflow
  }
})
</script>

<style scoped>
.cases-container {
  width: 100%;
  max-width: 3000px;
  margin: 0 auto;
  padding: 50px 0 40px;
  background-color: #f4f4f4;
  font-size: 14px;
  box-sizing: border-box;
}

.banner-section {
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.profile-section {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.type-tabs {
  position: sticky;
  top: 50px;
  z-index: 120;
  max-width: 1200px;
  margin: 0 auto 18px;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
}

.type-tabs__row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.type-tabs__row + .type-tabs__row {
  margin-top: 10px;
}

.type-tabs__divider {
  color: rgba(0, 0, 0, 0.25);
  padding: 6px 4px;
  white-space: nowrap;
}

.type-tabs__item {
  appearance: none;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
  color: #333;
  padding: 8px 12px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 13px;
  line-height: 1;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.type-tabs__item:hover {
  border-color: rgba(117, 163, 225, 0.6);
  transform: translateY(-1px);
}

.type-tabs__item.is-active {
  background: var(--primary-color, #75a3e1);
  border-color: var(--primary-color, #75a3e1);
  color: #fff;
  font-weight: 600;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile-action {
  flex: 0 0 auto;
}

.profile-action .project-btn {
  white-space: nowrap;
}

@media (max-width: 768px) {
  .cases-container {
    padding: 50px 12px 24px;
  }

  .banner-section {
    display: none;
  }

  .profile-header {
    flex-direction: row;
    align-items: center;
    text-align: left;
    gap: 12px;
  }

  .profile-section {
    padding: 0 16px;
    margin: 16px auto;
  }

  .profile-section .profile-avatar {
    width: 80px;
    height: 80px;
  }

  .profile-info {
    width: 100%;
    flex: 1;
    min-width: 0;
    padding: 10px 0;
  }
  .profile-info .profile-motto{
    margin: 0;
  }
  .profile-info .profile-title{
    margin: 0;
    line-height: 1.5;
  }
  .profile-info .stats,
  .profile-action {
    display: none;
  }

  .type-tabs {
    display: block;
    top: 50px;
    z-index: 120;
    width: 100%;
    max-width: 100%;
    margin: 0 auto 12px;
    padding: 10px 12px;
    border-radius: 10px;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
  }

  .type-tabs__row {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: 8px;
    scrollbar-width: none; /* Firefox */
  }

  .type-tabs__row::-webkit-scrollbar {
    display: none; /* Safari/Chrome */
  }

  .type-tabs__item {
    white-space: nowrap;
    font-size: 12px;
    padding: 7px 10px;
  }

  .profile-section .profile-name {
    font-size: 18px;
    margin: 0 0 2px;
  }

  .profile-title,
  .profile-motto {
    font-size: 12px;
    line-height: 1.4;
  }

  .profile-motto {
    margin: 0;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    width: 100%;
    margin: 12px 0 14px;
  }

  .stat-item {
    flex-direction: column;
    gap: 2px;
    padding: 10px 8px;
    background: #f6f7f9;
    border-radius: 10px;
  }

  .stat-label,
  .stat-value {
    font-size: 12px;
    color: #666;
    line-height: 1.2;
  }

  .stat-value {
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }

  .project-btn {
    width: 100%;
    padding: 10px 16px;
    border-radius: 10px;
  }
}

.profile-avatar {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 24px;
  color: #282828;
  margin: 10px 0 5px;
  font-weight: normal;
}

.profile-title {
  font-size: 14px;
  color: #999;
  margin: 0 0 5px;
  line-height: 2;
}

.profile-motto {
  font-size: 14px;
  color: #999;
  margin: 0 0 15px;
  line-height: 2;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

.stat-value {
  font-size: 14px;
  color: #666;
  font-weight: 600;
}

.project-btn {
  background-color: #75a3e1;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.project-btn:hover {
  background-color: #5f8fd6;
}

.project-showcase {
  max-width: 1200px;
  margin: 0 auto;
}

.company-section {
  width: 100%;
  display: block;
  clear: both;
}

.company-section + .company-section {
  margin-top: 18px;
  padding-top: 6px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.company-section__title {
  font-size: 14px;
  font-weight: 700;
  color: #111827;
  margin: 10px 2px 10px;
}

.company-section__block + .company-section__block {
  margin-top: 12px;
}

.project-image {
  cursor: zoom-in;
}

.img-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  box-sizing: border-box;
}

.img-modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
  color: #111827;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.img-modal__close i {
  font-size: 22px;
}

.img-modal__close:hover {
  background: #f3f4f6;
}

.img-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 40px;
}

.img-modal__headerTitle {
  flex: 1;
  min-width: 0;
  color: #111827;
  font-size: 18px;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-indent: 0.5em;
}

.img-modal__content {
  width: min(1200px, 100%);
  max-height: calc(100vh - 90px);
  position: relative;
  background: #fff;
  border-radius: 12px;
  padding: 14px 14px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.img-modal__img {
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 140px);
  object-fit: contain;
  border-radius: 10px;
  background: #f3f4f6;
}

.project-modal__desc {
  color: #374151;
  font-size: 13px;
  line-height: 1.6;
}

.project-modal__actions {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.project-modal__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 14px;
  border-radius: 5px;
  background: var(--primary-color, #75a3e1);
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
}

.project-modal__btn:hover {
  background: #5f8fd6;
}

.project-row {
  display: grid;
  gap: 15px;
  margin-bottom: 15px;
}

.project-item {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  padding: 10px 10px 0 10px;
}

/* grid 布局：更易维护 */
.column1 {
  grid-template-columns: 1fr;
}

.column2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.column4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

@media (max-width: 768px) {
  .column2 .project-item {
    width: auto;
  }

  .column4 .project-item {
    width: auto;
  }

  .project-row {
    gap: 12px;
    margin-bottom: 12px;
  }

  .column2 {
    grid-template-columns: 1fr;
  }

  .column4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-item {
    border-radius: 8px;
  }
}

.app-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.app-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s;
}

.project-item:hover .app-overlay {
  opacity: 1;
}

.project-item:active .app-overlay {
  opacity: 1;
}

@media (hover: none) and (pointer: coarse) {
  .app-overlay {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.35);
  }
}

.app-icon {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  object-fit: cover;
  max-width: 80%;
  max-height: 80%;
}

.project-link {
  display: block;
  padding: 10px;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  text-align: center;
}

.project-link:hover {
  text-decoration: underline;
}

.project-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  font-size: 14px;
  color: #333;
  text-align: center;
}

.project-label__text {
  line-height: 1.2;
}

.project-label__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex: 0 0 auto;
}

.project-label__link:focus-visible {
  outline: 2px solid rgba(117, 163, 225, 0.55);
  outline-offset: 2px;
  border-radius: 6px;
}

.project-label__icon {
  font-size: 14px;
  color: #fff;
  background: #75a3e1;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.project-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .app-icon {
    width: 96px;
    height: 96px;
  }

  .project-link,
  .project-label {
    padding: 10px 12px;
    font-size: 13px;
  }
}
</style>
