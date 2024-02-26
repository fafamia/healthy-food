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
          <div class="lunchbox" v-for="prodClass in productClass" :key="prodClass.product_class_no" @click="filter(prodClass.product_class_no)">{{prodClass.product_class_name}}</div>
          <hr>
        </li>
      </ul>
      <div class="phoneList">
        <select @change="filterPhoneList">
          <option value="">所有商品</option>
          <option v-for="prodClass in productClass" :value="prodClass.product_class_no">{{prodClass.product_class_name}}</option>
        </select>
      </div>
      <div class="row product_items">
        <div v-for="item in displayList" :key="item.product_no" class="col-12 col-md-3 vegetable_card">
          <p class="product_tag">#{{ item.product_tag_name }}</p>
          <div class="product_card_img"> 
            <img :src=getImageUrl(item.product_img) :alt="item.product_name" class="product_image">
            <button class="heart" @click="keepProd(item)">
              <i :class="{ 'fa-regular': !item.heartFilled, 'fa-solid': item.heartFilled, 'fa-heart': true }"
                style="color: #f50a0a;"></i>
            </button>
          </div>
          <p class="vegetable_title">{{ item.product_name }}</p>
          <p class="vegetable_price">${{ item.product_price }}</p>
          <router-link :to="{
            name: 'productinfo',
            params: { product_no: item.product_no }
          }" class="btn-product">查看商品詳情</router-link>
        </div>
        <div class="home-container" >
      <PageNumber @change-page='changePage' :pagesize="reqParams.pageSize" :total='productDisplay.length'
        :page="reqParams.page" />
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue';
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
    // 麵包屑數據
    const yourBreadcrumbData = ref([
      { text: '首頁', to: '/' },
      { text: '健康小舖', active: true },
    ]);
    //使用ProductStore
    const ProductStore = useProductStore();
    const originData = ref([]);
    const productDisplay = ref([]);
    const getImageUrl =ref('');
    const productClass = ref([]);
    //要在vue模板編譯後引入，如果直接放在setup中會比pinia快
    onMounted(async() => {
      await ProductStore.getProductData();
      await ProductStore.getProductClassData();
      originData.value = ProductStore.products;
      productDisplay.value = originData.value;
      productClass.value = ProductStore.productClass;
      getImageUrl.value = ProductStore.getImageUrl;
    });

    //用class篩選
    const filter = (classNo) => {
      if(classNo !== 0){
        //database:sql->int, serve-side:php->string(jaon response), clint-side:vue(HTML-JS)->string(select-option)
        //參數再不同地方轉傳容易有型別不一樣的問題，統一型別再比較或是用 == 比較
        productDisplay.value = originData.value.filter(item => item.product_class_no.toString() === classNo.toString());
      }else{
        productDisplay.value = originData.value;
      }
    };
    const filterPhoneList = (e) => {
      filter(e.target.value);
    };

    //頁數判斷，從1開始，每頁只有6樣商品
    const reqParams = reactive({
      page: 1,
      pageSize: 6
    })
    const displayList = computed(() => {
      const startIndex = (reqParams.page - 1) * reqParams.pageSize;
      const endIndex = reqParams.page * reqParams.pageSize;
      return productDisplay.value.slice(startIndex, endIndex);
    });
    // 控制頁碼的變化
    const changePage = (page) => {
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

    const keepProd = (item) => {
      item.heartFilled = !item.heartFilled;
    };
    
    return {
      originData,
      productDisplay,
      productClass,
      getImageUrl,
      displayList,
      filter,
      changePage,
      reqParams,
      yourBreadcrumbData,
      keepProd,
      filterPhoneList,
    };
  },
}
</script>
<style lang="scss">
@import "@/assets/scss/page/product.scss";
</style>