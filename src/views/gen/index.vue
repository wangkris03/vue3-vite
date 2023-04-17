<template>
  <div class="app-container">
    <el-card>
      <el-row>
        <el-input v-model="textarea" :rows="8" type="textarea" placeholder="Please input" />
        <el-button @click="reset">reset</el-button>
        <el-input v-model="zg.a" placeholder="Please input" clearable />
        <el-input v-model="zg.b" placeholder="Please input" clearable />
        <el-input v-model="zg.c" placeholder="Please input" clearable />
        <el-input v-model="zg.d" placeholder="Please input" clearable />
        <el-input v-model="zg.e" placeholder="Please input" clearable />
        <el-input v-model="zg.f" placeholder="Please input" clearable />
      </el-row>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue"
const init = {
  a: "加厚双面",
  b: "百搭色系",
  c: "棉麻",
  d: "吸湿，散热，透气",
  e: "已打孔",
  f: "1.5m*3m, 2m*3m"
}
const zg = ref(init)
const textarea = computed(
  () => `
99.9%全遮光效果，有效阻隔光源直射，${zg.value.a}。
面料表面微微肌理感，厚实光滑，手感软糯舒服。
特选${zg.value.b}，适合各种室内风格，美观大方，细节出众。
此款产品特使用${zg.value.c}材质，具有良好的${zg.value.d}特点，耐磨耐洗，使用寿命很长。
窗帘自带${zg.value.e}设计，安装快捷。
提供多种尺寸${zg.value.f} 选择， 完美裁切。`
)
const reset = () => {
  zg.value = { ...init }
}
</script>
<style scoped>
.el-input {
  margin-bottom: 10px;
}
</style>
