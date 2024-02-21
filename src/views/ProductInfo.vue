<template>
  <Breadcrumb :breadcrumb="yourBreadcrumbData" />
  <div class="productInfo container" v-if="ProductDisplay">
    <div class="productInfo_product row ">
      <div class="productInfo_product_image col-12 col-md-6">
        <!-- <img src="http://localhost/phpLab/image/product/6.jpg" alt=""> -->
        <img :src=getImageUrl(ProductDisplay.product_img) :alt="ProductDisplay.product_img">
      </div>
      <div class="productInfo_product_txt col-12 col-md-6">
        <div class="productInfo_product_txtWrap">
          <div class="productInfo_product_txt_title">
            <h1>{{ ProductDisplay.product_name }}</h1>
            <span>${{ ProductDisplay.product_price }}</span>
          </div>
          <div class="productInfo_product_txt_describe">
            <p>商品編號#{{ ProductDisplay.product_no }}</p>
            <p>{{ ProductDisplay.product_info }}</p>
          </div>
          <div class="productInfo_product_collapse">
            <div class="productInfo_product_collapse_title" @click="toggleCollapse('location')">
              <h3>產地</h3>
              <i class="fa-solid fa-angle-down" style="color: #e73f14;"></i>
            </div>
            <div class="productInfo_product_collapse_txt" v-show="collapseStatus.location">
              <p>{{ ProductDisplay.product_loc }}</p>
            </div>
            <div class="productInfo_product_collapse_title" @click="toggleCollapse('spec')">
              <h3>產品規格</h3>
              <i class="fa-solid fa-angle-down" style="color: #e73f14;"></i>
            </div>
            <div class="productInfo_product_collapse_txt" v-show="collapseStatus.spec">
              <p>{{ ProductDisplay.product_standard }}</p>
            </div>
            <div class="productInfo_product_collapse_title" @click="toggleCollapse('nutrition')">
              <h3>營養標示</h3>
              <i class="fa-solid fa-angle-down" style="color: #e73f14;"></i>
            </div>
            <div class="productInfo_product_collapse_txt" v-show="collapseStatus.nutrition">
              <p>{{ ProductDisplay.product_content }}</p>
            </div>
          </div>
        </div>
        <div class="productInfo_product_btn">
          <div class="productInfo_product_btn_count">
            <button @click="pageQuantityUpdate('decrement')"><i class="fa-solid fa-minus" style="color: #e73f14;"></i></button>
            <span>{{ pageQuantity }}</span>
            <button @click="pageQuantityUpdate('increment')"><i class="fa-solid fa-plus" style="color: #e73f14;"></i></button>
          </div>
          <button type="button" class="btn-primary" @click="addCart">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <P>此商品缺貨</P>
  </div>
  
  <!-- <div class="more_title">
    <hr>
    <h2>多點健康</h2>
  </div>
  <div class="more_health container">
    <div class="more_product ">
      <div v-for="item in getRandomSubset(ProductStore.products, 4)" :key="item.id" class="more_itemsCard col-12 col-lg-3">
        <p class="product_tag">#NEW</p>
          <div class="product_card_img">
            <img :src=getImageUrl(item.image) alt="item.name">
          </div>
          <p class="vegetable_title">{{ item.name }}</p>
          <p class="vegetable_price">{{ item.price }}</p>
          <router-link :to="{
              name: 'productinfo',
              params: {id: item.id}}" 
            class="btn-product"
            >查看商品詳情</router-link>
      </div>
    </div>
  </div> -->
</template>


<script>
import  Breadcrumb  from "@/components/Breadcrumb.vue";
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/Product';
import { useCartStore } from "@/stores/cart";
import { computed,ref,onMounted } from 'vue';

export default {
  setup() {
    //使用ProductStore
    const ProductStore = useProductStore();
    //使用composition API中的route 
    const route = useRoute();

    onMounted(()=>{
      ProductStore.getProductData();
    })
    //const ProductDisplay = ProductStore.products;

    //使用ProductStore中根據route綁定no所送出的data
    const ProductNo = computed(()=>parseInt(route.params.product_no));
    const ProductDisplay = computed(()=>ProductStore.getProductByNo(ProductNo.value));
    //抓到圖片路徑
    const getImageUrl = ProductStore.getImageUrl;
    
    //頁面商品數量加減
    const pageQuantity = ref(1);
    const pageQuantityUpdate = (action) => {
      if (action === 'increment') {
        pageQuantity.value += 1;
      } else if (action === 'decrement' && pageQuantity.value > 1) {
        pageQuantity.value -= 1;
      }
    };

    //使用CartStore
    const CartStore = useCartStore();
    //使用CartStore中的addCart(),把資料傳回去
    const addCart = ()=> CartStore.addCart({
      id: ProductDisplay.value.id,
      name:ProductDisplay.value.name,
      quantity: pageQuantity.value,
      image:ProductDisplay.value.image,
      price:ProductDisplay.value.price,
      checked:ProductDisplay.value.checked,
    });
    //會生成一個介於 -0.5 到 0.5 之間的隨機數,大於 0.5，則返回正數，a 和 b 位置交換
    const getRandomSubset = (array, size) => {
      const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
      return shuffledArray.slice(0, size);
    };

    const collapseStatus = ref({ 
      location: false,
      spec: false,
      nutrition: false
    });
    const toggleCollapse = (collapseName)=> {
      collapseStatus.value[collapseName] = !collapseStatus.value[collapseName]
      //console.log(collapseStatus.value);
    };

    const yourBreadcrumbData = ref([
        { text: '首頁', to: '/' },
        { text: '健康小舖', to: '/products' },
        { text: '商品資訊', active: true }
      ])

    return {
      ProductStore,
      CartStore,
      ProductDisplay,
      pageQuantity,
      pageQuantityUpdate,
      addCart,
      getRandomSubset,
      getImageUrl,
      collapseStatus,
      toggleCollapse,
      yourBreadcrumbData
    }
  },
  components: {
    Breadcrumb
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
@import "@/assets/scss/page/_productInfo.scss";
</style>