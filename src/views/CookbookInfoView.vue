<template>
  <div class="cookbookinfo">
    <div class="banner">
      <img src="/src/assets/images/cookbook/info_banner.jpg" alt="食譜內頁">
      <h1>食譜內頁</h1>
    </div>
    <breadcrumb :breadcrumb="yourBreadcrumbData"></breadcrumb>
    <div class="recipe">
      <div v-if="loading">loading...</div>
      <div v-else-if="nodata">nodata...</div>
      <div v-else class="recipe_container ">
        <div class="title">
          <h6>{{ responseData.prod_name }}</h6>
          <span>食譜編號#{{ responseData.prod_id }}</span>
        </div>
        <div class="recipe_card">
          <div class="recipe_img">
            <img :src="`https://tibamef2e.com/chd103/g5/img/${responseData.prod_img1}`" :alt="responseData.prod_name">
          </div>
          <div class="box">
            <p>本篇推薦食材：<br>
              {{ responseData.prod_des2 }}</p>
            <a href="#">選購go→</a>
            <div class="box_btn">
              <button type="button" @click="toggleLike(responseData)">
                <i :class="responseData.iconLike"></i>讚
              </button>
              <button type="button" @click="toggleBookmark(responseData)">
                <i :class="responseData.iconBookmark"></i>收藏
              </button>
            </div>
          </div>
        </div>
        <div class="time">
          <span>份量：{{ responseData.prod_status }}</span>
          <span>時間：{{ responseData.prod_price }}</span>
        </div>
        <div class="ingredients">
          <div class="name">
            <h5>食材</h5>
          </div>
          <p>{{ responseData.prod_des1 }}</p>

        </div>


        <div class="content">
          <h5>製作步驟：</h5>
          <p>{{ responseData.prod_des1 }}</p>
        </div>
      </div>

      <div class="comment">
        <h4>有{{ comments.length }}個人一起做</h4>
        <div class="comment-card-wrapper">
          <button @click="scrollComment(-1)" :disabled="currentIndex === 0"><i class="fa-solid fa-angle-left"></i></button>
          <div class="comment_card" >
            <ul>
              <li v-for="comment in displayedComments" :key="comment.id">
                <article>
                  <div class="card_top">
                    <h5>{{ comment.prod_name }}</h5>
                    <h6>{{ comment.prod_type }}</h6>
                    <p>{{ comment.prod_des1 }}</p>
                  </div>
                  <div class="card_bottom">
                    <div class="comment_pic">
                      <img :src="`https://tibamef2e.com/chd103/g5/img/${comment.prod_img1}`" :alt="comment.prod_name">
                    </div>
                    <div class="icon">
                      <i class="fa-solid fa-triangle-exclamation"></i>
                      <div class="comment_like">
                        <i @click="toggleLike(comment)" :class="parseClass(comment.like)"></i>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </div>

          <button @click="scrollComment(1)"
            :disabled="currentIndex >= totalComments - commentsPerPage || currentIndex + commentsPerPage >= totalComments"><i class="fa-solid fa-angle-right"></i></button>

        </div>


      </div>
      <div class="letter">
        <h5>我要留言</h5>
        <div class="letter_box">
          <button type="button" class="login">登入</button>
          <button type="button" class="upload">↑上傳圖片 
          </button>
          <br>
          <textarea name="comment" id="comment" cols="15" rows="6" placeholder="輸入內容（最多90字）
          "></textarea>
          <br>
          <button type="submit" class="submit">送出</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue';
import axios from 'axios';

export default {
  data() {
    return {
      // 麵包屑數據
      yourBreadcrumbData: [
        { text: '首頁', to: '/' },
        { text: '熱門食譜', to: '/cookbook' },
        { text: '食譜內頁', active: true }
      ],
      responseData: {
        like: true,
        iconLike: '',
      },
      loading: true,
      comments: [],
      currentIndex: 0,
      commentsPerPage: 3,


    };
  },
  mounted() {
    this.axiosGetData();
    this.toggleLike(this.responseData);
    this.toggleBookmark(this.responseData);
    this.axiosGetComments();

  },
  computed: {
    nodata() {
      return Object.keys(this.responseData).length === 0
    },
    displayedComments() {
      const startIndex = this.currentIndex;
      const endIndex = startIndex + this.commentsPerPage;
      return this.comments.slice(startIndex, endIndex);
    },
    totalComments() {
      return this.comments.length;
    },
    transformValue() {
      const itemWidth = 387; // 調整為卡片的寬度
      return `-${this.currentIndex * itemWidth}px`;
    },
  },
  components: {
    RouterLink,
    RouterView,
    Breadcrumb,
  },
  methods: {
    axiosGetData() {
      const pageId = this.$route.params.id;
      axios.get('https://tibamef2e.com/chd103/g5/phps/ProductM.php')
        .then(res => {
          if (res && res.data) {
            this.loading = false;
            const target = res.data.find(item => item.id == pageId);
            this.responseData = target ? target : {};
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    toggleLike(responseData) {
      responseData.like = !responseData.like;
      responseData.iconLike = responseData.like ? 'fa-solid fa-thumbs-up' : '';
    },
    toggleBookmark(responseData) {
      responseData.bookmark = !responseData.bookmark;
      responseData.iconBookmark = responseData.bookmark ? 'fa-solid fa-bookmark' : '';
    },
    axiosGetComments() {
      const pageId = this.$route.params.id;
      axios.get('https://tibamef2e.com/chd103/g5/phps/ProductM.php')
        .then(res => {
          if (res && res.data) {
            this.comments = res.data.map(comment => ({ ...comment, like: false }));
          }
        })
        .catch(error => {
          console.error('Error fetching comments:', error);
        });
    },
    toggleCommentLike(comment) {

      comment.like = !comment.like;
      comment.iconLike = comment.like ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';

    },
    parseClass(like) {
      return like ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';

    },
    nextComment() {
      const maxIndex = this.comments.length - this.commentsPerPage;
      if (this.currentIndex + this.commentsPerPage < maxIndex) {
        this.currentIndex += this.commentsPerPage;
      } else {

        this.currentIndex = maxIndex;
      }
    },

    prevComment() {
      if (this.currentIndex - this.commentsPerPage >= 0) {
        this.currentIndex -= this.commentsPerPage;
      } else {

        this.currentIndex = 0;
      }
    },
    scrollComment(direction) {
      const newIndex = this.currentIndex + direction;
      if (newIndex >= 0 && newIndex <= this.totalComments - this.commentsPerPage) {
        this.currentIndex = newIndex;
      }
    },





  }

};
</script>

<style lang="scss">
@import "@/assets/scss/page/_cookbook.scss";
@import "@/assets/scss/page/_cookbookinfo.scss";
</style>



