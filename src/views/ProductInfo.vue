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
            <span>${{ productInfo.price }}</span>
          </div>
          <div class="productInfo_product_txt_describe">
            <p>商品編號#{{ productInfo.id }}</p>
            <p>{{ productInfo.desc }}</p>
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
  
  <div class="more_title">
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

  </div>
</template>
<style lang="scss">
@import "@/assets/scss/page/_productInfo.scss";
</style>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue"
import { useProductStore } from '@/stores/Product';
import { useCartStore } from "@/stores/Cart";


export default {
  setup() {
    const CartStore = useCartStore();
    //會生成一個介於 -0.5 到 0.5 之間的隨機數,大於 0.5，則返回正數，a 和 b 位置交換
    const getRandomSubset = (array, size) => {
      const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
      return shuffledArray.slice(0, size);
    };
    return {
      CartStore,
      getRandomSubset,
      originData : [
  
  {
    index:0,
    id: 1001,
    name: "南瓜蔬食調理包",
    price: "$170",
    image: "../../src/assets/images/product/pumpkin_cover.png",
    type: "lunchbox"
  },
  {
    index:0,
    id: 1101,
    name: "南瓜蔬食調理包",
    price: "$170",
    image: "../../src/assets/images/product/pumpkin_cover.png",
    type: "lunchbox"
  },
  {
    index:0,
    id: 1201,
    name: "南瓜蔬食調理包",
    price: "$170",
    image: "../../src/assets/images/product/pumpkin_cover.png",
    type: "lunchbox"
  },
  
  {
    index:1,
    id: 2001,
    name: "有機雞蛋",
    price: "$100",
    image: "../../src/assets/images/product/eggs-cover.png",
    type: "egg"
  },
  {
    index:1,
    id: 2101,
    name: "有機雞蛋",
    price: "$100",
    image: "../../src/assets/images/product/eggs-cover.png",
    type: "egg"
  },
  {
    index:1,
    id: 2201,
    name: "有機雞蛋",
    price: "$100",
    image: "../../src/assets/images/product/eggs-cover.png",
    type: "egg"
  },
  {
    index:2,
    id: 3001,
    name: "食用油",
    price: "$300",
    image: "../../src/assets/images/product/oil-cover.png",
    type: "oil"
  },
  {
    index:2,
    id: 3101,
    name: "食用油",
    price: "$300",
    image: "../../src/assets/images/product/oil-cover.png",
    type: "oil"
  },
  {
    index:2,
    id: 3201,
    name: "食用油",
    price: "$300",
    image: "../../src/assets/images/product/oil-cover.png",
    type: "oil"
  },
  {
    index:3,
    id: 4001,
    name: "水產養殖鮮魚",
    price: "$500",
    image: "../../src/assets/images/product/fish-cover.png",
    type: "fish"
  },
  {
    index:3,
    id: 4101,
    name: "水產養殖鮮魚",
    price: "$500",
    image: "../../src/assets/images/product/fish-cover.png",
    type: "fish"
  },
  {
    index:3,
    id: 4201,
    name: "水產養殖鮮魚",
    price: "$500",
    image: "../../src/assets/images/product/fish-cover.png",
    type: "fish"
  },
  {
    index:4,
    id: 5001,
    name: "冷凍蔬菜",
    price: "$330",
    image: "../../src/assets/images/product/vegetable_cover.png",
    type: "vegetable"
  },
  {
    index:4,
    id: 5101,
    name: "冷凍蔬菜",
    price: "$330",
    image: "../../src/assets/images/product/vegetable_cover.png",
    type: "vegetable"
  },
  {
    index:4,
    id: 5201,
    name: "冷凍蔬菜",
    price: "$330",
    image: "../../src/assets/images/product/vegetable_cover.png",
    type: "vegetable"
  },
]
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
      count: 1,
      productInfo: {},
    }
  },
  computed: {
    productId() {
      return this.$route.params.id
    },
  },
  watch: {
    productId(newId) {
      return fetchProductInfo(newId)
    },
  },
  methods: {
    toggleCollapse(collapseName) {
      this.collapseStatus[collapseName] = !this.collapseStatus[collapseName]
    },
    updateCount(action) {
      if (action === 'increment') {
        this.count += 1
      } else if (action === 'decrement' && this.count > 1) {
        this.count -= 1;
      }
    },
    fetchProductInfo(id) {
      const productStore = useProductStore();
      this.productInfo = productStore.getProductById(parseInt(id));
    },
    addCart() {
      this.CartStore.addCart({
        id: this.productInfo.id,
        name: this.productInfo.name,
        count: this.count,
        img: this.productInfo.image,
      })
    },
  },
  created() {
    this.fetchProductInfo(this.productId);
  },
  components: {
    Breadcrumb
  },
}
</script>

