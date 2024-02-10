<template>
    <CheckOutStage :currentStep="'Order'" />
    <div class="container checkOut">
        <div class="row checkOut_checkOutWrap">
            <table class="col-12 col-md-8 checkOut_fixTop">
                <tr class="checkOut_list_title">
                    <th><input type="checkbox" v-model="CartStore.selectAll" @change="CartStore.toggleAll"></th>
                    <th>商品</th>
                    <th></th>
                    <th>數量</th>
                    <th>價格</th>
                    <th @click="CartStore.deleteSelected"><i class="fa-solid fa-xmark"></i></th>
                </tr>
            </table>
            <table class="col-12 col-md-8 checkOut_list">
                <tr v-for="product in cartList" :key="product.id" class="checkOut_list_content">
                    <td class="checkOut_list_content_check"><input type="checkbox" v-model="product.checked"></td>
                    <td class="checkOut_list_content_image"><img :src=getImageUrl(product.image)></td>
                    <td class="checkOut_list_content_name">{{ product.name }}</td>
                    <td class="checkOut_list_content_quantity">
                        <button class="quantityButton" @click="newQuantityUpdate(product.id, 'decrement')"><i
                                class="fa-solid fa-minus" style="color: #e73f14;"></i></button>
                        <span class="quantityNum">{{ product.quantity }}</span>
                        <button class="quantityButton" @click="newQuantityUpdate(product.id, 'increment')"><i
                                class="fa-solid fa-plus" style="color: #e73f14;"></i></button>
                    </td>
                    <td class="checkOut_list_content_price">${{ product.price }}</td>
                    <td @click="deleteCart(product.id)" class="checkOut_list_content_delete"><i
                            class="fa-solid fa-xmark"></i></td>
                </tr>
            </table>
            <div class="col-12 col-md-4 sideWrap">
                <div class="checkOut_coupon">
                    <p class="checkOut_coupon_title">使用折價券</p>
                    <input type="text" placeholder="折價券編號" class="checkOut_coupon_select" v-model="CartStore.userInput">
                    <button class="btn-secondary">使用</button>
                </div>
                <div class="checkOut_price">
                    <table class="checkOut_price_priceWrap">
                        <tr class="checkOut_price_priceTr">
                            <th class="checkOut_price_priceTh">商品金額</th>
                            <td class="checkOut_price_priceTd">{{ CartStore.subTotal }}</td>
                        </tr>
                        <tr v-if="CartStore.matchingCoupon" class="checkOut_price_priceTr">
                            <th class="checkOut_price_priceTh">{{ CartStore.matchingCoupon.name }}</th>
                            <td class="checkOut_price_priceTd">-{{ CartStore.matchingCoupon.price }}</td>
                        </tr>
                        <tr class="checkOut_price_priceTr">
                            <th class="checkOut_price_priceTh">訂單總金額</th>
                            <td class="checkOut_price_priceTd">{{ CartStore.total }}</td>
                        </tr>
                    </table>
                    <router-link to="/payment" class="btn-primary go_payment">結帳</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckOutStage from '@/components/CheckOutStage.vue';
import { RouterLink, RouterView } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/Product';

export default {
    setup() {
        const CartStore = useCartStore();
        const ProductStore = useProductStore();
        return {
            CartStore,
            cartList: CartStore.cartList,
            getImageUrl:ProductStore.getImageUrl,
            newQuantityUpdate: (id, action) => CartStore.newQuantityUpdate(id, action),
            deleteCart: (id) => CartStore.deleteCart(id),
        };
    },
    components: {
        RouterLink,
        RouterView,
        CheckOutStage,
    }
}
</script>
<style lang="scss">
@import '@/assets/scss/page/_checkOut.scss';
</style>
