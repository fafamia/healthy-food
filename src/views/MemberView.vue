<template>
  <div class="member container">
    <div class="member_area row">
      <MemberBar @select-view="updateView" />
      <MemberInfo v-if="currentView === 'info'" />
      <MemberCoupon v-if="currentView === 'coupon'" />
      <MemberLevel v-if="currentView === 'level'" />
      <MemberOrder v-if="currentView === 'order'" />
      <MemberFavourite v-if="currentView === 'favourite'" />
      <MemberCollection v-if="currentView === 'collection'" />
    </div>

  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import MemberBar from "@/components/MemberBar.vue";
import MemberInfo from "@/components/MemberInfo.vue";
import MemberCoupon from "@/components/MemberCoupon.vue";
import MemberLevel from "@/components/MemberLevel.vue";
import MemberOrder from "@/components/MemberOrder.vue";
import MemberFavourite from "@/components/MemberFavourite.vue";
import MemberCollection from "@/components/MemberCollection.vue";
export default {
  data() {
    return {
      currentView: 'info',
    }
  },
  components: {
    RouterLink,
    MemberBar,
    MemberInfo,
    MemberCoupon,
    MemberLevel,
    MemberOrder,
    MemberFavourite,
    MemberCollection,
  },
  methods: {
    updateView(selectedView) {
      this.currentView = selectedView;
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/page/_member.scss";
</style>

