import {useIntersectionObserver} from '@vueuse/core'


//定义懒加载插件
export const lazyPlugin={
    install(app){//这一行必须这么写
    //懒加载指令逻辑

    //定义全局指令
    app.directive('img-lazy',{
    mounted(el,binding){
    //el:指令绑定的那个元素 img
    //binding：bindin.value  指令等于号后面绑定的表达式的值 图片url
    console.log(el,binding.value);
    const {stop}=useIntersectionObserver(
        el,
        ([{isIntersecting}])=>{
            console.log(isIntersecting)//isIntersection是一个布尔值，用来判断图片是否进入视口区域
            if(isIntersecting){
                el.src=binding.value
                stop()
            }
        }

    )
    }
})
    }
}