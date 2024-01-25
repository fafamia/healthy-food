<template>
  <Breadcrumb :breadcrumb="yourBreadcrumbData" />
  <div class="productInfo container" v-if="productInfo">
    <div class="productInfo_product row ">
      <div class="productInfo_product_image col-12 col-md-6">
        <img :src="productInfo.image" alt="product1">
      </div>
      <div class="productInfo_product_txt col-12 col-md-6">
        <div class="productInfo_product_txtWrap">
          <div class="productInfo_product_txt_title">
            <h1>{{ productInfo.name }}</h1>
            <span>${{productInfo.price}}</span>
          </div>
          <div class="productInfo_product_txt_describe">
            <p>商品編號#{{ productInfo.id }}</p>
            <p>{{productInfo.desc}}</p>
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
            <button @click="updateCount('decrement')"><i class="fa-solid fa-minus" style="color: #e73f14;"></i></button>
            <span>{{ count }}</span>
            <button @click="updateCount('increment')"><i class="fa-solid fa-plus" style="color: #e73f14;"></i></button>
          </div>
          <button type="button" class="btn-primary" @click="addCart">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <P>查無此商品</P>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue"
import { useProductStore } from '@/stores/Product';
import { useCartStore } from "@/stores/Cart";

export default {
  setup() {
    const CartStore = useCartStore();
    return {
      CartStore
    }
  },
  data() {
    return {
      yourBreadcrumbData: [
        { text: '首頁', to: '/' },
        { text: '健康小舖', to: '/products' },
        { text: '商品資訊', active: true }
      ],
      collapseStatus:{
        location:false,
        spec:false,
        nutrition:false
      },
      count: 1,
      productInfo:{},
    }
  },
  computed:{
    productId(){
      return this.$route.params.id
    },
  },
  watch:{
    productId(newId){
      return fetchProductInfo(newId)
    },
  },
  methods: {
    toggleCollapse(collapseName){
      this.collapseStatus[collapseName] = !this.collapseStatus[collapseName]
    },
    updateCount(action){
      if (action === 'increment'){
        this.count +=1
      }else if(action === 'decrement' && this.count >1){
        this.count -= 1;
      }
    },
    fetchProductInfo(id){
      const productStore = useProductStore();
      this.productInfo = productStore.getProductById(parseInt(id));
    },
    addCart(){
      this.CartStore.addCart({
        id: this.productInfo.id,
        name:this.productInfo.name,
        count: this.count,
        img:this.productInfo.image,
      })
    },
  },
  created(){
    this.fetchProductInfo(this.productId);
  },
  components: {
    Breadcrumb
  },
}
</script>

