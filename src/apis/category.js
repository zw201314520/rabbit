import request from '@/utils/http'

export function getCategoryAPI(id){
    return request ({
        url:'/category',//因为是get请求所以省略meouth方法
        params:{
            id
        }
    })
}
