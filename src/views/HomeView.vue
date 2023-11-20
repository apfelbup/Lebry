<script setup lang="ts">
  import FormSubscribe from '@/components/forms/FormSubscribe.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';

  const onSwiper = () => {
        console.log(1);
      };

      const onSlideChange = () => {
        console.log('slide change');
      };
</script>

<template>
  <section class="section section--green section--full">
    <div class="container section__paddings--default">
      <div class="section__heading section__heading--decor">
        <div class="section__title section__title--size-big">
          Let’s talk
        </div>
        <div class="section__subtitle">
          Hot-topic this week
        </div>
      </div>
      <swiper
        :slides-per-view="3"
        :space-between="50"
        :loop="true"
        :modules="[Navigation]"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
    </swiper>
    </div>
  </section>
  <section class="section section__paddings--big">
    <div class="container">
      <form-subscribe/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});

</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

.swiper {
  height: rem(600);
  padding: 0 rem(25);
}


.swiper-slide {
  background-color: $cape-cod;

  transform: translate3d(0px, 80px, 0);
  transition: all 0.3s;

  opacity: 0.7;

  border-radius: rem(20);
}

.swiper-slide-next {
  transform: translate3d(0px, 0, 0);

  opacity: 1;
}

.swiper-button-prev, 
.swiper-button-next {
  color: $sun;
}
</style>
