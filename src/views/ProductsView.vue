<template>
  <div class="products">
    <div class="product_banner">
      <img src="../../src/assets/images/product/banner.png" alt="product_banner">
      <div class="banner_title">
        <h1>健康小舖</h1>
      </div>

    </div>
    <breadcrumb :breadcrumb="yourBreadcrumbData"></breadcrumb>
    <div class="product-list container">
      <ul class="product-list-ul">
        <li class="product-list-li" >
          <div class="lunchbox" @click="filter(0, 'lunchbox')">調理包</div>
          <hr>
        </li>
        <li class="product-list-li">
          <div class="freshfood" @click="toggle = !toggle; filter(5, 'freshfood')">
            <h3>生鮮食材</h3>
            <i class="fa-solid fa-angle-down" style="color: #e73f14;"></i>
          </div>
          <hr>
          <div class="dropdown" :class="{ 'expanded': !toggle }">
            <div class="egg" v-if="!toggle" @click="filter(1, 'egg')">蛋、豆</div>
            <div class="oil" v-if="!toggle" @click="filter(2, 'oil')">雜糧、油品</div>
            <div class="fish" v-if="!toggle" @click="filter(3, 'fish')">魚、肉</div>
            <div class="vegetable" v-if="!toggle" @click="filter(4, 'vegetable')">蔬菜</div>
            <hr v-if="!toggle">
          </div>
        </li>
      </ul>

      <div class="phoneList">
        <select @change="filterPhoneList">
          <option value="">所有商品</option>
          <option value="lunchbox">調理包</option>
          <option value='egg'>蛋、豆</option>
          <option value='oil'>雜糧、油品</option>
          <option value='fish'>魚、肉</option>
          <option value='vegetable'>蔬菜</option>
        </select>
      </div>
      <div class="row product_items">
        <div v-for="item in displayList" :key="item.id" class="col-12 col-md-3 vegetable_card">
          <p class="product_tag">#NEW</p>


          <div class="product_card_img"> 
            <img :src=getImageUrl(item.image) alt="item.name" class="product_image">
            <!-- <img :src="item.image" alt="item.name" class="product_image"> -->
            <button class="heart" @click="keepProd(item)">
              <i :class="{ 'fa-regular': !item.heartFilled, 'fa-solid': item.heartFilled, 'fa-heart': true }"
                style="color: #f50a0a;"></i>
            </button>

          </div>

          <p class="vegetable_title">{{ item.name }}</p>
          <p class="vegetable_price">${{ item.price }}</p>
          <router-link :to="{
            name: 'productinfo',
            params: { id: item.id }
          }" class="btn-product">查看商品詳情</router-link>
        </div>
        <div class="home-container" >
      <PageNumber @change-page='changePage' :pagesize="reqParams.pageSize" :total='productDisplay.length'
        :page="reqParams.page" />
    </div>
      </div>

    </div>
    
    <button @click="getProductData">getProductData</button>


  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue';
import axios from 'axios';
import PageNumber from '@/components/PageNumber.vue';

import { reactive,ref,onMounted, computed } from 'vue'
import { useProductStore } from '@/stores/Product';


export default {
   components: {
    RouterLink,
    RouterView,
    Breadcrumb,
    PageNumber
  },
  setup() {
    // 篩選條件準備
    const reqParams = reactive({
      // 目前頁碼
      page: 1,
      // 每頁的數量
      pageSize: 6
    })
    // 控制頁碼的變化
    const changePage = (page) => {
      //console.log(page)
      reqParams.page = page
      scrollToTop(); // 新增：在換頁碼時滾動到最上面
    }

    // 滾動到最上面的方法
    const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        };
    //使用ProductStore
    const ProductStore = useProductStore();
    const getProductData = ProductStore.getProductData;

    const originData = ProductStore.products;
    const productDisplay = ref([]);
    const getImageUrl = ProductStore.getImageUrl;
    
    // 在組件被掛載時獲取數據
    onMounted(() => {
      // this.axiosGetData(); // 如果有獲取數據的方法，取消註釋
      productDisplay.value = originData;
    });

    // 麵包屑數據
    const yourBreadcrumbData = ref([
      { text: '首頁', to: '/' },
      { text: '健康小舖', active: true },
    ]);

    const displayList = computed(() => {
      const startIndex = (reqParams.page - 1) * reqParams.pageSize;
      const endIndex = reqParams.page * reqParams.pageSize;
      return productDisplay.value.slice(startIndex, endIndex);
    });

    const keepProd = (item) => {
      item.heartFilled = !item.heartFilled;
    };

    const filterPhoneList = (e) => {
      const filterPhoneType = e.target.value;

      if (!filterPhoneType || filterPhoneType === '') {
        productDisplay.value = originData;
      } else if (['lunchbox', 'oil', 'egg', 'fish', 'vegetable'].includes(filterPhoneType)) {
        productDisplay.value = originData.filter(item => item.type === filterPhoneType);
      }
    };

    const change = ref(); // 定義 'change' 為 ref

    const filter = (filterIndex, filterType) => {
      change.value = filterIndex;

      if (filterType === 'freshfood') {
        productDisplay.value = originData.filter(item => item.index >= 1 && item.index <= 4);
      } else {
        productDisplay.value = originData.filter(item => item.index === filterIndex);
      }

      reqParams.page = 1;
    };

    return {
      changePage,
      reqParams,
      originData,
      productDisplay,
      getImageUrl,
      yourBreadcrumbData,
      toggle: ref(true),
      displayList,
      keepProd,
      filterPhoneList,
      change, // 將 'change' 包含在返回對象中
      filter,
      getProductData,
    };
  },
}
</script>
<style lang="scss">
@import "@/assets/scss/page/product.scss";
</style>