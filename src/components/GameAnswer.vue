<template>
    <div class="game_a row">
        <div class="game_a_img col-12 col-xl-6">
            <img :src="image" :alt="altText" />
        </div>
        <div class="game_a_text col-12 col-xl-6">
            <h2 class="game_a_title">{{ title }}</h2>
            <p>{{ explanation }}</p>
            <button type="button" class="btn-product" @click="nextQuestion">
                {{ isLastQuestion ? '挑戰完成' : '下一題' }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameAnswer',
    props: {
        image: String,
        altText: String,
        title: String,
        explanation: String,
        isLastQuestion: Boolean,
    },
    emits: ['next-question'],
    methods: {
        nextQuestion() {
            // 发出 next-question 事件
            this.$emit('next-question');
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/page/_game.scss";
</style>