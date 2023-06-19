//封装分类数据业务相关代码
import {ref,onMounted} from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router';//在组件内部获取路由参数的方法
import { onBeforeRouteUpdate } from 'vue-router'



export function useCategory () {
	//获取分类数据
const categoryData = ref({})
const route = useRoute()
//这段代码我不太理解(id=route.params.id)
const getCategory = async (id = route.params.id) => {
  const res = await getCategoryAPI(id)
  categoryData.value = res.result
}
// onMounted(()=>getCategory())用onMounted有一个小bag，得手动刷新，所以先用onupdate先顶一下，后面会优化
// onUpdated(()=>getCategory())
onMounted(() => getCategory())//用了这个方法就要去Layout组件里的routerview里添加 key

//目标：路由参数变化的时候，可以吧分类数据接口重新发送
onBeforeRouteUpdate((to) => {
  console.log('路由变化了')
  //存在问题：使用最新的路由参数请求最新的分类数据
  console.log(to)
  getCategory(to.params.id)
})
	
	return {
		categoryData
	}
	
}