import { defineStore } from 'pinia'

export default defineStore('cartStore',{
    //有哪些資料 data
    state:()=>({
        cart:[]
    }),

    //conputed(object)
    getters:{},

    //methods(object)
    actions:{
        addCart(){
            
        }
    }
})
