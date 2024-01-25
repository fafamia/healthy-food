<template>
    <div class="home">
        <!-- 第一區塊 banner -->
        <div ref="myBanner" class="home_banner">
            <div class="banner_content"
            :width="divWidth">
                <div class="banner_wall">
                    <div class="bag_banner_img" 
                    v-for="num in home_banner_text.length" 
                    :key="num">
                        <img class="home_bannerpic" 
                        :src="getImageUrl(`banner/banner0${num}.jpg`)" :width="divWidth"
                        alt="banner">
                    </div>
                </div>
            </div>
            <div class="home_banner_textbackground">
                <h1 v-html="home_banner_text[imgnum - 1]"></h1>
            </div>
            <div class="carousel_buttons">
                <div v-for="buttonNum in home_banner_text.length" @click="setActiveImage(buttonNum)"
                    :class="{ 'active': imgnum === buttonNum }" class="carousel_button">
                </div>
            </div>
        </div>
    </div>
    <!-- 第二區塊 feature -->
    <div ref="featureContainer" class="feature container">
        <div class="row">
            <div v-for="iconNum in feature.length" class="feature_card col-12 col-lg-3">
                <h2 class="feature_title">{{ feature[iconNum - 1].title }}</h2>
                <img class="title_pic" :src="getImageUrl(`feature_icon/icon0${iconNum}.svg`)" alt="icon">
                <p class="feature_illustrate">{{ feature[iconNum - 1].illustrate }}</p>
            </div>
        </div>
    </div>
    <!-- 第三區塊 featured_commodity -->
    <div class="featured_commodity_background">
        <div class="featured_commodity">
            <div class="commodity_pic_countainer">
                <button class="leftbutton" type="button" @click="goleft">《</button>
                <div class="bigpic_item">
                    <div class="pic_wall">
                        <div class="bag_commodity_pic">
                            <img class="commodity_pic" src="../assets/images/home/featured_commodity/commodity01.png" alt="">
                        </div>
                        <div class="second_picture bag_commodity_pic">
                            <img class="commodity_pic" src="../assets/images/home/featured_commodity/commodity02.png" alt="">
                        </div>
                        <div class="bag_commodity_pic">
                            <img class="commodity_pic" src="../assets/images/home/featured_commodity/commodity03.png" alt="">
                        </div>
                    </div>
                </div>
                <button class="rightbutton" type="button" @click="goright">》</button>
            </div>
            <div class="commodity_introduce">
                <h3 class="commodity_title">餐盒/食材介紹</h3>
                <p class="commodity_illustrate">
                    採用有機、無農藥的新鮮蔬果，搭配優質蛋白質和健康澱粉，打造出多元的口味組合，無論您是追求高蛋白、低碳水化合物或素食主義者，都能在我們的餐盒中找到合適的選擇。</p>
                <a class="commodity_more" href="">更多商品</a>
            </div>
        </div>
    </div>
    <!-- 第四區塊 comment -->
    <div ref="homeComment" class="comment">
        <h3>留言評論</h3>
        <div class="comment_wall">
            <div class="comment_card" 
            v-for="commentNum in comment.length" 
            :key="commentNum">
                <div class="person">
                    <img :src="getImageUrl(`comment/avatar0${commentNum}.png`)" alt="avatar">
                    <div class="comment_name">{{ comment[commentNum - 1].name }}</div>
                </div>
                <div class="comment_star">
                    <img 
                    v-for="n in comment[commentNum - 1].star" 
                    src="../assets/images/home/comment/Star.png" alt="">
                </div>
                <div class="comment_message">
                    <p>
                        {{ comment[commentNum - 1].message }}
                    </p>
                </div>
            </div>
        </div>
    </div>

<!----------- 專欄 ------------>
<h2 class="home-title">健康專欄</h2>
<div class="home-article-link">
      <div class="home-article-container container">
        <div class="home-article-img">
          <img :src="articles[0].imageSrc" :alt="articles[0].altText">
        </div>
        <div class="home-article-txt">
          <h3>{{ articles[0].title }}</h3>
          <p>{{ articles[0].description }}</p>
          <div class="btn_bar">
            <router-link :to="articles[0].link" class="btn-outline-white">觀看更多</router-link>
          </div>
        </div>
      </div>
    </div>

<!----------- 食譜 ------------>
<h2 class="home-title">熱門食譜</h2>
<div class="home-recipe-link">
    <div v-for="(recipe, index) in recipes" :key="index" :class="{ 'home-recipe-link-reverse': index % 2 !== 0 }">
      <div class="home-recipe-container container">
        <div class="home-recipe-img">
          <img :src="recipe.imageSrc" :alt="`熱門食譜-${index + 1}`">
        </div>
        <div class="home-recipe-txt">
          <h3>{{ recipe.title }}</h3>
          <span>{{ recipe.ingredientsTitle }}</span>
          <ul>
            <li v-for="(ingredient, i) in recipe.ingredients" :key="i">{{ ingredient }}</li>
          </ul>
          <div class="btn_bar"><a :href="recipe.link" class="btn-outline-white">探索更多</a></div>
        </div>
      </div>
    </div>
</div>  
<!------- 食譜(手機版) ------->
<div class="home-phone-recipe">
    <div class="first-recipe">
      <img src="/src/assets/images/home/recipe-1.png" alt="熱門食譜-1">
    </div>
    <div class="phone-recipe">
      <h3>素食彩虹沙拉</h3>
      <span>食材</span>
      <ul>
        <li>·生菜葉（任選擇的種類），洗淨切碎</li>
        <li>·紅椒、黃椒、橙椒，切絲</li>
        <li>·黃瓜，切薄片</li>
        <li>·紫甘藍，切碎</li>
        <li>·胡蘿蔔，切絲或用刨絲器刨成薄片</li>
        <li>·紅洋蔥, 切絲........ </li>
      </ul>
      <a href="" class="btn-outline-white">探索更多</a>    
  </div>
</div>

<div class="home-phone-recipe">
    <div class="phone-recipe-img">
      <img src="/src/assets/images/home/recipe-2.png" alt="熱門食譜-1">
    </div>
    <div class="phone-recipe">
      <h3>紫薯蕎麥鬆餅</h3>
      <span>食材</span>
      <ul>
        <li>·生菜葉（任選擇的種類），洗淨切碎</li>
        <li>·紅椒、黃椒、橙椒，切絲</li>
        <li>·黃瓜，切薄片</li>
        <li>·紫甘藍，切碎</li>
        <li>·胡蘿蔔，切絲或用刨絲器刨成薄片</li>
        <li>·紅洋蔥, 切絲........ </li>
      </ul>
      <a href="" class="btn-outline-white">探索更多</a>    
  </div>
</div>

<!----------- 小幫手 ------------>
<h2 class="home-title">健康小幫手</h2>
<div class="home-assistant-container">
      <div class="assistant-row row">
        <router-link v-for="(assistant, index) in assistants" :key="index" :to="assistant.link">
          <div class="assistant-icon-card">
            <img :src="assistant.iconSrc" :alt="`健康小幫手-${index + 1}`">
            <h4>{{ assistant.title }}</h4>
            <p>{{ assistant.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
<!------- 小幫手(手機版) ------->
<div class="phone-assistant-container">
  <h3>深入了解您的身體狀態<br>為健康生活打下堅實基礎</h3><br>
  <h3>掌握每日飲食的能量和血糖影響<br>智慧選擇，健康飲食</h3>  
  <a href="" class="assistant-item">
    <img src="/src/assets/images/home/assistant.png" alt="">
    <div class="switch">
      <div class="prev"><img src="/src/assets/images/home/prev.svg" alt=""></div>
      <h4>卡路里計算</h4>
      <div class="next"><img src="/src/assets/images/home/next.svg" alt=""></div>
    </div>
    <div class="text">
      <span>了解你每天攝取的卡路里量有助於維持健康的飲食習慣。</span> 
    </div>
  </a>
  <div class="btn"><a href="" class="btn-primary">前往計算</a></div>
</div>

<!----------- 小遊戲 ------------>
<h2 class="home-title">玩遊戲，享優惠！</h2>
<div class="index_game container">
    <h3>準備好了嗎？接受我們的健康問答挑戰，贏得您的折價券！</h3>
    <div class="game_start row">
          <div class="game_start_img col-12 col-xl-6">
            <img src="/src/assets/images/game/game1.png" alt="健康知識大挑戰">
          </div>
          <div class="game_start_text col-12 col-xl-6">
            <h2 class="game_start_title">健康知識大挑戰</h2>
            <p>挑戰您的飲食知識，贏取專屬的折價券！只要您回答正確，即可獲得專屬折扣。讓您在享受美食的同時，豐富自己的營養知識。</p>
            <router-link to="/game" class="btn-l-icon-btn btn-r-icon-btn"><i class="fa-solid fa-gamepad"></i>遊戲連結<i
                class="fa-solid fa-arrow-up-right-from-square"></i></router-link>
          </div>
    </div>
</div>

<!----------- 機器人 ------------>

 <!-- 健康小精靈ICON -->
 <div class="rotbot-icon" @click="toggleChat">
      <img src="/src/assets/images/home/robot.png" alt="Floating Icon">
    </div>

 <!-- 健康小精靈訊息框 -->
    <div v-show="isChatOpen" id="chat-container" :style="{ right: chatContainerRight, bottom: chatContainerBottom }">
      <div class="chat-header">
        <img src="/src/assets/images/home/robot-img.png" alt="機器人頭像" class="avatar">
        <span class="bot-name">健康小精靈</span>
        <button @click="closeChat" class="close-button"><img src="/src/assets/images/home/XX.png" alt=""></button>
      </div>
      <hr class="line-divider">

    <div id="chat-messages">
      <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'user-message': message.type === 'user', 'bot-message': message.type === 'bot' }">
      <span v-if="message.type === 'user'"></span>
      <span v-if="message.type === 'bot'"></span>
      
 <!-- 顯示訊息跟時間 -->
      <div class="message-content">
        <span class="message-text">{{ message.text }}</span>
        <span class="message-time">{{ message.time }}</span>
      </div>
    </div>
    </div>

 <!-- 使用者訊息輸入 -->
  <input type="text" v-model="userInput" @keyup.enter="sendMessage" placeholder="提問問題..." />
</div>

<!----------- end ------------>

</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    data() {
        return {
            imgnum: 1, //照片index(配合文字也吃)
            home_banner_text: [
                '嚴選有機食材<br>為您和家人打造營養均衡的每一餐',
                '嚴選有機食材<br>為您和寵物打造營養均衡的每一餐',
                '嚴選有機食材<br>為您和狗狗打造營養均衡的每一餐'
            ],
            activeButton: 1,
            feature: [
                {
                    title: '多樣化餐盒選擇',
                    illustrate: '提供多樣化的食材和食譜選擇，滿足不同口味和飲食需求，為您打造獨一無二的餐食體驗。'
                },
                {
                    title: '嚴選食材',
                    illustrate: '我們精心挑選來自優質農場和供應商的食材，確保每一道餐點都是新鮮、高品質且營養豐富的，為您提供美味的同時注重您的身體健康。'
                },
                {
                    title: '方便快捷',
                    illustrate: '注重方便性，提供簡單易行的食材和食譜，節省您在烹飪上的時間，讓美味營養更輕鬆進入您的生活。'
                },
                {
                    title: '健康資訊分享',
                    illustrate: '我們不僅提供食材，還分享有價值的健康資訊和烹飪技巧，幫助您更深入了解飲食與健康的關聯，讓烹飪成為一場愉悅的學習和享受的過程。'
                },
            ],
            comment: [
                {
                    name: '李先生',
                    message: '這個餐盒真的是營養師的極力推薦！食材新鮮，營養均衡，而且份量十足。每次吃完都感覺充滿活力，對於注重健康的我來說，是個理想的選擇。推薦給大家！',
                    star: 5,
                },
                {
                    name: '林先生',
                    message: '作為一個注重健身的人，我對於飲食特別講究。這款健康餐盒完全滿足了我的需求，高蛋白、低脂肪，而且味道還好吃！是我每日訓練後的最佳補充。',
                    star: 5,
                },
                {
                    name: '王小姐',
                    message: '作為一個注重健身的人，我對於飲食特別講究。這款健康餐盒完全滿足了我的需求，高蛋白、低脂肪，而且味道還好吃！是我每日訓練後的最佳補充。',
                    star: 5,
                },
                {
                    name: '郭小姐',
                    message: '作為一個注重健身的人，我對於飲食特別講究。這款健康餐盒完全滿足了我的需求，高蛋白、低脂肪，而且味道還好吃！是我每日訓練後的最佳補充。',
                    star: 5,
                },
            ],
            articles: [
                {
                    title: "營養均衡，從餐桌開始",
                    description: "在現代快節奏的生活中，人們越來越注重健康。而要實現真正的健康，一頓營養均衡的餐點是不可或缺的一環。飲食不僅關係到我們的體重管理，更關係到身體各個器官的正常運作和免疫系統的強壯。",
                    imageSrc: "/src/assets/images/home/ARTICLE_OVERVIEW.png",
                    altText: "健康專欄",
                    link: "/path-to-article-1",
                },
            ],
            recipes: [
                {
                title: '素食彩虹沙拉',
                ingredientsTitle: '食材',
                ingredients: [
                    '·生菜葉（任選擇的種類），洗淨切碎',
                    '·紅椒、黃椒、橙椒，切絲',
                    '·黃瓜，切薄片',
                    '·紫甘藍，切碎',
                    '·胡蘿蔔，切絲或用刨絲器刨成薄片',
                    '·紅洋蔥，切絲',
                    '·紅蘿蔔，刨成絲',
                    '·玉米粒，瀝乾',
                    '·青豆，瀝乾',
                    '·義大利香草醬（或橄欖油和新鮮檸檬汁混合）',
                    '·鹽和黑胡椒調味',
                ],
                imageSrc: '/src/assets/images/home/recipe-1.png',
                link: '/recipe1'
                },
                
                {
                title: '紫薯蕎麥鬆餅',
                ingredientsTitle: '食材',
                ingredients: [
                    '·生菜葉（任選擇的種類），洗淨切碎',
                    '·紅椒、黃椒、橙椒，切絲',
                    '·黃瓜，切薄片',
                    '·紫甘藍，切碎',
                    '·胡蘿蔔，切絲或用刨絲器刨成薄片',
                    '·紅洋蔥，切絲',
                    '·紅蘿蔔，刨成絲',
                    '·玉米粒，瀝乾',
                    '·青豆，瀝乾',
                    '·義大利香草醬（或橄欖油和新鮮檸檬汁混合）',
                    '·鹽和黑胡椒調味',
                ],
                imageSrc: '/src/assets/images/home/recipe-2.png',
                link: '/recipe2'
                }
            ],
            assistants: [
                {
                title: 'BMI計算',
                description: '衡量身體的肥胖程度',
                iconSrc: '/src/assets/images/home/bmi-icon.png',
                link: '/bmi',
                },
                {
                title: '基礎代謝率',
                description: '了解你身體在靜息狀態下維持基本生命活動所需的能量消耗',
                iconSrc: '/src/assets/images/home/cpf-icon.png',
                link: '/bmr',
                },
                {
                title: '卡路里計算',
                description: '了解你每天攝取的卡路里量有助於維持健康的飲食習慣',
                iconSrc: '/src/assets/images/home/cal-icon.png',
                link: '/cal',
                },
                {
                title: 'GI飲食計算',
                description: '低GI飲食有助於穩定血糖水平',
                iconSrc: '/src/assets/images/home/gi-icon.png',
                link: '/gi',
                },
            ],
            isChatOpen: false,
            chatContainerRight: 'calc(20px + 60px)', // 初始位置，60px 是 floating-icon 的寬度
            chatContainerBottom: '20px', // 初始位置
            userInput: '',
            messages: [],      
            qaPairs: {
                '你好': '你好! 需要什麼幫助呢？',
                '你是誰': '我是健康小精靈，很高興為您服務。',
                '健康': '關於健康的問題，問我就對了。',
                '再見': '再見！如果有任何問題，歡迎隨時回來。',
                '付款': '付款相關問題的話可以參考以下',
                '便當': '便當相關問題的話可以參考以下',
            },
            divWidth: 0,
            elements: [],
            divWidth: 0, //banner寬度
            elements: [], //banner的照片
            timer: null, //自動輪播的計時器變數
            speed: `translateX (-10px) `, // 跑馬燈速度，數值越大越慢
        };
    },
    methods: {
        getImageUrl(paths) {
            return new URL(`../assets/images/home/${paths}`, import.meta.url).href;
        },
        updateDimensions() {  //抓取banner 並且同步寬度
            this.divWidth = this.$refs.myBanner.offsetWidth;
        },

        startSlideshow() {
            this.timer = setInterval(() => {
                const nextImage = this.imgnum === this.home_banner_text.length ? 1 : this.imgnum + 1; 
                //判斷 imgnum 的值 是不是 home_banner_text.length 的值  如果是回傳 1 給 nextImage 如果不是 nextImage + 1
                this.setActiveImage(nextImage); // 把 nextImage 當參數 回傳給 setActiveImage
            }, 5000); // 每5000毫秒更換一次圖片
        },
        setActiveImage(buttonNum) {
            this.imgnum = buttonNum; // 將 imgnum 設置為 buttonNum 的值  設置要顯示的圖片。
            this.applyTransition(); //呼叫
        },
        applyTransition() {
            const transitionValue = `translateX(-${(this.imgnum - 1) * 100}%)`; //計算用 imgnum 計算 translateX 值,每張圖片水平平移 100%
            this.$refs.myBanner.querySelector('.banner_content').style.transform = transitionValue; //將 transform 屬性應用到banner_content上 (用這個方法改變CSS)
        },
        startComment() {
            const commentWall = this.$refs.homeComment.querySelector('.comment_wall'); // 獲取照片牆
            let position = 0; // 設定初值
            let isPaused = false; // 鼠标事件開關
            function animateMarquee() {
                if (!isPaused) {
                    position -= 0.5;  
                    console.log('Position:', position);
                    console.log('CommentWall Width:', commentWall.offsetWidth);
                    commentWall.style.transform = `translateX(${position}px)`;
                    // 判斷position 是否 >= commentWall 的寬度 衝心呼叫此函數
                    if (position*-1 -550 >= commentWall.offsetWidth) {
                        position = 0;
                    }
                }
                cancelAnimationFrame(animateMarquee);
                requestAnimationFrame(animateMarquee); 
                //性能優化 ( 當我視窗化最小or window沒有在閱覽 他會自動暫停 )
            }
            this.$refs.homeComment.addEventListener('mouseenter', () => {
                isPaused = true; //mouseenter 把開關 關起來
            });
            this.$refs.homeComment.addEventListener('mouseleave', () => {
                isPaused = false;//mouseleave 重新呼叫
                animateMarquee();
            });
            animateMarquee();
        },
        sendMessage() {
                const userMessage = this.userInput.trim();
                if (userMessage === '') return;

                const currentTime = new Date().toLocaleTimeString();
                
                this.messages.push({ type: 'user', text: userMessage, time: currentTime });
                this.userInput = '';

                const botReply = this.qaPairs[userMessage];
                
                if (botReply) {
                    this.messages.push({ type: 'bot', text: botReply, time: currentTime });
                } else {
                    this.messages.push({ type: 'bot', text: '抱歉，我不了解您的問題。', time: currentTime });
                }
            },
            closeChat() {
                this.isChatOpen = false;  // 用於關閉 chat-container
                },
            toggleChat() {
                this.isChatOpen = !this.isChatOpen;
                if (this.isChatOpen) {
                this.chatContainerRight = 'calc(100px + 60px)';
                this.chatContainerBottom = '20px';
                }
            },
        },


    computed() {
    },

    mounted() { // Vue 實例創建之後立即被調用
        this.$nextTick(() => {
            this.updateDimensions();
            window.addEventListener('resize', this.updateDimensions); //resize 重新抓取寬度
            this.elements = this.$refs.myBanner.querySelectorAll('img'); //抓取myBanner標籤裡的所有圖片 變成陣列
            this.startSlideshow(); //啟動自動輪播
            this.startComment();
        });
    },
    components: {
        RouterLink,
    },
};
</script>
<style lang="scss">
@import "@/assets/scss/page/_index.scss";
</style>