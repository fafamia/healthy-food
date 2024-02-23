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
              <button type="button" @click="toggleLike(comment)">
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

        <h4>有{{ messages.length }}個人一起做</h4>
        <div class="comment-card-wrapper">
          <button @click="scrollComment(-1)" :disabled="currentIndex === 0"><i
              class="fa-solid fa-angle-left"></i></button>
          <div class="comment_card" v-if="messages.length > 0">
            <ul>
              <li v-for="(message, index) in messages" :key="index">
                <article>
                  <div class="card_top">
                    <h5>{{ message.author }}</h5>
                    <h6>{{ message.timestamp }}</h6>
                    <p>{{ message.content }}</p>
                  </div>
                    <div class="card_bottom">
                      <div class="comment_pic">
                        <img v-if="message.image" :src="message.image" alt="留言圖片">
                        <!-- <img src="https://picsum.photos/300/200/?random=10"> -->
                        <!-- <img :src="`https://tibamef2e.com/chd103/g5/img/${comment.prod_img1}`" :alt="comment.prod_name"> -->
                      </div>
                      <div class="icon">
                        <button @click="report(index)"><i class="fa-solid fa-triangle-exclamation"></i></button>
                        <div class="comment_like">
                          <i @click="toggleLike(comment)" :class="parseClass(comment.like)"></i>
                          <span>{{ comment.likeCount }}</span>
                        </div>
                      </div>
                   
                  </div>
                </article>
              </li>
            </ul>
            <button @click="scrollComment(1)"
              :disabled="currentIndex >= totalComments - commentsPerPage || currentIndex + commentsPerPage >= totalComments"><i
                class="fa-solid fa-angle-right"></i></button>
          </div>
          <div v-else>
            <p>暫無留言</p>
          </div>
        </div>


      </div>


    </div>
    <div class="letter">
      <h5>我要留言</h5>
      <div class="letter_box">
        <button type="button" class="login">登入</button>
        <input type="file" id="fileInput" @change="handleFileUpload">
        <br>
        <textarea name="comment" id="comment" cols="15" rows="6" placeholder="輸入內容（最多90字）
          " v-model="newMessage"></textarea>
        <br>
        <button type="submit" class="submit" @click="submitMessage">送出</button>
      </div>
    </div>
    <div v-if="reportModalVisible" class="report-modal">
      <h3>檢舉</h3>
      <p>提醒您：請在真正看到不適當言論時才使用檢舉功能，避免濫用，以確保我們能維護用戶良好的評論環境，謝謝您。</p>
      <button @click="closeReportModal" class="close-button">×</button>
      <textarea v-model="reportContent" placeholder="請輸入檢舉內容"></textarea>
      <br>
      <button @click="submitReport" class="submit-button">送出</button>
    </div>
    <button @click="clearMessages">.</button>
  </div>
</template>

<script>

import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue';
import axios from 'axios';
import { mapActions } from 'pinia'
import { userStore } from '../stores/user.js'

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
        likeCount: 0,
      },
      loading: true,
      comments: [],
      currentIndex: 0,
      commentsPerPage: 3,
      reportModalVisible: false,
      reportContent: '',
      messages: [],
      newMessage: '',
      comment: ''


    };
  },
  mounted() {
    this.axiosGetData();
    this.toggleLike(this.responseData);
    this.toggleBookmark(this.responseData);
    this.axiosGetComments();
    const storedMessages = localStorage.getItem('messages');
  if (storedMessages) {
    // 如果有，则将其加载到页面上
    this.messages = JSON.parse(storedMessages);
  };

  },
  computed: {
    nodata() {
      return Object.keys(this.responseData).length === 0
    },
    displayedComments() {

      if (this.isMobile) {
        return this.messages.slice(this.currentIndex, this.currentIndex + 1);
      } else {
        return this.messages.slice(this.currentIndex, this.currentIndex + 3);
      }
    },
    isMobile() {
      return window.innerWidth <= 802;
    },
    totalComments() {
      return this.messages.length;
    },
    transformValue() {
      const itemWidth = 387; // 調整為卡片的寬度
      return `-${this.currentIndex * itemWidth}px`;
    },
    currentId() {
      return this.$route.params.id
    },
  },
  components: {
    RouterLink,
    RouterView,
    Breadcrumb,
    mapActions,
    userStore,
  },
  methods: {
    axiosGetData() {
      const pageId = this.$route.params.id;
      axios.get('https://tibamef2e.com/chd103/g5/phps/ProductM.php')
        .then(res => {
          if (res && res.data) {
            this.loading = false;
            const target = res.data.find(item => item.prod_id == pageId);
            this.responseData = target ? target : {};
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    toggleLike(comment) {
      comment.like = !comment.like;
      comment.iconLike = comment.like ? 'fa-solid fa-thumbs-up' : '';
      comment.likeCount = comment.like ? comment.likeCount + 1 : comment.likeCount - 1;
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
            this.comments = res.data.map(comment => ({ ...comment, like: false, likeCount: 0 }));
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
      const maxIndex = this.messages.length - this.commentsPerPage;
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
    report(index) {
      this.reportModalVisible = true;
      const submitReport = () => {
        this.submitReport(index);
      };
    },
    closeReportModal() {
      this.reportModalVisible = false;
      this.reportContent = '';
    },
    submitReport(index) {

      if (!this.reportContent.trim()) {
        alert('內容不得為空白');
        return;
      }
      const currentCommentId = this.displayedComments[index].id;

    },
    submitMessage() {
      if (this.newMessage.trim() !== '') {
        const message = {
          content: this.newMessage,
          author: '用户A',
          timestamp: new Date().toLocaleString(),
          image: this.newMessage.image || null 
        };
        // 添加新留言到留言列表
        this.messages.push(message);
        // 将留言列表保存到本地存储中
        localStorage.setItem('messages', JSON.stringify(this.messages));
        // 提交成功后清空留言输入框
        this.newMessage = '';
        this.newMessage.image = '';
      }
    },
    clearMessages() {
  localStorage.removeItem('messages');
  // 清空页面上的留言列表
  this.messages = [];
},
handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        // 将图片 URL 添加到留言数据中
        this.newMessage.image = imageUrl;
      };
      reader.readAsDataURL(file);
    }



  }

};
</script>

<style lang="scss">
@import "@/assets/scss/page/_cookbook.scss";
@import "@/assets/scss/page/_cookbookinfo.scss";
</style>



