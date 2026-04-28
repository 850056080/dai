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

        <div v-if="section.pcItems.length || section.mItems.length" class="company-section__block">
          <template v-for="(group, sw) in getItemsGroupedByShowwidth([...section.pcItems, ...section.mItems])" :key="sw">
            <div :class="['project-row', sw]">
              <div v-for="item in group" :key="item.name" class="project-item project-card">
                <div class="project-image-wrapper">
                  <img
                    :src="withBase(`img/${item.img || FALLBACK_IMG}`)"
                    :alt="item.name"
                    class="project-image"
                    loading="lazy"
                    @click="openProjectModal(item)"
                  />
                  <div v-if="item.hover" class="project-hover-overlay" @click="openProjectModal(item)">
                    <img
                      :src="withBase(`img/${item.hover}`)"
                      :alt="`${item.name} 二维码`"
                      class="project-hover-qrcode"
                    />
                    <span class="project-hover-tip">点击查看大图</span>
                  </div>
                </div>
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
          </template>
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
        <div v-if="currentProject?.desc?.length" class="img-modal__desc-images">
          <img
            v-for="(descImg, index) in currentProject.desc"
            :key="index"
            class="img-modal__desc-img"
            :src="withBase(`img/${descImg}`)"
            :alt="`${currentProject.name} 详情图${index + 1}`"
          />
        </div>
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
import { useCasesPage } from './CasesPage'

const {
  withBase,
  FALLBACK_IMG,
  getShowWidthClass,
  getItemsGroupedByShowwidth,

  typeTabsRef,
  showcaseTopRef,
  closeButtonRef,

  statsTotal,
  statsPC,
  statsM,
  scrollToTypeTabs,

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

  companySections,

  isProjectModalOpen,
  currentProject,
  currentProjectImg,
  openProjectModal,
  closeProjectModal,
} = useCasesPage()
</script>

<style scoped src="./CasesPage.css"></style>

