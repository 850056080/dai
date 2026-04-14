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
          <p class="profile-motto">no one is more powerful than me</p>
          <div class="stats">
            <div class="stat-item">
              <span class="stat-label">项目数量：</span>
              <span class="stat-value">35</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">移动端项目：</span>
              <span class="stat-value">16</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">OA项目：</span>
              <span class="stat-value">10</span>
            </div>
          </div>
          <button class="project-btn">项目展示</button>
        </div>
      </div>
    </div>

    <!-- 项目类型筛选（PC端） -->
    <div class="type-tabs" aria-label="项目类型筛选">
      <div class="type-tabs__row">
        <button
          v-for="item in companyTabs"
          :key="item"
          type="button"
          class="type-tabs__item"
          :class="{ 'is-active': activeCompany === item }"
          @click="selectCompany(item)"
        >
          {{ item }}
        </button>
      </div>
      <div class="type-tabs__row">
        <button
          v-for="item in categoryTabs"
          :key="item"
          type="button"
          class="type-tabs__item"
          :class="{ 'is-active': isCategoryActive(item) }"
          @click="toggleCategory(item)"
        >
          {{ item }}
        </button>
      </div>
    </div>

    <!-- 项目展示 -->
    <div class="project-showcase">
      <!-- 炎雷：大屏/BI 相关图片（两列） -->
      <div class="yanlei-yl">
        <div class="project-row column2">
          <div v-for="item in ylImages" :key="item.id" class="project-item">
            <span class="project-label">{{ item.title }}</span>
            <img
              :src="withBase(`img/${item.file}`)"
              :alt="item.title"
              class="project-image"
              loading="lazy"
              @click="openImageModal(withBase(`img/${item.file}`), item.title)"
            />
          </div>
        </div>
      </div>

      <div class="yanlei-image">
        <img
          :src="withBase('img/cases_n_rh_pc_all_lg1.jpg')"
          alt="案例展示"
          class="yanlei-image__img"
          loading="lazy"
          @click="openImageModal(withBase('img/cases_n_rh_pc_all_lg1.jpg'), '案例展示')"
        />
      </div>

      <div class="yanlei-image">
        <img
          :src="withBase('img/cases_n_rh_pc_all_service-index.jpg')"
          alt="案例展示"
          class="yanlei-image__img"
          loading="lazy"
          @click="openImageModal(withBase('img/cases_n_rh_pc_all_service-index.jpg'), '案例展示')"
        />
      </div>

      <div class="renhai">
        <!-- 4列展示 (原APP) -->
        <div class="project-row column4">
          <div class="project-item" v-for="(app, index) in apps" :key="index">
            <div class="app-image-wrapper">
              <img
                :src="app.image"
                :alt="app.title"
                class="project-image"
                loading="lazy"
                @click.stop="openImageModal(app.image, app.title)"
              />
              <div class="app-overlay">
                <img :src="app.icon" :alt="app.title" class="app-icon" />
              </div>
            </div>
          </div>
        </div>

        <!-- 2列展示 -->
        <div class="project-row column2">
          <div class="project-item">
            <a href="https://www.basf.com/cn/zh.html" target="_blank" class="project-link">巴斯夫网站 >></a>
            <img
              :src="withBase('img/cases_n_rh_pc_all_l10.jpg')"
              alt="巴斯夫网站"
              class="project-image"
              loading="lazy"
              @click="openImageModal(withBase('img/cases_n_rh_pc_all_l10.jpg'), '巴斯夫网站')"
            />
          </div>
          <div class="project-item">
            <a href="https://www.lesu3d.com/" target="_blank" class="project-link">乐塑3D >></a>
            <img
              :src="withBase('img/cases_n_rh_pc_all_l9.jpg')"
              alt="乐塑3D"
              class="project-image"
              loading="lazy"
              @click="openImageModal(withBase('img/cases_n_rh_pc_all_l9.jpg'), '乐塑3D')"
            />
          </div>
        </div>
        
        <div class="project-row column4">
          <div class="project-item">
            <span class="project-label">匠制堂手机网站</span>
            <img
              :src="withBase('img/cases_n_rh_pc_all_l6.jpg')"
              alt="匠制堂手机网站"
              class="project-image"
              loading="lazy"
              @click="openImageModal(withBase('img/cases_n_rh_pc_all_l6.jpg'), '匠制堂手机网站')"
            />
          </div>
          <div class="project-item">
            <span class="project-label">比赛报名手机网站</span>
            <img
              :src="withBase('img/cases_n_rh_pc_all_l11.jpg')"
              alt="比赛报名手机网站"
              class="project-image"
              loading="lazy"
              @click="openImageModal(withBase('img/cases_n_rh_pc_all_l11.jpg'), '比赛报名手机网站')"
            />
          </div>
        </div>

        <!-- 1列展示 -->
        <div class="project-row column1">
          <div class="project-item">
            <a href="https://erp.vectoroptics.cn/" target="_blank" class="project-link">旭洁威特 ERP >></a>
            <img
              :src="withBase('img/cases_n_rh_pc_all_l8.jpg')"
              alt="旭洁威特 ERP"
              class="project-image"
              loading="lazy"
              @click="openImageModal(withBase('img/cases_n_rh_pc_all_l8.jpg'), '旭洁威特 ERP')"
            />
          </div>
        </div>

        <div class="project-row column1">
          <div class="project-item">
            <a href="http://www.yyxx.danlu.net/" target="_blank" class="project-link">茱丽珠宝 CRM >></a>
            <img
              :src="withBase('img/cases_n_rh_pc_all_l7.jpg')"
              alt="茱丽珠宝 CRM"
              class="project-image"
              loading="lazy"
              @click="openImageModal(withBase('img/cases_n_rh_pc_all_l7.jpg'), '茱丽珠宝 CRM')"
            />
          </div>
        </div>

        <!-- 2列展示 -->
        <div class="project-row column2">
          <div class="project-item">
            <span class="project-label">房产信息1</span>
            <img
              :src="withBase('img/cases_n_rh_pc_all_l5.jpg')"
              alt="房产信息1"
              class="project-image"
              loading="lazy"
              @click="openImageModal(withBase('img/cases_n_rh_pc_all_l5.jpg'), '房产信息1')"
            />
          </div>
          <div class="project-item">
            <span class="project-label">房产信息2</span>
            <img
              :src="withBase('img/cases_n_rh_pc_all_l4.jpg')"
              alt="房产信息2"
              class="project-image"
              loading="lazy"
              @click="openImageModal(withBase('img/cases_n_rh_pc_all_l4.jpg'), '房产信息2')"
            />
          </div>
        </div>

        <div class="project-row column2">
          <div class="project-item">
            <span class="project-label">债权管理</span>
            <img
              :src="withBase('img/cases_n_rh_pc_all_l3.jpg')"
              alt="债权管理"
              class="project-image"
              loading="lazy"
              @click="openImageModal(withBase('img/cases_n_rh_pc_all_l3.jpg'), '债权管理')"
            />
          </div>
          <div class="project-item">
            <span class="project-label">培训排课</span>
            <img
              :src="withBase('img/cases_n_rh_pc_all_l2.jpg')"
              alt="培训排课"
              class="project-image"
              loading="lazy"
              @click="openImageModal(withBase('img/cases_n_rh_pc_all_l2.jpg'), '培训排课')"
            />
          </div>
        </div>

        <div class="project-row column2">
          <div class="project-item">
            <span class="project-label">比赛报名</span>
            <img
              :src="withBase('img/cases_n_rh_pc_all_l1.jpg')"
              alt="比赛报名"
              class="project-image"
              loading="lazy"
              @click="openImageModal(withBase('img/cases_n_rh_pc_all_l1.jpg'), '比赛报名')"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 图片预览弹窗 -->
    <div v-if="isImageModalOpen" class="img-modal" role="dialog" aria-modal="true" @click.self="closeImageModal">
      <div class="img-modal__content">
        <div class="img-modal__header">
          <div class="img-modal__headerTitle" :title="imageModalTitle">{{ imageModalTitle }}</div>
          <button class="img-modal__close" type="button" aria-label="关闭" @click="closeImageModal">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
        <img class="img-modal__img" :src="imageModalSrc" :alt="imageModalTitle" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const baseUrl = import.meta.env.BASE_URL
const withBase = (path) => `${baseUrl}${path}`

const isImageModalOpen = ref(false)
const imageModalSrc = ref('')
const imageModalTitle = ref('')

const openImageModal = (src, title = '') => {
  imageModalSrc.value = String(src || '')
  imageModalTitle.value = String(title || '')
  isImageModalOpen.value = true
}

const closeImageModal = () => {
  isImageModalOpen.value = false
  imageModalSrc.value = ''
  imageModalTitle.value = ''
}

const handleKeydown = (e) => {
  if (!isImageModalOpen.value) return
  if (e.key === 'Escape') closeImageModal()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))

const ylImages = [
  { id: 'sdpl019', title: '炎雷 BI - sdpl019', file: 'cases_n_yl_pc_bi_sdpl019.jpg' },
  { id: 'sdpl012', title: '炎雷 BI - sdpl012', file: 'cases_n_yl_pc_bi_sdpl012.jpg' },
  { id: 'sdpl013', title: '炎雷 BI - sdpl013', file: 'cases_n_yl_pc_bi_sdpl013.jpg' },
  { id: 'sdpl014', title: '炎雷 BI - sdpl014', file: 'cases_n_yl_pc_bi_sdpl014.jpg' },
  { id: 'sdpl015', title: '炎雷 BI - sdpl015', file: 'cases_n_yl_pc_bi_sdpl015.jpg' },
  { id: 'sdpl017', title: '炎雷 BI - sdpl017', file: 'cases_n_yl_pc_bi_sdpl017.jpg' },
]

// 一级标签（同级单选）
const companyTabs = ['全部', '上海炎雷公司', '临港集团', '上海仁海公司', '慧聪集团']
const activeCompany = ref(companyTabs[0])
const selectCompany = (name) => {
  activeCompany.value = name
}

// 二级标签（可多选；“全部”与其它互斥）
const categoryTabs = ['全部', 'PC端', '系统集成', 'BI可视化', '企业网站', '移动端', '小程序', 'H5', 'APP']
const activeCategories = ref(['全部'])

const isCategoryActive = (name) => activeCategories.value.includes(name)

const toggleCategory = (name) => {
  if (name === '全部') {
    activeCategories.value = ['全部']
    return
  }

  const set = new Set(activeCategories.value)
  set.delete('全部')
  if (set.has(name)) set.delete(name)
  else set.add(name)
  activeCategories.value = set.size ? Array.from(set) : ['全部']
}

const apps = [
  {
    title: 'APP项目1',
    image: withBase('img/cases_n_rh_m_all_wechatimg327.jpg'),
    icon: withBase('img/cases_n_rh_m_app_fmfjthcfignhifdkqlpxxminhjkf.png')
  },
  {
    title: 'APP项目2',
    image: withBase('img/cases_n_rh_m_all_wechatimg328.jpg'),
    icon: withBase('img/cases_n_rh_m_app_fu11tsp1gyqixessdhyxxdx-bkeg.png')
  },
  {
    title: 'APP项目3',
    image: withBase('img/cases_n_rh_m_all_wechatimg330.jpg'),
    icon: withBase('img/cases_n_rh_m_app_fl9wxzb-3iiip6vjwdq6rz8fv9bd.png')
  },
  {
    title: 'APP项目4',
    image: withBase('img/cases_n_rh_m_all_wechatimg329.jpg'),
    icon: withBase('img/cases_n_rh_m_app_fqppqwrfdlrmkpsubjulkfhwtc6d.png')
  },
  {
    title: 'APP项目5',
    image: withBase('img/cases_n_rh_m_all_wechatimg331.jpg'),
    icon: withBase('img/cases_n_rh_m_app_ftvop9mnozt52mjhi-4hxeon8lde.png')
  },
  {
    title: 'APP项目6',
    image: withBase('img/cases_n_rh_m_all_wechatimg332.jpg'),
    icon: withBase('img/cases_n_rh_m_app_fotopdh06zicusd4baq5xkgvxtok.png')
  },
  {
    title: 'APP项目7',
    image: withBase('img/cases_n_rh_m_all_wechatimg333.jpg'),
    icon: withBase('img/cases_n_rh_m_app_fhh6-k9s4avzulppochk0zj33hlq.png')
  },
  {
    title: 'APP项目8',
    image: withBase('img/cases_n_rh_m_all_wechatimg334.jpg'),
    icon: withBase('img/cases_n_rh_m_app_ftrsep18apw7az0a65kitunmhn-3.png')
  },
  {
    title: 'APP项目9',
    image: withBase('img/cases_n_rh_m_all_wechatimg335.jpg'),
    icon: withBase('img/cases_n_rh_m_app_fgnusr5uksyhwxtaly7btkpmznbr.png')
  },
  {
    title: 'APP项目10',
    image: withBase('img/cases_n_rh_m_all_wechatimg336.jpg'),
    icon: withBase('img/cases_n_rh_m_app_fgvdt0sx4gxsnsf-qjxkfmsiocgt.png')
  },
  {
    title: 'APP项目11',
    image: withBase('img/cases_n_rh_m_all_wechatimg337.jpg'),
    icon: withBase('img/cases_n_rh_m_app_fmydwnq7p-8vcuey0ousvfo-auos.png')
  }
]
</script>

<style scoped>
.cases-container {
  width: 100%;
  max-width: 3000px;
  margin: 0 auto;
  padding: 50px 0 40px;
  background-color: #f6f6f6;
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
  .profile-info .project-btn {
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

.yanlei-yl {
  margin-bottom: 15px;
}

.yanlei-image {
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
}

.yanlei-image__img {
  width: 100%;
  height: auto;
  display: block;
}

.project-image,
.yanlei-image__img {
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
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
  color: #111827;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

.project-row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
}

.project-item {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

/* 一列展示 (100%) */
.column1 .project-item {
  width: 100%;
  flex: 0 0 100%;
}

/* 两列展示 (每列 ~50%) */
.column2 .project-item {
  width: calc(50% - 7.5px);
  flex: 0 0 calc(50% - 7.5px);
}

/* 四列展示 (每列 ~25%) */
.column4 .project-item {
  width: calc(25% - 11.25px);
  flex: 0 0 calc(25% - 11.25px);
}

@media (max-width: 768px) {
  .yanlei-image {
    border-radius: 8px;
    margin-bottom: 12px;
  }

  .column2 .project-item {
    width: 100%;
    flex: 0 0 100%;
  }

  .column4 .project-item {
    width: calc(50% - 6px);
    flex: 0 0 calc(50% - 6px);
  }

  .project-row {
    gap: 12px;
    margin-bottom: 12px;
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
  display: block;
  padding: 10px;
  font-size: 14px;
  color: #333;
  text-align: center;
}

.project-image {
  width: 100%;
  height: auto;
  display: block;
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
