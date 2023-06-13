import httpInstance from "@/utils/http"

export function getCategoryAPI(){
    return httpInstance({
        url:'/home/category/head'//我这里少打了一个head导致左侧分类列表的数据渲染不出来
    })
}
