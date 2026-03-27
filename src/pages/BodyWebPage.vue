<template>
  <div class="bodyweb-page">
    <div class="container">
      <h1>英文大小写 转换器</h1>
      <textarea v-model="inputText" placeholder="Enter text here..."></textarea>
      <div class="buttons">
        <button type="button" @click="toUpper">To UPPERCASE</button>
        <button type="button" @click="toLower">to lowercase</button>
        <button type="button" @click="copyText">Copy</button>
      </div>
      <div class="result">{{ resultText }}</div>
    </div>
    <div v-if="toastVisible" class="toast">{{ toastText }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputText = ref('')
const resultText = ref('')
const toastVisible = ref(false)
const toastText = ref('')

const showToast = (text) => {
  toastText.value = text
  toastVisible.value = true
  window.setTimeout(() => {
    toastVisible.value = false
  }, 2000)
}

const toUpper = () => {
  resultText.value = inputText.value.toUpperCase()
}

const toLower = () => {
  resultText.value = inputText.value.toLowerCase()
}

const copyText = async () => {
  const text = resultText.value
  if (!text) {
    showToast('没有可复制内容')
    return
  }

  try {
    await navigator.clipboard.writeText(text)
    showToast('已复制到剪贴板')
  } catch {
    showToast('复制失败')
  }
}
</script>

<style scoped>
.bodyweb-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 70px 15px 30px;
  box-sizing: border-box;
}

.container {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 500px;
  font-size: 15px;
}

textarea {
  width: 100%;
  height: 100px;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
  box-sizing: border-box;
  resize: vertical;
}

.buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: var(--primary-color, #75a3e1);
  color: white;
  cursor: pointer;
  font-size: 15px;
}

button:hover {
  background-color: #0056b3;
}

.result {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 50px;
  word-break: break-word;
  text-align: left;
}

.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  z-index: 1100;
}
</style>
