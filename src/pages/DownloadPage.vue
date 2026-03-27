<template>
  <div class="download-container">
    <iframe 
      width="100%" 
      height="100%" 
      frameborder="0" 
      src="https://view.officeapps.live.com/op/embed.aspx?src=https://xujieweite2021.d2scdn.com/u/xujieweite2021/2025/06/30/ViPodZZNZ9co52o6mTt96c/d_pm_resume.docx"
    ></iframe>
    <div class="btn_box">
      <a href="https://xujieweite2021.d2scdn.com/u/xujieweite2021/2025/06/30/ViPodZZNZ9co52o6mTt96c/d_pm_resume.docx" target="_blank">
        <button class="btn1"><span>下载</span><br/><span>word版</span></button>
      </a>
      <a href="https://xujieweite2021.d2scdn.com/u/xujieweite2021/2025/06/30/mv3AEYKrqAvdKGRNV8dYTZ/d_pm_resume.pdf" target="_blank">
        <button class="btn2"><span>下载</span><br/><span>pdf版</span></button>
      </a>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.download-container {
  width: 100vw;
  height: calc(100vh - 50px);
  margin: 0;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

iframe {
  width: 95vw;
  height: calc(100vh - 75px);
  border: none;
}

.btn_box {
  position: fixed;
  top: 15%;
  right: 5%;
  border-radius: 100%;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  z-index: 100;
}

button {
  width: 70px;
  height: 70px;
  display: block;
  background-color: #007acf;
  color: white;
  border: none;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.3s;
}

button:hover {
  opacity: 0.8;
}

.btn1 {
  border-radius: 100% 100% 0 0;
}

.btn2 {
  border-radius: 0 0 100% 100%;
  margin-top: 1px;
}

a {
  color: white;
  text-decoration: none;
}
</style>
