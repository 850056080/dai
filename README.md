# dai（作品集 / 在线简历）

基于 Vue 3 + Vite 的静态站点，用于展示在线简历、项目案例，以及一些工具页（开发工作台、AI 工具箱、软件下载等）。项目默认面向 GitHub Pages 部署。

## 技术栈

- Vue 3（Composition API）
- Vue Router 4（Hash 路由）
- Vite（构建与开发服务器）
- GitHub Actions（自动构建并发布到 GitHub Pages）

相关入口文件：

- 应用入口：[main.js](file:///Users/albertdominic/Documents/yl/dai-main/src/main.js)
- 根组件：[App.vue](file:///Users/albertdominic/Documents/yl/dai-main/src/App.vue)
- 路由配置：[router/index.js](file:///Users/albertdominic/Documents/yl/dai-main/src/router/index.js)
- 构建配置：[vite.config.js](file:///Users/albertdominic/Documents/yl/dai-main/vite.config.js)
- Pages 部署工作流：[deploy.yml](file:///Users/albertdominic/Documents/yl/dai-main/.github/workflows/deploy.yml)

## 目录结构

```text
.
├─ public/                 # 纯静态资源（构建时原样拷贝）
│  ├─ img/                 # 图片资源（案例图/头像/二维码等）
│  ├─ resume.pdf           # 简历 PDF（供下载页预览/下载）
│  └─ resume.docx          # 简历 Word（供在线预览/下载）
├─ src/
│  ├─ components/          # 通用组件（Header）
│  ├─ pages/               # 路由页面
│  │  └─ CasesPage/        # 项目案例页组件拆分
│  │     ├─ CasesPage.vue  # 模板
│  │     ├─ CasesPage.js   # 逻辑（组合式函数）
│  │     ├─ CasesPage.css  # 样式
│  │     └─ CasesPage.json # 数据
│  ├─ router/              # 路由配置
│  └─ main.js              # 应用启动
├─ index.html
├─ package.json
└─ vite.config.js
```

说明：

- `dist/`、`docs/` 为构建产物目录，已在 [.gitignore](file:///Users/albertdominic/Documents/yl/dai-main/.gitignore) 中忽略，不应提交到仓库。
- 线上部署由 GitHub Actions 在服务器端构建并发布，不依赖本地提交构建产物。
- 项目案例页采用组件化拆分，模板、逻辑、样式、数据分离，便于维护。

## 本地开发

### 环境要求

- Node.js 20（工作流使用 Node 20）

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 本地构建

```bash
npm run build
```

构建产物默认输出到 `dist/`（仅用于本地预览/检查，仓库不提交）。

### 本地预览构建产物

```bash
npm run preview
```

## 部署（GitHub Pages）

### 关键点

- Vite base：项目配置为 `base: '/dai/'`，对应仓库名为 `dai` 的 GitHub Pages 子路径部署。见 [vite.config.js](file:///Users/albertdominic/Documents/yl/dai-main/vite.config.js#L1-L16)。
- 路由模式：使用 Hash 路由 `createWebHashHistory()`，适合 GitHub Pages 的静态托管环境。见 [router/index.js](file:///Users/albertdominic/Documents/yl/dai-main/src/router/index.js#L1-L52)。

### 自动部署流程

- 推送到 `main` 分支触发工作流
- Actions 执行：`npm install` → `npm run build` → 上传 `dist/` → 发布到 GitHub Pages

工作流文件：[deploy.yml](file:///Users/albertdominic/Documents/yl/dai-main/.github/workflows/deploy.yml)

### 仓库设置（一次性）

在 GitHub 仓库：

- Settings → Pages → Build and deployment → Source 选择 GitHub Actions

## 功能与页面说明

### 全局导航

导航组件：[Header.vue](file:///Users/albertdominic/Documents/yl/dai-main/src/components/Header.vue)

- PC 与移动端分别渲染两套结构，并使用不同前缀类名：`pc_*`、`m_*`
- 移动端支持：菜单展开/遮罩关闭/Esc 关闭

### 在线简历（/）

页面：[ResumePage.vue](file:///Users/albertdominic/Documents/yl/dai-main/src/pages/ResumePage.vue)

- 展示简历主体信息（侧栏 + 主体内容）
- 头像等图片来自 `public/img`（以 `/img/...` 方式引用）

### 项目案例（/cases）

页面：[CasesPage.vue](file:///Users/albertdominic/Documents/yl/dai-main/src/pages/CasesPage/CasesPage.vue)

**功能特性**：
- Banner/个人信息/项目展示
- 使用 `import.meta.env.BASE_URL` 拼接资源路径，适配 GitHub Pages 的 `base` 配置（示例：`withBase('img/cases_banner.png')`）
- **项目筛选**：按公司、平台（PC/移动端）、类型筛选
- **显示宽度控制**：支持 `showwidth` 属性控制展示宽度
  - `entire`：100% 宽度（单列）
  - `half`：50% 宽度（双列）
  - `quarter`：25% 宽度（四列）
- **二维码悬浮**：移动端项目支持 `hover` 属性配置二维码，鼠标悬停显示扫码入口
- **弹窗展示**：点击项目图片打开弹窗，支持多图详情展示（`desc` 属性支持逗号分隔多图）
- **响应式设计**：PC/移动端自适应布局

**数据结构**（[CasesPage.json](file:///Users/albertdominic/Documents/yl/dai-main/src/pages/CasesPage/CasesPage.json)）：
```json
{
  "name": "项目名称",
  "seq": 11,
  "img": "cases_xxx.jpg",
  "url": "https://example.com",
  "company": "yl",
  "type": "sys",
  "platform": "pc",
  "showwidth": "half",
  "desc": "detail1.jpg,detail2.jpg",
  "hover": "qrcode.png"
}
```

### 简历下载（/download）

页面：[DownloadPage.vue](file:///Users/albertdominic/Documents/yl/dai-main/src/pages/DownloadPage.vue)

- 提供 Word/PDF 下载按钮
- 预览策略：
  - 本地（localhost/127.0.0.1）默认使用 PDF 直接预览
  - 线上使用 Office Online iframe 预览 Word（依赖外网可访问 Office 预览服务）

### 开发工作台（/workbench）

页面：[WorkbenchPage.vue](file:///Users/albertdominic/Documents/yl/dai-main/src/pages/WorkbenchPage.vue)

- 按分类展示常用系统入口卡片（外链打开）
- 支持侧边栏展开/收起、分类筛选、明暗主题切换（使用 localStorage 存储主题）

### 软件下载（/software）

页面：[SoftwarePage.vue](file:///Users/albertdominic/Documents/yl/dai-main/src/pages/SoftwarePage.vue)

- 分类 Tabs + 页面滚动定位
- 点击软件卡片打开弹窗，展示可选版本与操作（下载/复制链接）

### AI 工具箱（/aibox）

页面：[AiboxPage.vue](file:///Users/albertdominic/Documents/yl/dai-main/src/pages/AiboxPage.vue)

- 工具导航分类 + 搜索
- 常用/最新/按类别展示工具卡片，点击跳转对应工具站点

### 英文大小写转换器（/bodyweb）

页面：[BodyWebPage.vue](file:///Users/albertdominic/Documents/yl/dai-main/src/pages/BodyWebPage.vue)

- 文本转大写/小写、复制结果、Toast 提示

## 静态资源规范

- 所有可部署资源应放在 `public/` 下（例如 `public/img`、`public/resume.pdf`、`public/resume.docx`）
- 页面中引用建议：
  - 纯根路径引用：`/img/xxx.png`（适合 Hash 路由 + base）
  - 或在需要兼容 `base` 时使用 `import.meta.env.BASE_URL` 拼接（项目案例页已采用）

## 常见问题

### 为什么仓库里不提交 dist/docs？

`dist/` 属于构建产物；GitHub Pages 已通过 Actions 自动构建与发布，提交构建产物会导致仓库体积膨胀且容易产生重复资源。当前策略是“只提交源码 + public 静态资源”。见 [.gitignore](file:///Users/albertdominic/Documents/yl/dai-main/.gitignore)。

