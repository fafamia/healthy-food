<template>
    <div class="container checkOutStage">
        <div class="row checkOutStage_stageWrap">
            <div class="checkOutStage_step Order">
                <div class="checkOutStage_step_num">
                    <span >1</span>
                </div>
                <div class="checkOutStage_step_check">
                    <i class="fa-solid fa-v" style="color: #f73f14;"></i>
                </div>
                <p class="checkOutStage_step_txt">訂單資料</p>
            </div>
            <div class="checkOutStage_step Payment">
                <div class="checkOutStage_step_num">
                    <span >2</span>
                </div>
                <div class="checkOutStage_step_check">
                    <i class="fa-solid fa-v" style="color: #f73f14;"></i>
                </div>
                <p class="checkOutStage_step_txt">結帳資訊</p>
            </div>
            <div class="checkOutStage_step Confirm">
                <div class="checkOutStage_step_num">
                    <span >3</span>
                </div>
                <div class="checkOutStage_step_check">
                    <i class="fa-solid fa-v" style="color: #f73f14;"></i>
                </div>
                <p class="checkOutStage_step_txt">訂單確認</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/scss/components/_checkOutStage.scss';
</style>