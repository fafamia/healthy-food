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
      <ul>
        <li>
          <div class="lunchbox" @click="filter(0, 'lunchbox')">調理包</div>
          <hr>
        </li>
        <li>
          <div class="freshfood" @click="toggle = !toggle; filter(5, 'freshfood')">
            <h3>生鮮食材</h3>
            <i class="fa-solid fa-angle-down" style="color: #e73f14;"></i>
          </div>
          <hr>
          <div class="oil" v-if="!toggle" @click="filter(1, 'oil')">雜糧、油品</div>
          <div class="egg" v-if="!toggle" @click="filter(2, 'egg')">蛋、豆</div>
          <div class="fish" v-if="!toggle" @click="filter(3, 'fish')">魚、肉</div>
          <div class="vegetable" v-if="!toggle" @click="filter(4, 'vegetable')">蔬菜</div>
          <hr v-if="!toggle">
        </li>
      </ul>

      <div class="phoneList">
        <select @change="filterPhoneList">
          <option value="">所有商品</option>
          <option value="lunchbox">調理包</option>
          <option value='oil'>雜糧、油品</option>
          <option value='egg'>蛋、豆</option>
          <option value='fish'>魚、肉</option>
          <option value='vegetable'>蔬菜</option>
        </select>
      </div>
      <div class="row product_items">
        <template v-for="outerIndex in 9" :key="outerIndex">
          <div v-for="(item, innerIndex) in productDisplay" :key="`${outerIndex}-${innerIndex}`"
            class="col-12 col-md-3 vegetable_card">
            <p class="product_tag">#NEW</p>
            <div class="product_card_img">
              <img :src="item.image" alt="item.name">
            </div>
            <p class="vegetable_title">{{ item.name }}</p>
            <p class="vegetable_price">{{ item.price }}</p>
            <router-link to="/productinfo" class="btn-product">查看商品詳情</router-link>
          </div>
        </template>
      </div>
    </div>

    <div class="home-container">
      <PageNumber @change-page='changePage' :pagesize='9' :total='45' :page='1' />
    </div>

  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue';
import axios from 'axios';
import PageNumber from '@/components/PageNumber.vue';

import { reactive } from 'vue'


export default {
  data() {
    return {
      // 麵包屑數據
      yourBreadcrumbData: [
        { text: '首頁', to: '/' },
        { text: '健康小舖', active: true },
      ],
      displayData: [
        {
          index: 4,
          name: "冷凍蔬菜",
          price: "$330",
          image: "../../src/assets/images/product/vegetable_cover.png",
          type: "vegetable"
        },
        {
          index: 0,
          name: "南瓜蔬食調理包",
          price: "$170",
          image: "../../src/assets/images/product/pumpkin_cover.png",
          type: "lunchbox"
        },
        {
          index: 2,
          name: "有機雞蛋",
          price: "$100",
          image: "../../src/assets/images/product/eggs-cover.png",
          type: "egg"
        },
        {
          index: 1,
          name: "食用油",
          price: "$300",
          image: "../../src/assets/images/product/oil-cover.png",
          type: "oil"
        },
        {
          index: 3,
          name: "水產養殖鮮魚",
          price: "$500",
          image: "../../src/assets/images/product/fish-cover.png",
          type: "fish"
        },
      ],
      toggle: true,
      productDisplay: []


    };
  },
  components: {
    RouterLink,
    RouterView,
    Breadcrumb,
    PageNumber
  },
  created() {
    // this.axiosGetData();
    this.productDisplay = this.displayData;

  },
  setup() {
    // 篩選條件準備
    const reqParams = reactive({
      // 目前頁碼
      page: 1,
      // 每頁的數量
      pageSize: 9
    })
    // 控制頁碼的變化
    const changePage = (page) => {
      // console.log(page)
      reqParams.page = page
    }

    return { changePage }
  },


  methods: {
    axiosGetData() {
      // axios.get('https://tibamef2e.com/chd103/g1/phps/shop.php')

      //   .then(res => {
      //     if (res && res.data) {
      //       // this.responseData = res.data
      //       this.displayData = res.data
      //     }
      //   })
    },
    // getImage(item) {
    //   return `https://tibamef2e.com/chd103/g1/image/productimage/${item.prod_img}`;
    // },
    filterPhoneList(e) {
      const filterPhoneType = e.target.value;

      if (!filterPhoneType || filterPhoneType === '') {
        // 如果選擇的是空字符串或 undefined，顯示所有商品
        this.productDisplay = this.displayData;
      } else if (['lunchbox', 'oil', 'egg', 'fish', 'vegetable'].includes(filterPhoneType)) {
        // 否則，進行其他商品類型的篩選
        this.productDisplay = this.displayData.filter(item => {
          return item.type === filterPhoneType;
        });
      }
    },



    filter(filterIndex, filterType) {
      this.change = filterIndex
      //篩選商品:透過陣列filter方法篩選物件中type相同的商品
      if (filterType === 'freshfood') {
        this.productDisplay = this.displayData.filter(item => {
          return item.index >= 1 && item.index <= 4;
        })
      } else {
        this.productDisplay = this.displayData.filter(item => {
          // console.log(this.productDisplay.length);
          return item.index === filterIndex
        })
      }
    },

  }
}
</script>

<style lang="scss">
@import "@/assets/scss/page/_product.scss";
</style>
