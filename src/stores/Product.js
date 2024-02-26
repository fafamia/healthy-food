import { defineStore } from "pinia";
import axios from "axios";
export const useProductStore = defineStore("ProductStore",{
    state: ()=>{
        return {
            products:[],
            productClass:[],
            favoItems: []
        }
    },
    getters:{
        getProductByNo:(state)=>{
            return(product_no) => {
                return state.products.find(product => product.product_no.toString() === product_no.toString())
            }
        },
        getImageUrl:() => (paths) => {
                return new URL(`${import.meta.env.VITE_IMAGES_BASE_URL}/product/${paths}`).href;
                
        }, 
    },
    actions:{
        async getProductData(){
            try{
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/front/product/productDisplayDataGet.php`)
                if(response && response.data){
                    this.products = response.data.products;
                }
            }
            catch (error) {
                console.error("Error fetching products:", error);
            }
        },
        async getProductClassData(){
            try{
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/product/productClassDataGet.php`)
                if(response && response.data){
                    this.productClass = response.data.prodclass;
                }
            }
            catch (error) {
                console.error("Error fetching productClasss:", error);
            }
        },
        // addFavoItem(item) {
        //     this.favoItems.push(item);
        //   }
    }
})