<template>
    <header class="mainHeader">
        <div class="container">
            <div class="header-phone">
                <RouterLink to="/" class="header_logo_link_phone">
                    <h1>健康定胃</h1>
                </RouterLink>
                <nav>
                    <ul class="header_phone_nav">
                        <li @click="toggleModel"><i class="fa-solid fa-user"></i></li>
                        <li @click="toggleShoppingDrawer"><i class="fa-solid fa-cart-shopping"></i></li>
                        <li @click="toggleHeaderMenu"><i class="fa-solid fa-bars"></i></li>
                    </ul>
                </nav>
                <div class="header_phone_menulist" v-show="HeaderMenuStatus" @click="toggleHeaderMenu">
                    <nav class="list-list" @click.stop>
                        <ul>
                            <li>
                                <RouterLink to="/products">健康小舖</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/foodmap">食材地圖</RouterLink>
                            </li>
                            <li>
                                <div @click="toggleSubMenu('healthTools')" class="header_phone_link_list">
                                    <RouterLink to="">健康小幫手</RouterLink>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                                <ul v-show="subMenuStatus.healthTools">
                                    <li>
                                        <RouterLink to="/bmi">BMI計算</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/bmr">基礎代謝率計算</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/cal">食物熱量查詢</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/gi">食物GI值查詢</RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div @click="toggleSubMenu('healthArticles')" class="header_phone_link_list">
                                    <RouterLink to="">健康專欄</RouterLink>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                                <ul v-show="subMenuStatus.healthArticles">
                                    <li>
                                        <RouterLink to="/cookbook">熱門食譜</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/article">科普文章</RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <RouterLink to="/about">關於我們</RouterLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="headerPc">
                <div class="header_pc_area">
                    <RouterLink to="/" class="header_logo_link_pc">
                        <h1>健康定胃</h1>
                    </RouterLink>
                    <nav>
                        <ul class="header_pc_nav">
                            <li>
                                <RouterLink to="/products">健康小舖</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/foodmap">食材地圖</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="">健康小幫手</RouterLink>
                                <ul>
                                    <li>
                                        <RouterLink to="/bmi">BMI計算</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/bmr">基礎代謝率計算</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/cal">食物熱量查詢</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/gi">食物GI值查詢</RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <RouterLink to="">健康專欄</RouterLink>
                                <ul>
                                    <li>
                                        <RouterLink to="/cookbook">熱門食譜</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/article">科普文章</RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <RouterLink to="/about">關於我們</RouterLink>
                            </li>
                        </ul>
                    </nav>
                    <ul class="header_pc_icon_nav">
                        <li @click="toggleModel"><i class="fa-solid fa-user"></i></li>
                        <li @click="toggleShoppingDrawer"><i class="fa-solid fa-cart-shopping"></i></li>
                    </ul>
                </div>
            </div>
            <div class="header_modal" id="log-in-modal" v-show="modelStatus">
                <div class="header_modal_bg" @click="toggleModel">
                    <div class="modal">
                        <div class="header_model_area" @click.stop>
                            <div class="header_modal_title">
                                <h3 :class="{ title_active: isLogin, title_inactive: !isLogin }" @click="toggleLogin(true)">
                                    登入</h3>
                                <h3 :class="{ title_active: !isLogin, title_inactive: isLogin }"
                                    @click="toggleLogin(false)">註冊
                                </h3>
                            </div>
                            <div class="header_login_model" v-if="isLogin">
                                <form action="/login" method="post">
                                    <label for="login" class="close"><i class="fa-solid fa-xmark" id="close-ntn"
                                            @click="toggleModel"></i></label>
                                    <input class="header_login_input" type="email" placeholder="請輸入E-mail" id="loginEmail"
                                        required>
                                    <div class="password">
                                        <input class="header_login_input" type="password" placeholder="請輸入密碼"
                                            id="loginPassword" required>
                                        <span class="eye"><i class="fa-solid fa-eye-slash"></i></span>
                                    </div>
                                    <input type="submit" class="header_login_input member-btn" value="登入" id="submit-login">
                                </form>
                                <div class="remember-area">
                                    <input class="keep-login" type="checkbox" id="keep-log-in"><label
                                        for="keep-log-in">保持登入狀態</label>
                                    <RouterLink to="">忘記密碼</RouterLink>
                                </div>
                                <div class="orther-way">
                                    <h4>或其他方式快速登入</h4>
                                    <div class="fast-img">
                                        <a href="#"><img src="/src/assets/images/home/google.png" alt="google_login">
                                        </a>
                                        <a href="#"><img src="/src/assets/images/home/fb.png" alt="facebook_login">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="header_signup_model" v-if="!isLogin">
                                <form action="/signup" method="post">
                                    <label for="signup" class="close"><i class="fa-solid fa-xmark" id="close-ntn"
                                            @click="toggleModel"></i></label>
                                    <input class="signup_modal_input" type="text" placeholder="請輸入您的姓名" required>
                                    <input class="signup_modal_input" type="text" placeholder="請輸入您的手機號碼" required>
                                    <input class="signup_modal_input" type="email" placeholder="請輸入您的電子信箱" required>
                                    <div class="password">
                                        <input class="signup_modal_input" type="password" placeholder="請輸入密碼(6-12碼英數字混合)"
                                            required>
                                        <span class="eye"><i class="fa-solid fa-eye-slash"></i></span>
                                    </div>
                                    <div class="password">
                                        <input class="signup_modal_input" type="password" placeholder="請再次輸入密碼" required>
                                        <span class="eye"><i class="fa-solid fa-eye-slash"></i></span>
                                    </div>
                                    <div class="signup_select_area">
                                        <select>
                                            <option value="">選擇縣市</option>
                                            <option value="taipei">台北市</option>
                                            <option value="newtaipei">新北市</option>
                                            <option value="taichung">南部</option>
                                        </select>
                                        <select>
                                            <option value="">選擇鄉鎮</option>
                                            <option value="taipei">北區</option>
                                            <option value="newtaipei">南區</option>
                                            <option value="taichung">中區</option>
                                        </select>
                                    </div>
                                    <div class="check-num">
                                        <input class="signup_modal_input" type="text" placeholder="請輸入右側驗證碼" required><span
                                            class="num">5566</span><a href="#"><i class="fa-solid fa-rotate-right"></i></a>
                                    </div>
                                </form>
                                <a href="#" class="member-btn">註冊</a>
                                <div class="orther-way">
                                    <h4>或其他方式快速註冊</h4>
                                    <div class="fast-img">
                                        <a href="#"><img src="/src/assets/images/home/google.png" alt="google_login">
                                        </a>
                                        <a href="#"><img src="/src/assets/images/home/fb.png" alt="facebook_login">
                                        </a>
                                    </div>
                                </div>
                                <p>註冊即同意 隱私權政策 和 使用者條款</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShoppingCart ref="shoppingCartRef" />
        </div>
    </header>
</template>
<script>
import { RouterLink } from 'vue-router';
import ShoppingCart from "@/components/ShoppingCart.vue"

export default {
    data() {
        return {
            targetValue: 0,
            HeaderMenuStatus: false,
            subMenuStatus: {
                healthTools: false,
                healthArticles: false,
            },
            modelStatus: false,
            isLogin: true,
        }
    },
    created() { },
    methods: {
        toggleHeaderMenu() {
            this.HeaderMenuStatus = !this.HeaderMenuStatus
        },
        toggleSubMenu(subMenuName) {
            this.subMenuStatus[subMenuName] = !this.subMenuStatus[subMenuName]
        },
        toggleModel() {
            this.modelStatus = !this.modelStatus
        },
        toggleLogin(isLogin) {
            this.isLogin = isLogin;

        },
        toggleShoppingDrawer() {
            this.$refs.shoppingCartRef.toggleShoppingDrawer()
        }
    },
    components: {
        RouterLink,
        ShoppingCart,
    },
}    
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
@import "@/assets/scss/layout/_header.scss";
</style>