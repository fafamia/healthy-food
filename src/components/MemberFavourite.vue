<template>
    <div class="col-12 col-lg-9">
        <div class="member_favourite">
            <h2>我的最愛</h2>
            <div class="member_product_items">
                <div v-for="item in products" :key="item.id" class="member_vegetable_card">
                    <p class="member_product_tag">#NEW</p>
                    <div class="member_product_card_img">
                        <img src="../../src/assets/images/product/pumpkin_cover.png" alt="item.name">
                    </div>
                    <p class="member_vegetable_title">{{ item.name }}</p>
                    <p class="member_vegetable_price">{{ item.price }}</p>
                    <router-link :to="{
                        name: 'productinfo',
                        params: { id: item.id }
                    }" class="btn-product">查看商品詳情</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    index: 0,
                    id: 1001,
                    name: "南瓜蔬食調理包",
                    price: "$170",
                    type: "lunchbox"
                },
                {
                    index: 1,
                    id: 1001,
                    name: "南瓜蔬食調理包",
                    price: "$170",
                    type: "lunchbox"
                },
                {
                    index: 2,
                    id: 1001,
                    name: "南瓜蔬食調理包",
                    price: "$170",
                    type: "lunchbox"
                },
            ],
        }
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/page/_member.scss";
</style>