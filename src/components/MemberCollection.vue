<template>
    <div class="col-12 col-lg-9">
        <div class="member_collection">
            <h2>我的收藏</h2>
            <ul class="member_cookbook_list row">
                <li v-for="item in cookbooks" :key="item.id" class="col-4">
                    <article>
                        <i class="fa-regular fa-bookmark bookmark"></i>
                        <a href="/cookbookinfo"><img :src="item.img"></a>
                        <div class="text">
                            <a href="/cookbookinfo">
                                <h4>{{ item.name }}</h4>
                            </a>
                            <p>{{ item.title }}</p>
                        </div>
                        <div class="like">
                            <i class="fa-regular fa-thumbs-up"></i>
                            <span>1</span>
                            <i class="fa-solid fa-share"></i>
                        </div>
                    </article>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            cookbooks: [
                {
                    id: 0,
                    name: "素食彩虹沙拉",
                    title: "五彩繽紛的蔬果饗宴",
                    img: '/src/assets/images/member/cookbook.png',
                },
                {
                    id: 1,
                    name: "素食彩虹沙拉",
                    title: "五彩繽紛的蔬果饗宴",
                    img: '/src/assets/images/member/cookbook.png',
                },
                {
                    id: 2,
                    name: "素食彩虹沙拉",
                    title: "五彩繽紛的蔬果饗宴",
                    img: '/src/assets/images/member/cookbook.png',
                },
            ],
        }
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/page/_member.scss";
</style>