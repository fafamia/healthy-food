import { defineStore } from 'pinia'

export const useCartStore =  defineStore("CartStore", {
    state: () => {
        return{
            cartList: [],
            // ProductInfo:{},
            currentQuantity:0,
        }
    },
    getters: {},
    actions: {
        addCart(product){
            let storage = localStorage;
            const isInCart = this.cartList.findIndex(item=>item.id === product.id) > -1;
            if (isInCart){
                this.quantity += product.quantity || 1;
            }else{
                this.cartList.push({
                    id: product.id,
                    name:product.name,
                    quantity: product.quantity || 1,
                    image:product.image,
                });
            }
            storage.setItem(product.id,product.quantity.toString());
        },
        updateQuantity(currentQuantity,action){
            if (action === 'increment'){
                console.log('increment');
                console.log(currentQuantity);
                return currentQuantity += 1;
            }else if(action === 'decrement' && this.quantity >1){
                currentQuantity -= 1;
                console.log('decrement');
            }
        },
    }
})
