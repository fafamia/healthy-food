<template>
  <div class="game container">
    <breadcrumb :breadcrumb="yourBreadcrumbData"></breadcrumb>
    <game-start v-if="gameStep === 0" @startGame="toNextStep" />
    <div class="q_bar col-12 col-xl-6" v-if="gameStep > 0">
      <div class="q_bar_circle" v-for="n in 5" :key="n">
        <img v-if="progressStep >= n" src="/src/assets/images/game/game2.png" alt="小遊戲圖片">
      </div>
      <div class="q_bar_line"></div>
    </div>

    <GameQuestion v-if="gameStep === 1" :questionNum="`第 ${currentQuestionIndex + 1} 題`"
      :questionText="currentQuestion.topic" :options="currentQuestion.options" @option-selected="handleOptionSelected" />


    <GameAnswer v-if="gameStep === 2" :image="currentQuestion.img" :altText="'描述文本'" :title="answerTitle"
      :explanation="currentQuestion.ans" :isLastQuestion="currentQuestionIndex === selectedQuestions.length - 1"
      @next-question="nextQuestion" />

    <div class="game_coupon_modal" v-if="isModalVisible">
      <div class="coupon_modal_bg">
        <div class="coupon_modal">
          <div class="modal_text">
            <p v-if="correctAnswersCount > 2">恭喜您！</p>
            <p v-if="correctAnswersCount > 2">在5題挑戰中答對了 {{ correctAnswersCount }} 題</p>
            <p v-if="correctAnswersCount === 3">您贏得了 10 元的折價券！</p>
            <p v-else-if="correctAnswersCount === 4">您贏得了 20 元的折價券！</p>
            <p v-else-if="correctAnswersCount === 5">您贏得了 30 元的折價券！</p>
            <p v-if="correctAnswersCount <= 2">您已答對 {{ correctAnswersCount }} 題，仍有進步空間。</p>
            <p v-if="correctAnswersCount <= 2">雖未獲得折扣券，但別氣餒，期待您下次的精彩表現！</p>
            <button type="button" class="btn-primary" @click="toGameStart">確定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';
import GameStart from '@/components/GameStart.vue';
import GameQuestion from '@/components/GameQuestion.vue';
import GameAnswer from '@/components/GameAnswer.vue';
export default {
  data() {
    return {
      // 麵包屑數據
      yourBreadcrumbData: [
        { text: '首頁', to: '/' },
        { text: '健康知識大挑戰', active: true }
      ],
      allQuestions: [
        {
          topic: '當您想要攝取更多的鈣質，以下哪種食物是不錯的選擇？',
          options: [
            { text: '鳳梨', isCorrect: false },
            { text: '西瓜', isCorrect: false },
            { text: '蘋果', isCorrect: false },
            { text: '豆腐', isCorrect: true },
          ],
          img: '/src/assets/images/game/ans_1.jpg',
          ans: '豆腐是優質植物蛋白來源，含豐富礦物質如鈣、鐵，低飽和脂肪，有益心血管健康。富含維生素B群和植物雌激素，是低熱量、營養均衡的食品，對腸道和骨骼健康有益。'
        },
        {
          topic: '什麼是BMI的全稱？',
          options: [
            { text: '體重多重指數', isCorrect: false },
            { text: '肌肉質量指數', isCorrect: false },
            { text: '人體質量指數', isCorrect: true },
            { text: '營養狀態指數', isCorrect: false },
          ],
          img: '/src/assets/images/game/ans_2.jpg',
          ans: 'BMI是人體質量指數的縮寫，用於評估一個人的體重是否在健康範圍內。'
        },
        {
          topic: '哪種維生素有助於增強免疫系統？',
          options: [
            { text: '維生素A', isCorrect: false },
            { text: '維生素B6', isCorrect: false },
            { text: '維生素C', isCorrect: true },
            { text: '維生素D', isCorrect: false },
          ],
          img: '/src/assets/images/game/ans_3.jpg',
          ans: '維生素C有助於增強免疫系統，有助於抵抗感染。'
        },
        {
          topic: '什麼食物富含omega-3脂肪酸，對心臟健康有益？',
          options: [
            { text: '牛肉', isCorrect: false },
            { text: '魚類', isCorrect: true },
            { text: '豬肉', isCorrect: false },
            { text: '雞肉', isCorrect: false },
          ],
          img: '/src/assets/images/game/ans_4.jpg',
          ans: '魚類是富含omega-3脂肪酸的食物，對心臟健康有益。'
        },
        {
          topic: '什麼是維生素D的主要來源？',
          options: [
            { text: '陽光', isCorrect: true },
            { text: '蘋果', isCorrect: false },
            { text: '牛奶', isCorrect: false },
            { text: '西瓜', isCorrect: false },
          ],
          img: '/src/assets/images/game/ans_5.jpg',
          ans: '維生素D的主要來源之一是陽光，皮膚暴露於陽光下可以合成維生素D。'
        },
        {
          topic: '哪種食物含有大量的纖維，有助於促進消化健康？',
          options: [
            { text: '巧克力', isCorrect: false },
            { text: '白麵包', isCorrect: false },
            { text: '燕麥', isCorrect: true },
            { text: '薯條', isCorrect: false },
          ],
          img: '/src/assets/images/game/ans_6.jpg',
          ans: '燕麥含有大量的纖維，有助於促進消化健康。'
        },
        {
          topic: '哪種飲食模式強調攝取大量蔬菜、水果和全穀物？',
          options: [
            { text: '生魚片飲食', isCorrect: false },
            { text: '紅肉飲食', isCorrect: false },
            { text: '地中海飲食', isCorrect: true },
            { text: '快餐飲食', isCorrect: false },
          ],
          img: '/src/assets/images/game/ans_7.jpg',
          ans: '地中海飲食模式強調攝取大量蔬菜、水果和全穀物，有益健康。'
        },
        {
          topic: '什麼食物是富含抗氧化劑的良好來源，有助於對抗自由基？',
          options: [
            { text: '高糖食品', isCorrect: false },
            { text: '高脂肪食品', isCorrect: false },
            { text: '油炸食品', isCorrect: false },
            { text: '水果和蔬菜', isCorrect: true },
          ],
          img: '/src/assets/images/game/ans_8.jpg',
          ans: '水果和蔬菜是富含抗氧化劑的良好來源，有助於對抗自由基損害。'
        },
        {
          topic: '哪種營養素在水果和蔬菜中豐富，有助於預防氧化損傷？',
          options: [
            { text: '鈣質', isCorrect: false },
            { text: '抗氧化劑', isCorrect: true },
            { text: '纖維', isCorrect: false },
            { text: '脂肪', isCorrect: false },
          ],
          img: '/src/assets/images/game/ans_9.jpg',
          ans: '抗氧化劑在水果和蔬菜中豐富，有助於預防氧化損傷，保護細胞免受自由基損害。'
        },
        {
          topic: '哪種食物是優質蛋白質的良好來源，有助於肌肉修復和生長？',
          options: [
            { text: '巧克力', isCorrect: false },
            { text: '高糖食品', isCorrect: false },
            { text: '紅肉', isCorrect: false },
            { text: '雞胸肉', isCorrect: true },
          ],
          img: '/src/assets/images/game/ans_10.jpg',
          ans: '雞胸肉是優質蛋白質的良好來源，有助於肌肉修復和生長。'
        },
      ],
      gameStep: 0,
      progressStep: 1,
      currentQuestionIndex: 0,
      selectedQuestions: [],
      answerTitle: '',
      correctAnswersCount: 0,
      isModalVisible: false,
    };
  },
  components: {
    Breadcrumb,
    GameStart,
    GameQuestion,
    GameAnswer,
  },
  mounted() {
    this.randomQuestions();
  },
  computed: {
    currentQuestion() {
      if (this.currentQuestionIndex < this.selectedQuestions.length) {
        return this.selectedQuestions[this.currentQuestionIndex];
      }
      return null; // 或返回一个默认的问题对象
    },
  },
  methods: {
    toNextStep() {
      this.gameStep++;
    },
    randomQuestions() {
      const shuffled = [...this.allQuestions].sort(() => Math.random() - 0.5);
      this.selectedQuestions = shuffled.slice(0, 5);
    },
    handleOptionSelected(selectedOption) {
      if (selectedOption.isCorrect) {
        // 如果選項是正确的，則增加答對題數
        this.correctAnswersCount++;
      }
      this.answerTitle = selectedOption.isCorrect ? '答對了' : '答錯了';
      this.gameStep = 2;
    },
    nextQuestion() {
      if (this.gameStep === 2) {
        // 只有在當前顯示的是答案時才更新進度
        this.progressStep++;
      }
      if (this.currentQuestionIndex < this.selectedQuestions.length - 1) {
        this.currentQuestionIndex++;
        this.gameStep = 1;
      } else {
        this.isModalVisible = true;
      }
    },
    toGameStart() {
      this.gameStep = 0;
      this.progressStep = 1;
      this.currentQuestionIndex = 0;
      this.correctAnswersCount = 0;
      this.isModalVisible = false;
      this.randomQuestions();
    },
  },
}

</script>

<style lang="scss">
@import "@/assets/scss/page/_game.scss";
</style>

