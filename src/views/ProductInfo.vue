<template>
  <Breadcrumb :breadcrumb="yourBreadcrumbData" />
  <div class="productInfo container" v-if="ProductDisplay">
    <div class="productInfo_product row ">
      <div class="productInfo_product_image col-12 col-md-6">
        <img :src="ProductDisplay.image" alt="product1">
      </div>
      <div class="productInfo_product_txt col-12 col-md-6">
        <div class="productInfo_product_txtWrap">
          <div class="productInfo_product_txt_title">
            <h1>{{ ProductDisplay.name }}</h1>
            <span>${{ ProductDisplay.price }}</span>
          </div>
          <div class="productInfo_product_txt_describe">
            <p>商品編號#{{ ProductDisplay.id }}</p>
            <p>{{ ProductDisplay.desc }}</p>
          </div>
          <div class="productInfo_product_collapse">
            <div class="productInfo_product_collapse_title" @click="toggleCollapse('location')">
              <h3>產地</h3>
              <i class="fa-solid fa-angle-down" style="color: #e73f14;"></i>
            </div>
            <div class="productInfo_product_collapse_txt" v-show="collapseStatus.location">
              <p>桃園</p>
            </div>
            <div class="productInfo_product_collapse_title" @click="toggleCollapse('spec')">
              <h3>產品規格</h3>
              <i class="fa-solid fa-angle-down" style="color: #e73f14;"></i>
            </div>
            <div class="productInfo_product_collapse_txt" v-show="collapseStatus.spec">
              <p>300g/包</p>
            </div>
            <div class="productInfo_product_collapse_title" @click="toggleCollapse('nutrition')">
              <h3>營養標示</h3>
              <i class="fa-solid fa-angle-down" style="color: #e73f14;"></i>
            </div>
            <div class="productInfo_product_collapse_txt" v-show="collapseStatus.nutrition">
              <p>
                <li>每份量： 100 克</li>
                <li>熱量： 120 大卡</li>
                <li>脂肪： 2 克</li>
                <li>膽固醇： 60 毫克</li>
                <li>鈉： 70 毫克</li>
                <li>碳水化合物： 0 克</li>
              </p>
            </div>
          </div>
        </div>
        <div class="productInfo_product_btn">
          <div class="productInfo_product_btn_count">
            <button @click="updateQuantity('decrement')"><i class="fa-solid fa-minus" style="color: #e73f14;"></i></button>
            <span>{{ quantity }}</span>
            <button @click="updateQuantity('increment')"><i class="fa-solid fa-plus" style="color: #e73f14;"></i></button>
          </div>
          <button type="button" class="btn-primary" @click="addCart">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <P>查無此商品</P>
  </div>
  
  <!-- <div class="more_title">
    <hr>
    <h2>多點健康</h2>
  </div>
  <div class="more_health container">
    <div class="more_product row ">
      <div v-for="item in getRandomSubset(originData, 4)" :key="item.id" class="more_itemsCard col-12 col-lg-3">
        <p class="product_tag">#NEW</p>
          <div class="product_card_img">
            <img :src="item.image" alt="item.name">
          </div>
          <p class="vegetable_title">{{ item.name }}</p>
          <p class="vegetable_price">{{ item.price }}</p>
          <router-link to="/productinfo" class="btn-product">查看商品詳情</router-link>
      </div>
    </div>

  </div> -->
</template>


<script>
import  Breadcrumb  from "@/components/Breadcrumb.vue";
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/Product';
import { ref } from 'vue';

import { useCartStore } from "@/stores/Cart";


export default {
  setup() {
    const route = useRoute();
    const ProductStore = useProductStore();
    const CartStore = useCartStore();
    

    const ProductId = computed(()=>parseInt(route.params.id));
    const ProductDisplay = computed(()=>ProductStore.getProductById(ProductId.value));
    
    const quantity = ref(1);
    
    const updateQuantity = (action)=>{
      CartStore.updateQuantity(quantity.value,action);
      console.log(quantity.value);
    }
    //CartStore.setProductInfo(ProductDisplay.value)
    const addCart = ()=> CartStore.addCart({
      id: ProductDisplay.value.id,
      name:ProductDisplay.value.name,
      quantity: CartStore.currentQuantity,
      image:ProductDisplay.value.image,
    });
    
    return {
      ProductDisplay,
      CartStore,
      quantity,
      addCart,
      updateQuantity,
    }
  },
  data() {
    return {
      yourBreadcrumbData: [
        { text: '首頁', to: '/' },
        { text: '健康小舖', to: '/products' },
        { text: '商品資訊', active: true }
      ],
      collapseStatus: {
        location: false,
        spec: false,
        nutrition: false
      },
      //ProductInfo:{},
    }
  },
  computed:{
    // productId(){
    //   return this.$route.params.id
    // },
  },
  watch:{
    // productId(newId){
    //   return fetchProductInfo(newId)
    // },
  },
  methods: {
    toggleCollapse(collapseName) {
      this.collapseStatus[collapseName] = !this.collapseStatus[collapseName]
    },
    // fetchProductInfo(id){
    //   const productStore = useProductStore();
    //   this.productInfo = productStore.getProductById(parseInt(id));
    // },
  },
  created(){
    // this.fetchProductInfo(this.productId);
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