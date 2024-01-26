import { defineStore } from 'pinia'

export const useCartStore =  defineStore("CartStore", {
    state: () => {
        return{
            cartList: [],
            quantity:1,
            ProductInfo:{},
        }
    },
    getters: {},
    actions: {
        addCart(product){
            let storage = localStorage;
            const isInCart = this.cartList.findIndex(item=>item.id === product.id) > -1;
            if (isInCart){
                this.cartList[isInCart].quantity += product.quantity || 1;
            }else{
                this.cartList.push({
                    id: product.id,
                    name:product.name,
                    quantity: this.quantity || 1,
                    img:product.image,
                });
            }
            storage.setItem(product.id,product.quantity.toString());
        },
        updateQuantity(action){
            if (action === 'increment'){
                this.quantity += 1
            }else if(action === 'decrement' && this.quantity >1){
                this.quantity -= 1;
            }
        },
    }
})
