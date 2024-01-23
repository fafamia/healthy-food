<script>
import Breadcrumb from "@/components/Breadcrumb.vue"

export default {
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
      cart:[],
    }
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
    addTOCart(product){
      console.log(product);
      this.cart.push(this)
    },
    increment() {
      this.count += 1;
    },
    addCart(){
      //接續day5下午的購物車流程GoGo~~
    },
  },
  components: {
    Breadcrumb
  }
}
</script>


<template>
  <Breadcrumb :breadcrumb="yourBreadcrumbData" />
  <div class="productInfo container">
    <div class="productInfo_product row ">
      <div class="productInfo_product_image col-12 col-md-6">
        <img src="../assets/images/productInfo/product1.png" alt="product1">
      </div>
      <div class="productInfo_product_txt col-12 col-md-6">
        <div class="productInfo_product_txtWrap">
          <div class="productInfo_product_txt_title">
            <h1>冷凍蔬菜</h1>
            <span>$330</span>
          </div>
          <div class="productInfo_product_txt_describe">
            <p>商品編號#00001</p>
            <p>精選優質食材，以先進冷凍技術保存新鮮風味。營養豐富，方便快速，每一口都是對健康的呵護。從現在開始，享受美味。</p>
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
          <button 
          type="button" 
          class="btn-primary"
          @click="addTOCart()"
          >
          加入購物車</button>
          <button type="button" class="btn-primary" @click="addCart">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>



