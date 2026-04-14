<template>
  <div class="resume-container">
    <aside class="sidebar">
      <figure>
        <img :src="withBase('img/cases_k_all_pc_ui_resume-avatar.jpg')" width="100%" alt="代宇航" />
      </figure>
      <h1>代宇航</h1>
      <p style="margin-bottom: 20px; font-size: 1.1rem;">资深项目经理</p>

      <div class="info-item">
        <i>📞</i>
        <span>18601748001</span>
      </div>
      <div class="info-item">
        <i>💬</i>
        <span>13898184863 (微信)</span>
      </div>
      <div class="info-item">
        <i>📧</i>
        <span>850056080@qq.com</span>
      </div>
      <div class="info-item">
        <i>📅</i>
        <span>31岁 | 9年项目管理经验</span>
      </div>
      <div class="info-item">
        <i>📍</i>
        <span>期望城市：上海</span>
      </div>

      <div style="margin-top: 30px;">
        <h3>求职意向</h3>
        <p style="font-size: 1.2rem; font-weight: 600; color: white;">UI项目经理</p>
        <p style="margin-top: 10px; background-color: rgba(255, 255, 255, 0.2); padding: 8px 15px; border-radius: 5px;">
          期望薪资：<span style="font-weight: bold; color: var(--accent-color, #ffde7c);">10-15K</span>
        </p>
      </div>

      <div style="margin-top: 30px;">
        <h3>核心优势</h3>
        <ul style="list-style-type: none; margin-left: 0;">
          <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
            <span style="position: absolute; left: 0; color: var(--accent-color, #ffde7c);">•</span>
            全流程项目管理经验，成功交付30+项目
          </li>
          <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
            <span style="position: absolute; left: 0; color: var(--accent-color, #ffde7c);">•</span>
            精通敏捷开发与瀑布模型，跨团队协作专家
          </li>
          <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
            <span style="position: absolute; left: 0; color: var(--accent-color, #ffde7c);">•</span>
            兼具UI设计能力与前端开发技术栈
          </li>
          <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
            <span style="position: absolute; left: 0; color: var(--accent-color, #ffde7c);">•</span>
            参与系统运维项目50+，快速响应需求迭代
          </li>
        </ul>
      </div>
    </aside>

    <main class="main-content">
      <h2>个人简介</h2>
      <p>5年资深集成项目管理经验 + 4年UI/UE产品经理经验，聚焦数字化产品全生命周期管理，深谙从需求解构到商业化落地的全链条闭环逻辑。擅长以用户体验为核心驱动，统筹设计、技术、测试多维度资源，构建跨团队协同机制，实现项目交付效率与质量的双重保障。</p>

      <h2>个人能力</h2>
      <div class="skills-list">
        <span class="tag">项目全流程管理</span>
        <span class="tag">敏捷开发(Scrum/XP)</span>
        <span class="tag">瀑布模型</span>
        <span class="tag">需求分析与功能设计</span>
        <span class="tag">跨团队协调</span>
        <span class="tag">Jira/Confluence</span>
        <span class="tag">蓝湖/Axure/XD</span>
        <span class="tag">UI/UX设计</span>
        <span class="tag">Figma/Sketch</span>
        <span class="tag">HTML5/CSS3/jsES6+</span>
        <span class="tag">Vue3 + Vite + nodejs</span>
        <span class="tag">Photoshop/Illustrator</span>
      </div>

      <h2>工作经历</h2>

      <div class="experience">
        <div class="position-date">
          <div class="position">项目服务工程师</div>
          <div class="date">2024.01-至今</div>
        </div>
        <div class="company">临港集团 - 临港信息公司</div>
        <p>负责集团核心系统的用户需求和调研升级迭代服务，协调用户与供应商需求，提供专业解决方案。</p>
        <ul class="achievements">
          <li>管理资产管理系统、投资管理系统等5大核心系统的运维工作</li>
          <li>成功支持投资系统2.0割接验收，确保系统无重大事故发生</li>
          <li>提交9次更新迭代方案并完成测试，处理用户需求200余次</li>
          <li>完成2次平台间数据迁移，零失误率</li>
          <li>主导上海火车站、上海海洋大学等外部项目的升级迭代</li>
        </ul>
      </div>

      <div class="experience">
        <div class="position-date">
          <div class="position">项目经理/UI</div>
          <div class="date">2020.04-2024.01</div>
        </div>
        <div class="company">上海仁海网络科技有限公司</div>
        <p>全面负责项目对接、需求分析、方案制定与项目管理，推动内部项目管理系统建设。</p>
        <ul class="achievements">
          <li>4年间成功交付6个大型项目、20个中小型项目，年度交付量增长12%</li>
          <li>主导开发富士胶片、中龙安保等12个APP项目</li>
          <li>完成旭洁威特ERP系统、钛虎机器人ERP系统等企业级应用</li>
          <li>设计开发巴斯夫、乐塑3D等10+企业官网及H5营销页面</li>
          <li>建立实时项目进度监控体系，提升团队协作效率20%</li>
        </ul>
      </div>

      <div class="experience">
        <div class="position-date">
          <div class="position">UI设计师/产品经理</div>
          <div class="date">2016.08-2020.04</div>
        </div>
        <div class="company">慧聪集团</div>
        <p>负责B端大客户的活动营销页面设计与开发，兼顾产品经理职责进行需求分析。</p>
        <ul class="achievements">
          <li>设计开发B端大客户活动营销、会员及防伪追溯页面</li>
          <li>主导异业联盟平台专场活动页面的设计与开发(panpass.com)</li>
          <li>负责公司广告策划部官网的设计、开发、SEO与维护</li>
          <li>完成资讯门户网站改版、CRM后台模块改版等系统优化项目</li>
          <li>通过精准设计为目标客户成功引流，实现营销转化目标</li>
        </ul>
      </div>

      <h2>近期项目经历</h2>
      <div class="project">
        <h3>资产管理系统</h3>
        <p>主导集团业管一体化系统升级割接全流程，通过供应商团队与业务部门的深度协同，构建标准化验收体系</p>
        <p><strong>成果：</strong>实现审批流程 100% 数字化闭环管理，推动业务处理效率提升，系统上线首月故障率控制在 0.3% 以内</p>
      </div>

      <div class="project">
        <h3>投资管理系统2.0升级迭代</h3>
        <p>负责集团核心投资管理系统的升级迭代，协调开发团队与业务部门，确保系统平滑过渡。</p>
        <p><strong>成果：</strong>成功完成系统割接验收，实现投资流程数字化管理，提升业务处理效率10%。</p>
      </div>

      <div class="project">
        <h3>上海火车站智慧运营管理平台</h3>
        <p>主导智慧车站管理平台的需求分析与项目管理，对接车站运营方与技术团队。</p>
        <p><strong>成果：</strong>实现车站设备智能监控、客流分析等功能，为智慧车站建设奠定基础。</p>
      </div>
      <div class="project">
        <h3>上海教委协同管平台</h3>
        <p>项目描述</p>
        <p><strong>成果：</strong>工作内容</p>
      </div>

      <div class="project">
        <h3>中国极地研究中心</h3>
        <p>项目描述</p>
        <p><strong>成果：</strong>工作内容</p>
      </div>

      <div class="project">
        <h3>旭洁威特 Vector Optics ERP - <a href="https://erp.vectoroptics.cn/" target="_blank">https://erp.vectoroptics.cn/</a></h3>
        <p>项目描述</p>
        <p><strong>成果：</strong>工作内容</p>
      </div>
      <div class="project">
        <h3>富士胶片工单分发系统</h3>
        <p>项目描述</p>
        <p><strong>成果：</strong>工作内容</p>
      </div>
      <div class="project">
        <h3>中龙安保APP</h3>
        <p>项目描述</p>
        <p><strong>成果：</strong>工作内容</p>
      </div>
      <div class="project">
        <h3>传恒债权管理</h3>
        <p>项目描述</p>
        <p><strong>成果：</strong>工作内容</p>
      </div>
      <div class="project">
        <a href="https://www.lesu3d.com/" target="_blank">
          <h3>乐塑3D企业官网 https://www.lesu3d.com/</h3>
          <p>负责官网的UI设计与项目管理，打造3D打印行业领先的品牌形象。</p>
          <p><strong>成果：</strong>网站访问量提升60%，转化率提高35%，获得客户高度认可。</p>
        </a>
      </div>

      <h2>教育背景</h2>
      <div class="education">
        <div class="edu-year">2019-2023</div>
        <div class="edu-info">
          <h3>北京师范大学</h3>
          <p>心理学 本科</p>
          <p>辅修用户体验设计，具备心理学与设计学交叉背景，擅长用户需求分析与行为研究。</p>
        </div>
      </div>

      <div class="education">
        <div class="edu-year">2010-2014</div>
        <div class="edu-info">
          <h3>东北大学</h3>
          <p>计算机科学与技术 大专</p>
          <p>系统学习计算机基础与软件开发，为技术型项目管理奠定基础。</p>
        </div>
      </div>

      <h2>技术能力详情</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 20px;">
        <div style="flex: 1; min-width: 300px;">
          <h3>项目管理核心技能</h3>
          <ul class="achievements" style="margin-left: 0;">
            <li><strong>方法论与流程把控：</strong>精通敏捷开发(Scrum/XP)、瀑布模型，全流程管理经验</li>
            <li><strong>工具应用：</strong>擅长用Jira/Confluence/Trello进行任务拆解与进度追踪</li>
            <li><strong>资源与风险管控：</strong>熟练协调多团队资源，通过SWOT分析预判技术风险</li>
            <li><strong>跨团队沟通：</strong>具备产品思维，确保UI设计与技术实现无缝衔接</li>
          </ul>
        </div>

        <div style="flex: 1; min-width: 300px;">
          <h3>开发技术栈</h3>
          <ul class="achievements" style="margin-left: 0;">
            <li><strong>前端开发：</strong>精通HTML5/CSS3/JavaScript(ES6+)，熟练运用Flexbox</li>
            <li><strong>框架与工具：</strong>Vue 3 + Vite、uni-app多端适配、TypeScript</li>
            <li><strong>后端能力：</strong>Node.js基础、SQL语句编写与数据库操作</li>
            <li><strong>AI辅助开发：</strong>掌握CodeBuddy、Cursor等AI工具提升开发效率</li>
          </ul>
        </div>

        <div style="flex: 1; min-width: 300px;">
          <h3>UI/UX设计能力</h3>
          <ul class="achievements" style="margin-left: 0;">
            <li><strong>设计工具：</strong>精通Figma/Sketch/Adobe XD，熟练使用蓝湖/墨刀</li>
            <li><strong>视觉设计：</strong>Photoshop、Illustrator图形设计与处理能力</li>
            <li><strong>全流程整合：</strong>兼具项目经理与设计师视角，把控视觉还原度</li>
            <li><strong>交互设计：</strong>能用前端技术实现高保真交互效果</li>
          </ul>
        </div>
      </div>

      <div style="margin-top: 30px; text-align: center;">
        <a href="https://lanhuapp.com/link/#/invite?sid=lx0i7uF8" class="download-btn" target="_blank">
          查看蓝湖项目分享
        </a>
        <a href="http://www.meigong12.danlu.net/app-treatment/hospital.html" class="download-btn" style="margin-left: 15px;" target="_blank">
          查看更多项目详情
        </a>
      </div>
    </main>
  </div>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL
const withBase = (path) => `${baseUrl}${path}`
</script>

<style scoped>
.resume-container {
  max-width: 1000px;
  margin: 80px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color, #fff);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
}

@media (min-width: 768px) {
  .resume-container {
    flex-direction: row;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  }
}

.sidebar {
  flex: 0 0 300px;
  background-color: var(--primary-color, #75a3e1);
  color: white;
  padding: 30px;
  margin-bottom: 20px;
  position: sticky;
  top: 70px;
  max-height: calc(100vh - 70px);
  overflow-y: auto;
  align-self: flex-start;
}

@media (min-width: 768px) {
  .sidebar {
    margin-bottom: 0;
    margin-right: 20px;
  }
}

.sidebar figure {
  padding: 20% 45% 10% 0;
}

.sidebar figure img {
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
}

.sidebar h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.sidebar h3 {
  font-size: 1.2rem;
  margin: 15px 0 10px;
  color: white;
}

.info-item {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}

.info-item i {
  width: 25px;
  text-align: center;
  margin-right: 10px;
}

.main-content {
  flex: 1;
  padding: 30px;
}

.main-content h2 {
  font-size: 1.5rem;
  margin: 25px 0 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-color, #75a3e1);
  color: var(--primary-color, #75a3e1);
}

.main-content h3 {
  font-size: 1.2rem;
  margin: 15px 0 10px;
  color: white;
}

.main-content p {
  margin-bottom: 15px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.tag {
  display: inline-block;
  background-color: var(--light-bg, #f8f9fa);
  color: var(--primary-color, #75a3e1);
  padding: 4px 10px;
  border: 1px solid var(--primary-color, #75a3e1);
  border-radius: 15px;
  font-size: 0.85rem;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
}

.experience {
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border-color, #eaeaea);
}

.experience:last-child {
  border-bottom: none;
}

.position-date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.position {
  font-weight: 600;
  color: var(--secondary-color, #4285f4);
}

.date {
  color: var(--light-text, #666);
  font-size: 0.9rem;
}

.company {
  font-weight: 600;
  margin-bottom: 5px;
}

.achievements {
  list-style-type: none;
  margin-left: 20px;
  margin-top: 10px;
}

.achievements li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 8px;
}

.achievements li:before {
  content: "•";
  color: var(--accent-color, #ffde7c);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.project {
  margin-bottom: 15px;
  padding: 15px 15px 5px;
  background-color: var(--light-bg, #f8f9fa);
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.project:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.project h3 {
  color: #0d62d0;
  margin: 0 0 10px 0;
}

.project a {
  color: #4285f4;
  text-decoration: none;
}

.project a:hover {
  text-decoration: underline;
}

.education {
  display: flex;
  margin-bottom: 15px;
}

.edu-year {
  flex: 0 0 120px;
  color: var(--light-text, #666);
  font-size: 0.9rem;
}

.edu-info {
  flex: 1;
}

.edu-info h3 {
  margin: 0 0 5px;
  color: #333;
}

.edu-info p {
  margin: 5px 0;
  color: #666;
}

.download-btn {
  display: inline-block;
  background-color: var(--primary-color, #75a3e1);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.download-btn:hover {
  background-color: #0d62d0;
}

@media (max-width: 768px) {
  .resume-container {
    flex-direction: column;
    margin: 80px 20px 40px;
  }

  .sidebar {
    flex: none;
    position: static;
    max-height: none;
    overflow-y: visible;
  }

  .main-content {
    padding: 20px;
  }

  .education {
    flex-direction: column;
  }

  .edu-year {
    flex: none;
    margin-bottom: 10px;
  }
}
</style>
