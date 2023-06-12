import { getCategoryAPI } from '@/apis/Layout'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
    //导航列表的数据管理
    //state导航列表数据
    //模板要有响应式数据
    const categoryList = ref([])

    //action获取导航数据的方法
    const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result
}
  return {categoryList, getCategory}
})
