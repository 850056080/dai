<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">在线简历</router-link></li>
        <li><router-link to="/cases">项目案例</router-link></li>
        <li><router-link to="/download">简历下载</router-link></li>
        <li><router-link to="/workbench">开发工作台</router-link></li>
        <li><router-link to="/software">软件下载</router-link></li>
        <li><router-link to="/aibox">AI工具箱</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--primary-color, #75a3e1);
  z-index: 1000;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav ul li {
  padding: 0 15px;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
  line-height: 50px;
  display: block;
}

nav a:hover,
nav a.router-link-active {
  color: var(--accent-color, #ffde7c);
}
</style>
