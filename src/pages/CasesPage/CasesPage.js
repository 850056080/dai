import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import pageMainData from './CasesPage.json'

export function useCasesPage() {
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

  const getShowWidthClass = (showwidth) => {
    return ['entire', 'half', 'quarter'].includes(showwidth) ? showwidth : 'half'
  }

  const getItemsGroupedByShowwidth = (items) => {
    const groups = {}
    const order = ['entire', 'half', 'quarter']
    
    for (const item of items) {
      const sw = getShowWidthClass(item.showwidth)
      if (!groups[sw]) {
        groups[sw] = []
      }
      groups[sw].push(item)
    }
    
    const result = {}
    for (const sw of order) {
      if (groups[sw]) {
        result[sw] = groups[sw]
      }
    }
    return result
  }

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
  // 结构：[{name,seq,img,url,company,type,platform,desc,hover}]
  // 数据放在 CasesPage.json，便于你后续直接编辑。
  const normalizedData = computed(() => {
    return (pageMainData || []).map((raw) => {
      const seq = Number.isFinite(Number(raw?.seq)) ? Number(raw.seq) : 0
      const img = String(raw?.img || '').trim() || FALLBACK_IMG
      const name = String(raw?.name || '').trim() || img
      const company = String(raw?.company || 'all')
      const type = String(raw?.type || 'all')
      // platform 必须用于布局分组：只允许 pc/m，不合法则默认 pc
      const platform = raw?.platform === 'm' ? 'm' : 'pc'
      const url = String(raw?.url || '').trim()
      const hover = String(raw?.hover || '').trim()

      // 解析 desc 为图片数组（支持逗号分隔的多图）
      const descStr = String(raw?.desc || '').trim()
      const desc = descStr ? descStr.split(',').map((s) => s.trim()).filter((s) => s) : []
      
      // 显示宽度：entire(100%)、half(50%)、quarter(25%)，默认根据 platform 决定
      const showwidth = ['entire', 'half', 'quarter'].includes(raw?.showwidth) ? raw.showwidth : null

      return { name, seq, img, url, company, type, platform, desc, hover, showwidth }
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
      const target = item.company === 'all' ? misc : map.get(item.company) || misc
      if (item.platform === 'm') target.mItems.push(item)
      else target.pcItems.push(item)
    }

    // pc/m 内部按 seq 保持顺序
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

  return {
    // helper
    withBase,
    FALLBACK_IMG,
    getShowWidthClass,
    getItemsGroupedByShowwidth,

    // refs
    typeTabsRef,
    showcaseTopRef,
    closeButtonRef,

    // profile
    statsTotal,
    statsPC,
    statsM,
    scrollToTypeTabs,

    // tabs
    companyNavOptions,
    activeCompanyNav,
    scrollToCompany,
    setCompanySectionRef,

    platformOptions,
    typeOptions,
    isPlatformSelected,
    isTypeSelected,
    togglePlatform,
    toggleType,

    // showcase
    companySections,

    // modal
    isProjectModalOpen,
    currentProject,
    currentProjectImg,
    openProjectModal,
    closeProjectModal,
  }
}

