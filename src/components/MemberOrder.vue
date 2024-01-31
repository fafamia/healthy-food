<template>
    <div class="col-12 col-lg-9">
        <div class="member_order">
            <h2>訂單查詢</h2>
            <div class="member_order_search">
                <p>訂單時間</p>
                <input class="order_time" type="date" name="startDate">
                <span> ~ </span>
                <input class="order_time" type="date" name="endDate">
                <button type="button" class="btn-primary">查詢</button>
            </div>
            <div class="member_order_table">
                <table class="membar_order_info">
                    <tr>
                        <th class="order_th">訂單日期</th>
                        <th class="order_th">訂單編號</th>
                        <th class="order_th">總金額</th>
                        <th class="order_th">付款方式</th>
                        <th class="order_th">付款狀態</th>
                        <th class="order_th">出貨狀態</th>
                        <th class="order_th">訂單狀態</th>
                        <th class="order_th">訂購資訊</th>
                    </tr>
                    <tr>
                        <td class="order_td">2023/12/12</td>
                        <td class="order_td">23121283789706</td>
                        <td class="order_td">$1200</td>
                        <td class="order_td">線上付款</td>
                        <td class="order_td">未付款</td>
                        <td class="order_td">待出貨</td>
                        <td class="order_td">處理中</td>
                        <td class="order_td">詳細資訊</td>
                    </tr>
                    <tr>
                        <td colspan="9" style="background-color: transparent;" class="order_td">
                            <div class="shipping_info">
                                <div class="shipping_progress">
                                    <div class="shipping_progress_img">
                                        <div class="active"><i class="fa-solid fa-circle-check"></i></div>
                                        <div class="unactive"><i class="fa-solid fa-circle-dot"></i></div>
                                        <div class="unactive"><i class="fa-solid fa-circle-dot"></i></div>
                                        <div class="unactive"><i class="fa-solid fa-circle-dot"></i></div>
                                        <div class="progress_line"></div>
                                    </div>
                                    <div class="shipping_progress_text">
                                        <span>收到訂單</span>
                                        <span>訂單成立</span>
                                        <span>商品出貨</span>
                                        <span>商品送達</span>
                                    </div>
                                </div>
                                <button type="button" class="btn-primary">商品明細</button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>