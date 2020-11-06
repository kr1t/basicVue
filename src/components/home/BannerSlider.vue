<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="slide in slides" :key="slide.text">
      <button class="btn btn-primary position-absolute m-4">
        {{ slide.text }}
      </button>
      <img :src="slide.image_url" class="w-100" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<script>
const loremPicsum = id => {
  return `https://picsum.photos/id/${id}/1200/300`;
};
export default {
  data: () => ({
    slides: [
      {
        text: 'A',
        image_url: loremPicsum(200)
      },
      {
        text: 'B',
        image_url: loremPicsum(100)
      },
      {
        text: 'C',
        image_url: loremPicsum(129)
      }
    ],
    swiperOption: {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  }),
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  }
};
</script>