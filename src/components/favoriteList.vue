<template>
    <div class="favorites_list_main">
        <div class="favorites_list_area">
            <div class="favorites_list_group" v-for="(favo, index) in favAPI" :key="favo.prod_img">
                <span class="close" @click="delSingleItem(favo, index)">&times;</span>
                <div class="favorites_list_img">
                    <img :src="favo.product_img" alt="" />
                </div>
                <div class="favorites_list_info">
                    <div>
                        <h5>{{ favo.product_name }}</h5>
                        <p>NT {{ favo.product_price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { useProductStore } from '@/stores/Product';
import { userStore } from '@/stores/user';
export default {
    name: "favoritesList",
    data() {
        return {
            favoList: [],
            favAPI: [],
            memberId: null
        };
    },
    mounted() {
        fetch(`${import.meta.env.VITE_API_URL}/front/product/prod_favorite_DataGet.php`)
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                this.favAPI = [];
                if (!memberId) {
                    return;
                }
                for (let i = 0; i < data.length; i++) {
                    if (memberId == data[i].member_no) {
                        this.favAPI.push(data[i]);
                    }
                    // data[i].prod_img = `${this.$store.state.chooseImgSrc}/all_images/product/${data[i].prod_img}`;
                }
                this.favAPI = data;
                console.log(this.favAPI);
            });
    },
    created() {
        this.memberId = userStore.userData ? userStore.userData.memberNo : null;
        this.$watch(
            () => userStore.userData,
            (newUserData) => {
                this.memberId = newUserData ? newUserData.memberNo : null;
            }
        )
    },
    methods: {
        delSingleItem(favo, idx) {
            this.favAPI.splice(idx, 1);
            let formData = new FormData();
            let product_no = favo.product_no;
            formData.append("member_no", memberId);
            formData.append("product_no", product_no);
            fetch(`${import.meta.env.VITE_API_URL}/front/product/prod_favorite_DataDelete.php`, {
                method: "POST",

                body: formData,
            });
            this.$store.commit("removeFavoItem", idx);
        },
    },
};
</script>