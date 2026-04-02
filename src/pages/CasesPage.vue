<template>
  <div class="cases-container">
    <!-- Banner区域 -->
    <div class="banner-section">
      <img :src="withBase('img/cases_banner.png')" alt="项目展示" class="banner-image" />
    </div>

    <!-- 个人信息区域 -->
    <div class="profile-section">
      <div class="profile-header">
        <img :src="withBase('img/cases_myphoto.png')" alt="个人头像" class="profile-avatar" />
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

    <!-- 项目展示 -->
    <div class="project-showcase">
      <div class="yanlei">
        <iframe
          class="yanlei-frame"
          src="https://ontest.htpsoftai.com:58500/sdpl019/index.html"
          title="平安班组监控中心"
          loading="lazy"
        ></iframe>
      </div>

      <div class="yanlei">
        <iframe
          class="yanlei-frame"
          src="https://ontest.htpsoftai.com:58500/sdpl012/index.html"
          title="AI驱动-数智管理大屏"
          loading="lazy"
        ></iframe>
      </div>

      <div class="yanlei-image">
        <img :src="withBase('img/cases_lg1.jpg')" alt="案例展示" class="yanlei-image__img" />
      </div>

      <div class="yanlei-image">
        <img :src="withBase('img/cases_service_index.jpg')" alt="案例展示" class="yanlei-image__img" />
      </div>

      <div class="renhai">
        <!-- 4列展示 (原APP) -->
        <div class="project-row column4">
          <div class="project-item" v-for="(app, index) in apps" :key="index">
            <div class="app-image-wrapper">
              <img :src="app.image" :alt="app.title" class="project-image" />
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
            <img :src="withBase('img/cases_l10.jpg')" alt="巴斯夫网站" class="project-image" />
          </div>
          <div class="project-item">
            <a href="https://www.lesu3d.com/" target="_blank" class="project-link">乐塑3D >></a>
            <img :src="withBase('img/cases_l9.jpg')" alt="乐塑3D" class="project-image" />
          </div>
        </div>
        
        <div class="project-row column4">
          <div class="project-item">
            <span class="project-label">匠制堂手机网站</span>
            <img :src="withBase('img/cases_l6.jpg')" alt="匠制堂手机网站" class="project-image" />
          </div>
          <div class="project-item">
            <span class="project-label">比赛报名手机网站</span>
            <img :src="withBase('img/cases_l11.jpg')" alt="比赛报名手机网站" class="project-image" />
          </div>
        </div>

        <!-- 1列展示 -->
        <div class="project-row column1">
          <div class="project-item">
            <a href="https://erp.vectoroptics.cn/" target="_blank" class="project-link">旭洁威特 ERP >></a>
            <img :src="withBase('img/cases_l8.jpg')" alt="旭洁威特 ERP" class="project-image" />
          </div>
        </div>

        <div class="project-row column1">
          <div class="project-item">
            <a href="http://www.yyxx.danlu.net/" target="_blank" class="project-link">茱丽珠宝 CRM >></a>
            <img :src="withBase('img/cases_l7.jpg')" alt="茱丽珠宝 CRM" class="project-image" />
          </div>
        </div>

        <!-- 2列展示 -->
        <div class="project-row column2">
          <div class="project-item">
            <span class="project-label">房产信息1</span>
            <img :src="withBase('img/cases_l5.jpg')" alt="房产信息1" class="project-image" />
          </div>
          <div class="project-item">
            <span class="project-label">房产信息2</span>
            <img :src="withBase('img/cases_l4.jpg')" alt="房产信息2" class="project-image" />
          </div>
        </div>

        <div class="project-row column2">
          <div class="project-item">
            <span class="project-label">债权管理</span>
            <img :src="withBase('img/cases_l3.jpg')" alt="债权管理" class="project-image" />
          </div>
          <div class="project-item">
            <span class="project-label">培训排课</span>
            <img :src="withBase('img/cases_l2.jpg')" alt="培训排课" class="project-image" />
          </div>
        </div>

        <div class="project-row column2">
          <div class="project-item">
            <span class="project-label">比赛报名</span>
            <img :src="withBase('img/cases_l1.jpg')" alt="比赛报名" class="project-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL
const withBase = (path) => `${baseUrl}${path}`

const apps = [
  {
    title: 'APP项目1',
    image: withBase('img/cases_WechatIMG327.jpg'),
    icon: withBase('img/cases_FmFJTHCfigNHIFdkqlpxxmInhJKF.png')
  },
  {
    title: 'APP项目2',
    image: withBase('img/cases_WechatIMG328.jpg'),
    icon: withBase('img/cases_Fu11TsP1GYQiXessdhyxxDx-BkEg.png')
  },
  {
    title: 'APP项目3',
    image: withBase('img/cases_WechatIMG330.jpg'),
    icon: withBase('img/cases_Fl9wxzb-3iIiP6VjWdQ6rZ8fV9bD.png')
  },
  {
    title: 'APP项目4',
    image: withBase('img/cases_WechatIMG329.jpg'),
    icon: withBase('img/cases_FqppqwrfdlrMKPsubjULKfHwtc6D.png')
  },
  {
    title: 'APP项目5',
    image: withBase('img/cases_WechatIMG331.jpg'),
    icon: withBase('img/cases_FtVOp9mNOzT52MJhI_4hXeon8LdE.png')
  },
  {
    title: 'APP项目6',
    image: withBase('img/cases_WechatIMG332.jpg'),
    icon: withBase('img/cases_FotoPDH06zIcUsd4baQ5xKGvXtOK.png')
  },
  {
    title: 'APP项目7',
    image: withBase('img/cases_WechatIMG333.jpg'),
    icon: withBase('img/cases_FhH6-k9S4avZULpPoCHk0zJ33hlQ.png')
  },
  {
    title: 'APP项目8',
    image: withBase('img/cases_WechatIMG334.jpg'),
    icon: withBase('img/cases_FtrsEP18ApW7AZ0a65KituNmHN_3.png')
  },
  {
    title: 'APP项目9',
    image: withBase('img/cases_WechatIMG335.jpg'),
    icon: withBase('img/cases_FgNUsr5uKSyHWXtaLy7BTKpmZnbr.png')
  },
  {
    title: 'APP项目10',
    image: withBase('img/cases_WechatIMG336.jpg'),
    icon: withBase('img/cases_FgVDt0Sx4gxSnsf_QJxKfMsiOcgt.png')
  },
  {
    title: 'APP项目11',
    image: withBase('img/cases_WechatIMG337.jpg'),
    icon: withBase('img/cases_FmyDwNQ7p-8vcuEy0OuSvfO_AUos.png')
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
  background-color: #17a2b8;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.project-btn:hover {
  background-color: #138496;
}

.project-showcase {
  max-width: 1200px;
  margin: 0 auto;
}

.yanlei {
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
}

.yanlei-frame {
  width: 100vw;
  height: 62vw;
  border: 0;
  display: block;
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
  .yanlei {
    border-radius: 8px;
    margin-bottom: 12px;
  }

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
