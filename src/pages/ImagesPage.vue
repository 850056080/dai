<template>
  <div class="images-page">
    <div class="images-header">
      <h1>数据后台</h1>
      <p>图表图片展示</p>
    </div>

    <div class="images-grid">
      <figure v-for="src in imageUrls" :key="src" class="images-item">
        <img :src="src" alt="图表" loading="lazy" />
      </figure>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const baseUrl = import.meta.env.BASE_URL
const withBase = (path) => `${baseUrl}${path}`

// 使用 public/img 下的图片作为“图表数据”
const imageFiles = [
  'cases_k_banner.png',
  'cases_k_all_pc_ui_myphoto.png',
  'cases_k_all_pc_ui_resume-avatar.jpg',
  'cases_n_rh_pc_all_service-index.jpg',
  'cases_n_rh_pc_all_lg1.jpg',
  'cases_n_rh_pc_all_l1.jpg',
  'cases_n_rh_pc_all_l2.jpg',
  'cases_n_rh_pc_all_l3.jpg',
  'cases_n_rh_pc_all_l4.jpg',
  'cases_n_rh_pc_all_l5.jpg',
  'cases_n_rh_pc_all_l6.jpg',
  'cases_n_rh_pc_all_l7.jpg',
  'cases_n_rh_pc_all_l8.jpg',
  'cases_n_rh_pc_all_l9.jpg',
  'cases_n_rh_pc_all_l10.jpg',
  'cases_n_rh_pc_all_l11.jpg',
  'cases_n_rh_m_all_wechatimg327.jpg',
  'cases_n_rh_m_all_wechatimg328.jpg',
  'cases_n_rh_m_all_wechatimg329.jpg',
  'cases_n_rh_m_all_wechatimg330.jpg',
  'cases_n_rh_m_all_wechatimg331.jpg',
  'cases_n_rh_m_all_wechatimg332.jpg',
  'cases_n_rh_m_all_wechatimg333.jpg',
  'cases_n_rh_m_all_wechatimg334.jpg',
  'cases_n_rh_m_all_wechatimg335.jpg',
  'cases_n_rh_m_all_wechatimg336.jpg',
  'cases_n_rh_m_all_wechatimg337.jpg',
  'cases_n_rh_m_app_fgnusr5uksyhwxtaly7btkpmznbr.png',
  'cases_n_rh_m_app_fgvdt0sx4gxsnsf-qjxkfmsiocgt.png',
  'cases_n_rh_m_app_fhh6-k9s4avzulppochk0zj33hlq.png',
  'cases_n_rh_m_app_fl9wxzb-3iiip6vjwdq6rz8fv9bd.png',
  'cases_n_rh_m_app_fmfjthcfignhifdkqlpxxminhjkf.png',
  'cases_n_rh_m_app_fmydwnq7p-8vcuey0ousvfo-auos.png',
  'cases_n_rh_m_app_fotopdh06zicusd4baq5xkgvxtok.png',
  'cases_n_rh_m_app_fqppqwrfdlrmkpsubjulkfhwtc6d.png',
  'cases_n_rh_m_app_ftvop9mnozt52mjhi-4hxeon8lde.png',
  'cases_n_rh_m_app_ftrsep18apw7az0a65kitunmhn-3.png',
  'cases_n_rh_m_app_fu11tsp1gyqixessdhyxxdx-bkeg.png',
  'cases_n_rh_m_app_fv-kkuj-x-inmznhowmp4f5acg68.jpg',
  'cases_n_yl_pc_bi_sdpl012.jpg',
  'cases_n_yl_pc_bi_sdpl013.jpg',
  'cases_n_yl_pc_bi_sdpl014.jpg',
  'cases_n_yl_pc_bi_sdpl015.jpg',
  'cases_n_yl_pc_bi_sdpl017.jpg',
  'cases_n_yl_pc_bi_sdpl019.jpg',
]

const imageUrls = computed(() => imageFiles.map((f) => withBase(`img/${f}`)))
</script>

<style scoped>
.images-page {
  min-height: 100vh;
  padding: 70px 16px 30px;
  background: #f6f6f6;
  box-sizing: border-box;
}

.images-header {
  width: 100%;
  margin: 0;
  padding: 0 12px 14px;
  box-sizing: border-box;
}

.images-header h1 {
  font-size: 20px;
  color: #111827;
  margin-bottom: 6px;
}

.images-header p {
  color: #6b7280;
  font-size: 13px;
}

.images-grid {
  width: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  padding: 12px;
  box-sizing: border-box;
}

.images-item {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #ff4d4f;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  aspect-ratio: 3840 / 2400; /* 约等于 8:5 */
}

.images-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 768px) {
  .images-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  /* 移动端也保持同样宽高比例 */
}
</style>
