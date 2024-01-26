<template>
    <div class="game_start row">
        <div class="game_start_img col-12 col-xl-6">
            <img src="/src/assets/images/game/game1.png" alt="健康知識大挑戰">
        </div>
        <div class="game_start_text col-12 col-xl-6">
            <h2 class="game_start_title">健康知識大挑戰</h2>
            <p>挑戰您的飲食知識，贏取專屬的折價券！只要您回答正確，即可獲得專屬折扣。讓您在享受美食的同時，豐富自己的營養知識。</p>
            <button type="button" class="btn-l-icon-btn btn-r-icon-btn" @click="$emit('startGame')"><i
                    class="fa-solid fa-gamepad"></i>開始遊戲<i class="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameStart',

    data() {
        return {

        }
    },

    methods: {

    }
};
</script>

<style lang="scss">
@import "@/assets/scss/page/_game.scss";
</style>