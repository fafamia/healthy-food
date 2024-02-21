<template>
    <div class="container CartDetail">
        <div class="CartDetail_wrap">
            <h3 class="CartDetail_title">購物車明細</h3>
            <table class="CartDetail_product">
                <tr v-for="product in cartList"
                    :key="product.id" 
                    class="CartDetail_product_productTr">
                    <td class="CartDetail_product_image ">
                        <img :src=getImageUrl(product.image)>
                    </td>
                    <td class="CartDetail_product_name">{{ product.name }}</td>
                    <td class="CartDetail_product_price">{{ product.price }}</td>
                    <td class="CartDetail_product_quantity">X{{ product.quantity }}</td>
                </tr>
            </table>
            <table class="CartDetail_amount">
                <tr class="CartDetail_amount_amountTr">
                    <th class="CartDetail_amount_amountTh">商品金額</th>
                    <td class="CartDetail_amount_amountTd">{{ CartStore.subTotal }}</td>
                </tr>
                <tr class="CartDetail_amount_amountTr">
                    <th class="CartDetail_amount_amountTh">折價劵</th>
                    <td class="CartDetail_amount_amountTd" v-if="CartStore.matchingCoupon">-{{ CartStore.matchingCoupon.price }}</td>
                </tr>
                <tr class="CartDetail_amount_amountTr">
                    <th class="CartDetail_amount_amountTh">會員折扣</th>
                    <td class="CartDetail_amount_amountTd">-0</td>
                </tr>
                <tr class="CartDetail_amount_amountTr">
                    <th class="CartDetail_amount_amountTh">運費</th>
                    <td class="CartDetail_amount_amountTd">0</td>
                </tr>
                <tr class="CartDetail_amount_amountTr">
                    <th class="CartDetail_amount_amountTh">總金額</th>
                    <td class="CartDetail_amount_amountTd">${{ CartStore.total }}元</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import { useCartStore } from "@/stores/cart";
import { useProductStore } from '@/stores/Product';

export default {
    setup() {
        //使用pinia中CartStore存放的資料
        const CartStore = useCartStore();
        //使用存在CartStore中的購物車array
        const cartList = CartStore.cartList
        const ProductStore = useProductStore();
        return {
            CartStore,
            cartList,
            getImageUrl:ProductStore.getImageUrl,
        }
    },
    components: {
        RouterLink,
        RouterView,
    },
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/_cartDetail.scss";
</style>