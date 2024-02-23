

<template>
  <div class="cookbook">
    <div class="banner">
      <img src="@/assets/images/cookbook/banner.jpg" alt="熱門食譜">
      <h1>熱門食譜</h1>
    </div>
    <breadcrumb :breadcrumb="yourBreadcrumbData"></breadcrumb>
    <div class="tag">
      <button class="" :class="{ 'styled-button': isStyled[0] }" @click="changeStyle(0)" type="button">#素食</button>
      <button :class="{ 'styled-button': isStyled[1] }" @click="changeStyle(1)" type="button">#肉類</button>
      <button :class="{ 'styled-button': isStyled[2] }" @click="changeStyle(2)" type="button">#冷食</button>
    </div>
    <div class="container cookbook-list">
      <ul>
        <li v-for="product in displayedProducts" :key="product.prod_id">
          <article>
            <i @click="toggleBookmark(product)" :class="product.iconClass" class="bookmark"></i>
            <router-link :to="`/cookbookinfo/${product.prod_id}`"><img :src="getProductImage(product)" :alt="product.prod_name"></router-link>
            <div class="text">
              <router-link :to="`/cookbookinfo/${product.prod_id}`">
                <h4>{{ product.prod_name }}</h4>
              </router-link>
              <p>{{ product.prod_des2 }}</p>
            </div>
            <div class="like">
              <i @click="toggleLike(product)" :class="product.iconLike"></i>
              <span>1</span>
              <button @click="copyUrl"><i class="fa-solid fa-share"></i></button>
            </div>
          </article>
        </li>
      </ul>
    </div>

    <div class="pagination">
      <span v-for="page in totalPages" :key="page" @click="changePage(page)" class="page-link">{{ page }}</span>
    </div>
  </div>
</template>

<script>

import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue';
import { mapActions } from 'pinia'
import { userStore } from '../stores/user.js'

export default {
  props: ['cardUrl'],
  data() {
    return {
      products: [],
      itemsPerPage: 9,
      currentPage: 1,
      // 麵包屑數據
      yourBreadcrumbData: [
        { text: '首頁', active: false, to: '/' },
        { text: '熱門食譜', active: true }
      ],
      isStyled: [false, false, false]


    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    displayedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.products.slice(startIndex, endIndex);
    },
  },

  mounted() {
    this.fetchData();
  },
  methods: {
    copyUrl() {
      // 創建一個新的文本區域元素
      const textArea = document.createElement("textarea");

      // 將卡片對應的URL設置為文本區域的值
      textArea.value = this.cardUrl;

      // 將文本區域添加到DOM中
      document.body.appendChild(textArea);

      // 選擇文本區域中的內容
      textArea.select();

      // 嘗試複製選定的文本
      document.execCommand("copy");

      // 從DOM中刪除文本區域元素
      document.body.removeChild(textArea);

      // 提示用戶已經複製
      alert("已複製食譜網址：" + this.cardUrl);
    },
    fetchData() {
      fetch('https://tibamef2e.com/chd103/g5/phps/ProductM.php')
        .then((res) => res.json())
        .then((json) => {
          this.products = json.map(product => ({
            ...product,
            bookmarked: false,
            iconClass: 'fa-regular fa-bookmark',
            like: false,
            iconLike: 'fa-regular fa-thumbs-up',
          }));
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
    getProductImage(product) {
      return `https://tibamef2e.com/chd103/g5/img/${product.prod_img1 || product.prod_img2 || product.prod_img3 || product.prod_img4}`;
    },
    changePage(page) {
      this.currentPage = page;
    },
    toggleBookmark(product) {
      product.bookmarked = !product.bookmarked;
      product.iconClass = product.bookmarked ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark';
    },
    toggleLike(product) {
      product.like = !product.like;
      product.iconLike = product.like ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
    },
    changeStyle(i) {
      this.isStyled = this.isStyled.map((_, index) => index === i);
    },
  },
  components: {
    RouterLink,
    RouterView,
    Breadcrumb,
    mapActions,
    userStore,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/page/_cookbook.scss";
</style>

