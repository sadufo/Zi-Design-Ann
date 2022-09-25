

<template>
<div class="container">
     <swiper :modules="[EffectFade]" effect="fade" @swiper="onSwiper" @slideChange="onSlideChange" class="mySwiper">
          <HeaderContent />
          <swiper-slide class="slider_item"><img src="@/assets/img/slider.png" alt=""></swiper-slide>
          <swiper-slide class="slider_item"><img
                    src="https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""></swiper-slide>
          <swiper-slide class="slider_item"><img src="@/assets/img/slider.png" alt=""></swiper-slide>
          <swiper-slide class="slider_item"><img src="@/assets/img/slider.png" alt=""></swiper-slide>
          <SliderControl :start="start" :end="end" :index="index" :length="length" />
     </swiper>
     
</div>


</template>

<style scoped>
.container{
     position: relative;
     width: 100%;
     height: 100vh;
     display: flex;
     align-content: center;
     justify-content: center;
     box-sizing: border-box;
     padding: 1%;
     background-color: #202328;
}
</style>
   
<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade } from 'swiper';
import "swiper/css";
import 'swiper/css/effect-fade';
import "./index.scss"
import SliderControl from "../SliderControl/SliderControl.vue";
import HeaderContent from "../HeaderContent/HeaderContent.vue";



export default {
     components: {
    Swiper,
    SwiperSlide,
    SliderControl,
    HeaderContent
},
     data() {
          return {
               start: undefined,
               end: undefined,
               index: 0,
               length: undefined,
               swiper: undefined
          }
     },
     setup() {
          return {
               EffectFade,
          };
     },
     methods: {
          onSwiper(swiper) {
               this.start = swiper.isBeginning
               this.end = swiper.isEnd
               this.index = swiper.activeIndex
               this.swiper = swiper
               this.length = this.swiper.wrapperEl.children.length
          },
          onSlideChange(swiper) {
               this.start = swiper.isBeginning
               this.end = swiper.isEnd
               this.swiper = swiper
               this.index = swiper.activeIndex
          },
     },
};
</script>