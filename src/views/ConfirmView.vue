<template>
    <CheckOutStage :currentStep="'Confirm'"/>
    <div class="confirm container">
        <div class="confirm_confirmWrap row">
            <div class="col-12 col-md-6 confirm_info">
                <table class="col-12 col-md-6 confirm_info_infoTable">
                    <tr class="confirm_info_infoTr">
                        <th>訂購人資訊</th>
                    </tr>
                    <tr class="confirm_info_infoTr">
                        <th>姓名:</th>
                        <td>{{ CartStore.orderInfo["ord_name"] }}</td>
                    </tr>
                    <tr class="confirm_info_infoTr">
                        <th>mail:</th>
                        <td>{{ CartStore.orderInfo["take_mail"] }}</td>
                    </tr>
                    <tr class="confirm_info_infoTr">
                        <th>手機:</th>
                        <td>{{ CartStore.orderInfo["take_tal"] }}</td>
                    </tr>
                    <tr class="confirm_info_infoTr">
                        <th>地址:</th>
                        <td>{{ CartStore.orderInfo["take_address"] }}</td>
                    </tr>
                    <tr class="confirm_info_infoTr">
                        <th>運送方式:</th>
                        <td>{{ CartStore.orderInfo["ord_shipping"] }}</td>
                    </tr>
                    <tr class="confirm_info_infoTr">
                        <th>付款方式:</th>
                        <td>{{ CartStore.orderInfo["payment_status"] }}</td>
                    </tr>
                </table>
            </div>
            <div class="col-12 col-md-6 confirm_detail">
                <CartDetail/>
            </div>
        </div>
        <div class="confirm_page">
            <router-link to="/payment" class="confirm_page_pageUP"><i class="fa-solid fa-angle-left" style="color: #f73f14;"></i>結帳資訊</router-link>
            <button class="btn-primary" @click="addOrder">確認購買</button>
        </div>
        <div class="confirm_success" v-show="isSuccess" @click="linkToHome">
            <div class="confirm_success_bg">
                <div class="success">
                    <div class="success_icon"><i class="fa-solid fa-check fa-2xl" style="color: #ffffff;"></i></div>
                    <p class="success_title">訂購成功！</p>
                    <p class="success_info">請至會員專區查看訂單</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import CheckOutStage from '@/components/CheckOutStage.vue';
import CartDetail from '@/components/CartDetail.vue';
import { useCartStore } from '@/stores/cart';
import { userStore } from '@/stores/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default{
    setup(){
        const CartStore = useCartStore(); 
        const router = useRouter();
        const isSuccess = ref(false);
        const toggleSuccess = ()=>{
            isSuccess.value = !isSuccess.value
            CartStore.cartList.splice(0);
            localStorage.clear();
        };
        const linkToHome = ()=>{
            router.push('/');
        };
        const store = userStore();
        const addOrder = ()=>{
            CartStore.updateOrderInfo();
            console.log(CartStore.cartList);
            console.log(CartStore.orderInfo);
            console.log(store.userData);

            const orderData = {
                carList:CartStore.cartList,
                orderInfo:CartStore.orderInfo,
                userData:store.userData
            }
            axios.post(`${import.meta.env.VITE_API_URL}/front/order/orderDataAdd.php`,orderData)
                .then(response =>{
                    console.log("訂單成功");
                })
                .catch(error =>{
                    console.error("提交訂單失敗",error)
                })
        };
        return{
            CartStore,
            isSuccess,
            toggleSuccess,
            linkToHome,
            addOrder,
        }
    },
    components: {
        RouterLink,
        RouterView,
        CheckOutStage,
        CartDetail,
    },
}
</script>
<style lang="scss">
    @import '@/assets/scss/page/_confirm.scss';
</style>
