<template>
  <div class="activate-page">
    <div class="card">
      <h1>开发者访问</h1>
      <p class="desc">用于激活“数据后台”页面访问权限。</p>

      <div v-if="status === 'checking'" class="hint">正在校验链接...</div>

      <div v-else-if="status === 'success'" class="ok">
        <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
        <span>已激活，正在跳转到数据后台…</span>
      </div>

      <div v-else class="err">
        <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i>
        <span>激活失败：链接无效或口令不正确。</span>
        <p class="hint">请确认你打开的是完整的激活链接。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// TODO：请把这个口令改成你自己的（长度建议 16+，避免被猜）
const DEV_ACTIVATE_KEY = 'CHANGE_ME_TO_A_LONG_RANDOM_KEY'
const DEV_FLAG_KEY = 'dai_dev_access_enabled'

const route = useRoute()
const router = useRouter()
const status = ref('checking') // checking | success | error

onMounted(() => {
  const key = String(route.query.key || '')
  if (key && key === DEV_ACTIVATE_KEY) {
    localStorage.setItem(DEV_FLAG_KEY, '1')
    status.value = 'success'
    window.setTimeout(() => {
      router.replace('/images')
    }, 500)
    return
  }
  status.value = 'error'
})
</script>

<style scoped>
.activate-page {
  min-height: 100vh;
  padding: 70px 16px 30px;
  background: #f6f6f6;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.card {
  width: min(520px, 100%);
  background: #fff;
  border-radius: 14px;
  padding: 18px 18px 16px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
}

.card h1 {
  font-size: 18px;
  color: #111827;
  margin-bottom: 6px;
}

.desc {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 12px;
}

.hint {
  font-size: 13px;
  color: #6b7280;
}

.ok,
.err {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
}

.ok {
  color: #16a34a;
}

.err {
  color: #dc2626;
  flex-wrap: wrap;
}

.err .hint {
  width: 100%;
  margin-top: 6px;
}
</style>

