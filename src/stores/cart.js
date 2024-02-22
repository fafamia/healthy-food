import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore =  defineStore("CartStore", {
    state: () => {
        return{
            cartList: JSON.parse(localStorage.getItem("items")) || [] ,
            userInput:'',
            selectAll:false,
            couponList:[
                {   
                    id:"001",
                    name: "健康知識大問答1",
                    price: "10",
                },
                {   
                    id:"002",
                    name: "健康知識大問答2",
                    price: "20",
                },
                {   
                    id:"003",
                    name: "健康知識大問答3",
                    price: "30",
                },
            ],
            orderName:ref(''),
            orderNumber:ref(''),
            orderAddr:ref(''),
            delivery:ref(''),
            payment:ref(''),
        }
    },
    getters: {
        //input輸入的折價券id是否有在資料庫中
        matchingCoupon:(state)=>{
            return state.couponList.find(coupon => coupon.id === state.userInput)
        }, 
        //--計算小計--
        subTotal:(state)=>{
            return state.cartList.reduce((acc,product)=>{
                return acc + (product.product_price*product.product_quantity);
            },0);
        },
        // --計算總額,和折價券連動--
        total:(getters)=>{
            let discount = 0;
            if(getters.matchingCoupon){
                discount = parseInt(getters.matchingCoupon.price)
                return getters.subTotal - discount;
            }else{
                return getters.subTotal;
            }  
        }
    },
    actions: {
        addCart(product){
            console.log(product);
            console.log(product.product_no);
            //用findIndex(裡面可以放function)判斷商品是否已在購物車
            const index = this.cartList.findIndex(p=>p.product_no === product.product_no)
            //如果在購物車中index會從0開始
            if (index !== -1){
                //判斷回傳的id是否已經在購物車中,如果已經在購物車內,只更新數量
                const cartItem = this.cartList.find(item => item.product_no === product.product_no)
                if(cartItem){
                    cartItem.product_quantity += product.product_quantity;
                }
            //如果不在購物車,把商品加進去    
            }else{
                this.cartList.push(product)
            };
            this.saveLocalstorage();
        },
        newQuantityUpdate(product_no, action) {
            console.log(product_no);
            //判斷商品是否已在購物車
            const cartItem = this.cartList.find(item => item.product_no === product_no)
            //如果不在購物車,出function
            if(!cartItem) return;
            //如果在車內可以增加或減少數量
            if(action === 'increment'){
                cartItem.product_quantity +=1
            }else if(action === 'decrement' && cartItem.product_quantity > 1){
                cartItem.product_quantity -=1
            }
            this.saveLocalstorage();
        },
        saveLocalstorage(){
            localStorage.setItem("items",JSON.stringify(this.cartList));
        },
        deleteCart(product_no){
            const index = this.cartList.findIndex(item => item.product_no === product_no)
            this.cartList.splice(index,1);
            this.saveLocalstorage();
        },
        toggleAll(){
            this.cartList.forEach(product => {
                product.checked = this.selectAll;                
            });
        },
        deleteSelected(){
            // this.cartList = this.cartList.filter(product => !product.checked)
            for (let i = this.cartList.length - 1; i >= 0; i--) {
                if (this.cartList[i].checked) {
                    this.cartList.splice(i, 1);
                }
            }
            this.saveLocalstorage();
        },
    }
})
