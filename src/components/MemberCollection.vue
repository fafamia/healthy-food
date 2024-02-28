<template>
    <div class="col-12 col-lg-9">
        <div class="member_collection">
            <h2>我的收藏</h2>
            <ul class="member_cookbook_list row">
                <li v-for="item in cookbooks" :key="item.id" class="col-4">
                    <article>
                        <i class="fa-regular fa-bookmark bookmark"></i>
                        <!-- <router-link to="/cookbookinfo"> -->
                            <!-- <img src="/src/assets/images/member/cookbook.png"> -->
                        <!-- </router-link> -->
                        <div class="text">
                            <!-- <router-link to="/cookbookinfo">
                                <h4>{{ item.name }}</h4>
                            </router-link>
                            <p>{{ item.title }}</p> -->
                        </div>
                        <div class="like">
                            <i class="fa-regular fa-thumbs-up"></i>
                            <span>1</span>
                            <i class="fa-solid fa-share"></i>
                        </div>
                    </article>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            cookbooks: [],
            fetchLocalStorageArray:[],
        }
    },
    mounted() { // Vue 實例創建之後立即被調用
        this.fetchcollect();
    },
    methods:{
        fetchcollect(){
            this.fetchLocalStorageArray = JSON.parse(localStorage.getItem('collect'));
            console.log(this.fetchLocalStorageArray);
            axios.post(`${import.meta.env.VITE_API_URL}/front/member/fetchRecipe.php`,this.fetchLocalStorageArray)
            .then(response => {
                this.cookbooks = response.data
                console.log(response.data);
                console.log(this.cookbooks);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/page/_member.scss";
</style>