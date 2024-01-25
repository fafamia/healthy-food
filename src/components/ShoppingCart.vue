<template>
    <div class="shoppingCart_drawer" v-show="drawerStatus" >
            <div class="shoppingCart_drawer_bg" @click="toggleShoppingDrawer">
                <div class="drawer" @click.stop>
                    <h2 class="drawer_title">商品清單</h2>
                    <div v-for="item in cartList" 
                        :key="item.id"            
                        class="drawer_product">
                        <div class="drawer_product_image">
                            <img :src=item.img>
                        </div>
                        <p class="drawer_product_name">{{ item.name }}</p>
                        <p class="drawer_product_count">{{ item.count }}</p>
                    </div>
                    <span class="drawer_close" @click="toggleShoppingDrawer"><i class="fa-solid fa-xmark"
                        ></i></span>
                    <router-link to="/checkout" class="drawer_addCart btn-primary">結帳</router-link>
                </div>
            </div>
        </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import { useCartStore } from "@/stores/Cart";

export default {
    name:'ShoppingCart',
    setup() {
        const cartStore = useCartStore();
        return {
            cartList:cartStore.cartList,
        }
        // function loadCartFormLocalStorage(){
        //     cartStore.cartList.forEach(item=>{
        //         let count = localStorage.getItem(item.id)
        //         if(count !== null){
        //             item.count = parseInt(count,1);
        //         }
        //     })
        // };
        // loadCartFormLocalStorage();

    },
    data() {
        return {
            drawerStatus: false,
        }
    },
    computed: {},
    expose:[
        'toggleShoppingDrawer'
    ],
    methods: {
        toggleShoppingDrawer(){
            this.drawerStatus = !this.drawerStatus
        },
    },
    watch:{
        drawerStatus:{
            handler(){
                const body = document.getElementsByTagName('body')[0];
                body.classList.toggle("overflow-hidden");
            },

        }
    },
    components: {
        RouterLink,
        RouterView,
    },
}
</script>

<style lang="scss">
    @import '@/assets/scss/main.scss';
    @import "@/assets/scss/components/_shoppingCart.scss";
</style>