import { defineStore } from "pinia";

export const useProductStore = defineStore("ProductStore",{
    state: ()=>{
        return {
            products:[
                {
                    index: 0,
                    id: 1001,
                    name: "南瓜蔬食調理包",
                    price: "160",
                    image: "../../src/assets/images/product/pumpkin_cover.png",
                    type: "lunchbox",
                    heartFilled:false,
                    desc:"這款調理包是忙碌生活中的完美選擇，主要以新鮮南瓜為基底，搭配多種營養豐富的蔬菜。方便快捷的料理方式，不僅省時也兼顧健康，適合素食者和尋求健康飲食的消費者。"
                },
                {
                    index: 0,
                    id: 1101,
                    name: "高蛋白營養調理包",
                    price: "180",
                    image: "../../src/assets/images/product/protein2.png",
                    type: "lunchbox",
                    heartFilled:false,
                    desc:"提供豐富蛋白質，適合運動愛好者。充滿營養的調理包，助您保持活力與健康，享受美味的健康生活。"
                },
                {
                    index: 0,
                    id: 1201,
                    name: "牛肉補元氣調理包",
                    price: "200",
                    image: "../../src/assets/images/product/beef.svg",
                    type: "lunchbox",
                    heartFilled:false,
                    desc:"美味牛肉搭配多種營養食材，提供豐富蛋白質和維生素，是補充元氣的絕佳選擇，味蕾的極致享受。"
                },
                {
                    index: 1,
                    id: 2001,
                    name: "有機雞蛋",
                    price: "100",
                    image: "../../src/assets/images/product/eggs-cover.png",
                    type: "egg",
                    heartFilled:false,
                    desc:"這些雞蛋來自於飼養方式自然、沒有使用化學藥劑的健康雞隻。它們不僅營養價值高，還具有更濃郁的口感。適合重視食品品質和環境永續的消費者。"
                },
                {
                    index: 1,
                    id: 2101,
                    name: "有機小農豆漿",
                    price: "150",
                    image: "../../src/assets/images/product/soymilk.png",
                    type: "egg",
                    heartFilled:false,
                    desc:"來自小農有機豆子製成，濃郁香滑的有機豆漿，天然營養好滋味，健康的一杯，為您帶來美好的早晨。"
                },
                {
                    index: 1,
                    id: 2201,
                    name: "非基改濃醇豆腐",
                    price: "170",
                    image: "../../src/assets/images/product/tofu.jpg",
                    type: "egg",
                    desc:"精選非基改黃豆，製作成濃醇綿密的豆腐，口感細緻，營養豐富，是素食者的理想之選。"
                },
                {
                    index: 2,
                    id: 3001,
                    name: "純香食用油",
                    price: "300",
                    image: "../../src/assets/images/product/oil-cover.jpg",
                    type: "oil",
                    heartFilled:false,
                    desc:"精選優質原料製成的食用油，適用於各種烹飪方式。它的穩定熱性和淡雅口感，能夠提升料理的風味，同時保持食物的原始味道。"
                },
                {
                    index: 2,
                    id: 3101,
                    name: "台東優質池上米",
                    price: "150",
                    image: "../../src/assets/images/product/rice.png",
                    type: "oil",
                    heartFilled:false,
                    desc:"來自台灣台東池上的優質米，口感Q彈，香氣四溢，是美味飯菜的最佳選擇，為您帶來飽滿的食慾。"
                },
                {
                    index: 2,
                    id: 3201,
                    name: "高纖天然燕麥",
                    price: "320",
                    image: "../../src/assets/images/product/oats.png",
                    type: "oil",
                    heartFilled:false,
                    desc:"富含膳食纖維的燕麥，營養豐富，早餐的最佳夥伴，提供長時間的飽足感，讓您一天都充滿活力。"
                },
                {
                    index: 3,
                    id: 4001,
                    name: "基隆水產養殖鮮魚",
                    price: "500",
                    image: "../../src/assets/images/product/fish-cover.png",
                    type: "fish",
                    heartFilled:false,
                    desc:"來自專業養殖場的鮮魚，保證魚類成長過程中的水質和食物來源控制。這些魚類肉質鮮美，富含豐富的Omega-3，是健康飲食的絕佳選擇。"
                },
                {
                    index: 3,
                    id: 4101,
                    name: "頂級穀飼牛肉",
                    price: "700",
                    image: "../../src/assets/images/product/beef.png",
                    type: "fish",
                    heartFilled:false,
                    desc:"由頂級穀飼牛肉製成，肉質鮮嫩多汁，是高品質牛肉的極致享受，給您帶來美味的用餐體驗。"
                },
                {
                    index: 3,
                    id: 4201,
                    name: "霸王大草蝦",
                    price: "400",
                    image: "../../src/assets/images/product/shrimp.png",
                    type: "fish",
                    heartFilled:false,
                    desc:"大草蝦鮮美彈牙，香氣四溢。火鍋、烤盤都適用，是美味海鮮的代表，滿足您對鮮甜海味的渴望。"
                },
                {
                    index: 4,
                    id: 5001,
                    name: "冷凍蔬菜",
                    price: "330",
                    image: "../../src/assets/images/product/vegetable_cover.jpg",
                    type: "vegetable",
                    heartFilled:false,
                    desc:"這些蔬菜在採收後迅速冷凍，有效鎖住營養和新鮮度。它們提供了一個方便、快速的烹飪選擇，同時確保了蔬菜的營養價值，適合忙碌且注重健康的現代人。"
                },
                {
                    index: 4,
                    id: 5101,
                    name: "非基改玉米",
                    price: "220",
                    image: "../../src/assets/images/product/corn.png",
                    type: "vegetable",
                    heartFilled:false,
                    desc:"精選非基改玉米，香甜多汁，天然健康，是營養點心和各種菜餚的好選擇，提供您最天然的味覺享受。"
                },
                {
                    index: 4,
                    id: 5201,
                    name: "冷凍新鮮豌豆",
                    price: "200",
                    image: "../../src/assets/images/product/peas.jpg",
                    type: "vegetable",
                    heartFilled:false,
                    desc:"採摘後立即冷凍，保持豌豆的新鮮口感，富含營養，方便烹調。清爽甜美，為您的料理增添豐富風味。"
                },
            ]
        }
    },
    getters:{
        getProductById:(state)=>{
            return(id) => state.products.find(product => product.id === id)
        }
    }
})