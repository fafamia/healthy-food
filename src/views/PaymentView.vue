<template>
    <CheckOutStage :currentStep="'Payment'"/>
    <div class="payment container">
        <div class="payment_paymentWrap row">
            <div class="col-12 col-md-6 payment_info">
                <table class="col-12 col-md-6 payment_info_infoTable">
                    <tr class="payment_info_infoTr">
                        <th>訂購人資訊</th>
                        <td>
                            <label for="asMemberInfo">同會員資料</label>
                            <input type="checkbox" id="asMemberInfo" @change="sameAsMem" v-model="checkSame">
                        </td>
                    </tr>
                    <tr class="payment_info_infoTr">
                        <th>姓名:</th>
                        <td>
                            <input
                            type="text"
                            placeholder="請輸入您的姓名"
                            v-model="CartStore.orderInfo['ord_name']"
                            class="payment_info_infoInput"
                            >
                        </td>
                    </tr>
                    <tr class="payment_info_infoTr">
                        <th>mail:</th>
                        <td>
                            <input
                            type="text"
                            placeholder="請輸入您的mail"
                            v-model="CartStore.orderInfo['take_mail']"
                            class="payment_info_infoInput"
                            >
                        </td>
                    </tr>
                    <tr class="payment_info_infoTr">
                        <th>手機:</th>
                        <td>
                            <input
                            type="text"
                            placeholder="請輸入您的手機號碼"
                            v-model="CartStore.orderInfo['take_tal']"
                            class="payment_info_infoInput"
                            >
                        </td>
                    </tr>
                    <tr class="payment_info_infoTr">
                        <th>地址:</th>
                        <td>
                            <input
                            type="text"
                            placeholder="請輸入您的地址"
                            v-model="CartStore.orderInfo['take_address']"
                            class="payment_info_infoInput"
                            >
                        </td>
                    </tr>
                    <tr class="payment_info_infoTr">
                        <th rowspan="2">運送方式:</th>
                        <td>
                            <input
                            name="ord_shipping"
                            id="deliveryHome"
                            type="radio"
                            value="宅配到府"
                            v-model="CartStore.orderInfo['ord_shipping']">
                            <label for="deliveryHome">宅配到府 ( 運費$80TWD )</label>
                        </td>
                    </tr>
                    <tr class="payment_info_infoTr">
                        <td>
                            <input
                            name="ord_shipping"
                            id="deliveryStore"
                            type="radio"
                            value="7-11取貨"
                            v-model="CartStore.orderInfo['ord_shipping']">
                            <label for="deliveryStore">7-11取貨 ( 運費$60TWD )</label>
                        </td>
                    </tr>
                    <tr class="payment_info_infoTr">
                        <th>付款方式:</th>
                        <td>
                            <input
                            name="payment_status"
                            id="paymentOnline"
                            type="radio"
                            value="線上付款"
                            v-model="CartStore.orderInfo['payment_status']">
                            <label for="paymentOnline">線上付款</label>
                            <input
                            name="payment_status"
                            id="paymentCash"
                            type="radio"
                            value="取貨付款"
                            v-model="CartStore.orderInfo['payment_status']">
                            <label for="paymentCash">取貨付款</label>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="col-12 col-md-6 payMent_detail">
                <CartDetail/>
            </div>
        </div>
        <div class="payment_page">
            <router-link to="/checkout" class="payment_page_pageUP"><i class="fa-solid fa-angle-left" style="color: #f73f14;"></i>訂單資料</router-link>
            <router-link to="/confirm" class="btn-primary payment_page_pageDown">訂單確認</router-link>
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import CheckOutStage from '@/components/CheckOutStage.vue';
import CartDetail from '@/components/CartDetail.vue';
import { useCartStore } from '@/stores/cart';
import { userStore } from '@/stores/user';
import { ref,watch } from 'vue';

export default{
    setup(){
        const CartStore = useCartStore();
        const store = userStore();
        const checkSame = ref(store.checkedSame);
        const sameAsMem = ()=>{
            if(checkSame.value){
                CartStore.orderInfo["ord_name"] = store.userData["member_name"];
                CartStore.orderInfo["take_mail"] = store.userData["member_email"];
                CartStore.orderInfo["take_tal"] = store.userData["member_tel"];
                CartStore.orderInfo["take_address"] = store.userData["member_county"] + store.userData["member_city"] +store.userData["member_addr"];
            }else{
                CartStore.orderInfo['orderName'] ='';
                CartStore.orderInfo['orderNumber'] = '';
                CartStore.orderInfo['orderAddr'] = '';
            }
        };
        watch(checkSame, (newValue) => {
            store.isCheckedSame(newValue);
        });
        return{
            CartStore,
            store,
            checkSame,
            sameAsMem,
        }
    },
    components: {
        RouterLink,
        RouterView,
        CheckOutStage,
        CartDetail,
    }
}
</script>

<style lang="scss">
    @import '@/assets/scss/page/_payment.scss';
</style>