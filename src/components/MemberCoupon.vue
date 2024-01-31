<template>
    <div class="col-12 col-lg-9">
        <div class="member_coupon">
            <h2>折價券</h2>
            <div class="coupon_input_area">
                <input class="input_coupon" type="text" name="coupon_code" placeholder="請輸入折扣碼">
                <button type="button">兌換</button>
            </div>
            <div class="coupon_list">
                <div class="coupon_card" v-for="coupon in coupons" :key="coupon.id">
                    <h2 class="coupon_card_price">{{ coupon.price }}</h2>
                    <p class="coupon_card_title">{{ coupon.title }}</p>
                    <p>{{ coupon.description }}</p>
                    <p>有效期限至：{{ coupon.expiryDay }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            coupons: [
                {
                    id: 1,
                    price: 'TWD 30',
                    title: '健康知識大挑戰-優惠券',
                    description: '每筆訂單限用一張折價券',
                    expiryDay: '2024-06-30 23:59'
                },
                {
                    id: 2,
                    price: 'TWD 50',
                    title: '黃金會員-生日禮金',
                    description: '每筆訂單限用一張折價券',
                    expiryDay: '2024-01-31 23:59'
                },
            ]
        };
    }
};
</script>
