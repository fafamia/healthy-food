import { defineStore } from "pinia";

export const useProductStore = defineStore("ProductStore",{
    state: ()=>{
        return {
            products:[
                {
                    index:0,
                    id: 1001,
                    name: "南瓜蔬食調理包",
                    price: "170",
                    image: "../../src/assets/images/product/pumpkin_cover.png",
                    type: "lunchbox",
                    desc:"這款調理包是忙碌生活中的完美選擇，主要以新鮮南瓜為基底，搭配多種營養豐富的蔬菜。方便快捷的料理方式，不僅省時也兼顧健康，適合素食者和尋求健康飲食的消費者。"
                },
                {
                    index:0,
                    id: 1101,
                    name: "南瓜蔬食調理包",
                    price: "170",
                    image: "../../src/assets/images/product/pumpkin_cover.png",
                    type: "lunchbox",
                    desc:"這款調理包是忙碌生活中的完美選擇，主要以新鮮南瓜為基底，搭配多種營養豐富的蔬菜。方便快捷的料理方式，不僅省時也兼顧健康，適合素食者和尋求健康飲食的消費者。"
                },
                {
                    index:0,
                    id: 1201,
                    name: "南瓜蔬食調理包",
                    price: "170",
                    image: "../../src/assets/images/product/pumpkin_cover.png",
                    type: "lunchbox",
                    desc:"這款調理包是忙碌生活中的完美選擇，主要以新鮮南瓜為基底，搭配多種營養豐富的蔬菜。方便快捷的料理方式，不僅省時也兼顧健康，適合素食者和尋求健康飲食的消費者。"
                },
                {
                    index:1,
                    id: 2001,
                    name: "有機雞蛋",
                    price: "100",
                    image: "../../src/assets/images/product/eggs-cover.png",
                    type: "egg",
                    desc:"這些雞蛋來自於飼養方式自然、沒有使用化學藥劑的健康雞隻。它們不僅營養價值高，還具有更濃郁的口感。適合重視食品品質和環境永續的消費者。"
                },
                {
                    index:1,
                    id: 2101,
                    name: "有機雞蛋",
                    price: "100",
                    image: "../../src/assets/images/product/eggs-cover.png",
                    type: "egg",
                    desc:"這些雞蛋來自於飼養方式自然、沒有使用化學藥劑的健康雞隻。它們不僅營養價值高，還具有更濃郁的口感。適合重視食品品質和環境永續的消費者。"
                },
                {
                    index:1,
                    id: 2201,
                    name: "有機雞蛋",
                    price: "100",
                    image: "../../src/assets/images/product/eggs-cover.png",
                    type: "egg",
                    desc:"這些雞蛋來自於飼養方式自然、沒有使用化學藥劑的健康雞隻。它們不僅營養價值高，還具有更濃郁的口感。適合重視食品品質和環境永續的消費者。"
                },
                {
                    index:2,
                    id: 3001,
                    name: "食用油",
                    price: "300",
                    image: "../../src/assets/images/product/oil-cover.png",
                    type: "oil",
                    desc:"精選優質原料製成的食用油，適用於各種烹飪方式。它的穩定熱性和淡雅口感，能夠提升料理的風味，同時保持食物的原始味道。"
                },
                {
                    index:2,
                    id: 3101,
                    name: "食用油",
                    price: "300",
                    image: "../../src/assets/images/product/oil-cover.png",
                    type: "oil",
                    desc:"精選優質原料製成的食用油，適用於各種烹飪方式。它的穩定熱性和淡雅口感，能夠提升料理的風味，同時保持食物的原始味道。"
                },
                {
                    index:2,
                    id: 3201,
                    name: "食用油",
                    price: "300",
                    image: "../../src/assets/images/product/oil-cover.png",
                    type: "oil",
                    desc:"精選優質原料製成的食用油，適用於各種烹飪方式。它的穩定熱性和淡雅口感，能夠提升料理的風味，同時保持食物的原始味道。"
                },
                {
                    index:3,
                    id: 4001,
                    name: "水產養殖鮮魚",
                    price: "500",
                    image: "../../src/assets/images/product/fish-cover.png",
                    type: "fish",
                    desc:"來自專業養殖場的鮮魚，保證魚類成長過程中的水質和食物來源控制。這些魚類肉質鮮美，富含豐富的Omega-3，是健康飲食的絕佳選擇。"
                },
                {
                    index:3,
                    id: 4101,
                    name: "水產養殖鮮魚",
                    price: "500",
                    image: "../../src/assets/images/product/fish-cover.png",
                    type: "fish",
                    desc:"來自專業養殖場的鮮魚，保證魚類成長過程中的水質和食物來源控制。這些魚類肉質鮮美，富含豐富的Omega-3，是健康飲食的絕佳選擇。"
                },
                {
                    index:3,
                    id: 4201,
                    name: "水產養殖鮮魚",
                    price: "500",
                    image: "../../src/assets/images/product/fish-cover.png",
                    type: "fish",
                    desc:"來自專業養殖場的鮮魚，保證魚類成長過程中的水質和食物來源控制。這些魚類肉質鮮美，富含豐富的Omega-3，是健康飲食的絕佳選擇。"
                },
                {
                    index:4,
                    id: 5001,
                    name: "冷凍蔬菜",
                    price: "330",
                    image: "../../src/assets/images/product/vegetable_cover.png",
                    type: "vegetable",
                    desc:"這些蔬菜在採收後迅速冷凍，有效鎖住營養和新鮮度。它們提供了一個方便、快速的烹飪選擇，同時確保了蔬菜的營養價值，適合忙碌且注重健康的現代人。"
                },
                {
                    index:4,
                    id: 5101,
                    name: "冷凍蔬菜",
                    price: "330",
                    image: "../../src/assets/images/product/vegetable_cover.png",
                    type: "vegetable",
                    desc:"這些蔬菜在採收後迅速冷凍，有效鎖住營養和新鮮度。它們提供了一個方便、快速的烹飪選擇，同時確保了蔬菜的營養價值，適合忙碌且注重健康的現代人。"
                },
                {
                    index:4,
                    id: 5201,
                    name: "冷凍蔬菜",
                    price: "330",
                    image: "../../src/assets/images/product/vegetable_cover.png",
                    type: "vegetable",
                    desc:"這些蔬菜在採收後迅速冷凍，有效鎖住營養和新鮮度。它們提供了一個方便、快速的烹飪選擇，同時確保了蔬菜的營養價值，適合忙碌且注重健康的現代人。"
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