<template>
    <div class="col-12 col-lg-9">
        <div class="member_info">
            <h2>帳號設定</h2>
            <ul class="member_info_menu">
                <li @click="toggleSetMemberInfo(true)"
                    :class="{ title_click: isSetMemberInfo, title_unclick: !isSetMemberInfo }">
                    會員資料</li>
                <li @click="toggleSetMemberInfo(false)"
                    :class="{ title_click: !isSetMemberInfo, title_unclick: isSetMemberInfo }">修改密碼</li>
            </ul>
            <div class="account_set row" v-if="isSetMemberInfo">

                <div class="set_name col-12 col-lg-4">
                    <label for="memName">姓名：</label>
                    <input class="account_set_input" type="text" name="memName" id="memName" value="王小明">
                </div>
                <div class="set_birthday col-12 col-lg-4">
                    <label for="memBirthday">生日：</label>
                    <input class="account_set_input" type="date" name="memBir" id="memBir">
                </div>
                <div class="set_sex col-12 col-lg-4">
                    <label>性別：</label>
                    <select name="memSex" id="memSex">
                        <option value="">請選擇您的性別</option>
                        <option value="male">男</option>
                        <option value="female">女</option>
                        <option value="other">不公開</option>
                    </select>
                </div>
                <div class="set_email col-12 col-lg-4">
                    <label for="memEmail">Email：</label>
                    <input class="account_set_input" type="email" name="memEmail" id="memEmail" value="aabb@test.com">
                </div>
                <div class="set_phone col-12 col-lg-4">
                    <label for="memPhone">手機號碼：</label>
                    <input class="account_set_input" type="tel" name="memPhone" id="memPhone" value="0988168168">
                </div>
                <div class="set_address col-12 col-lg-12">
                    <label>聯絡地址：</label>
                    <div class="address_city">
                        <select name="memCounty" id="memCounty">
                            <option value="台北市">台北市</option>
                            <option value="新北市">新北市</option>
                            <option value="南部">南部</option>
                        </select>
                        <select name="memCity" id="memCity">
                            <option value="北區">北區</option>
                            <option value="中區">中區</option>
                            <option value="南區">南區</option>
                        </select>
                        <input class="account_set_address" type="text" value="成功路88號">
                    </div>

                </div>
                <button type="button" class="change_info_btn btn-primary">確定修改</button>
            </div>

            <div class="change_password" v-if="!isSetMemberInfo">
                <div class="old_password_area">
                    <label for="old_password">舊密碼：</label>
                    <div class="input_eye">
                        <input class="input_eye_area" type="old_password" id="old_password" placeholder="請輸入舊密碼" required>
                        <span class="eye"><i class="fa-solid fa-eye-slash"></i></span>
                    </div>
                </div>
                <div class="new_password_area">
                    <label for="new_password">新密碼：</label>
                    <div class="input_eye">
                        <input class="input_eye_area" type="new_password" id="new_password"
                            placeholder="請輸入新密碼(6~12碼英數字混合) " required>
                        <span class="eye"><i class="fa-solid fa-eye-slash"></i></span>
                    </div>
                </div>
                <div class="again_new_password_area">
                    <label for="again_new_password">確認新密碼：</label>
                    <div class="input_eye">
                        <input class="input_eye_area" type="again_new_password" id="again_new_password"
                            placeholder="請再次輸入新密碼" required>
                        <span class="eye"><i class="fa-solid fa-eye-slash"></i></span>
                    </div>
                </div>
                <button type="button" class="change_psw_btn btn-primary">確定修改</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSetMemberInfo: true,
        }
    },
    methods: {
        toggleSetMemberInfo(isSetMemberInfo) {
            this.isSetMemberInfo = isSetMemberInfo;
        }
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/page/_member.scss";
</style>