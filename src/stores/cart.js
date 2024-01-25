import { defineStore } from 'pinia'

export const useCartStore =  defineStore("CartStore", {
    state: () => {
        return{
            cartList: []
        }
    },
    getters: {},
    actions: {
        addCart(item){
            let id = item.id;
            let count = item.count;
            let storage = localStorage;

            const isInCart = this.cartList.findIndex(v=>v.id === id) > -1
            if (isInCart){
                const item = this.cartList.find(v=>v.id === id)
                item.count = count
            }else{
                this.cartList.push(item)
            }
            storage.setItem(id,count)
        }
    }
})
