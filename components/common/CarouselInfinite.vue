<template>
  <div :class="['h-[47vw]']">
    <client-only placeholder="Loading...">
      <agile ref="imageSlide" :initial-slide="slideStart" :options="optionsImageSlide">
        <div v-for="(slide, index) in slides" :key="index" class="slide" :class="`slide--${index}`">
          <div
            class="absolute w-[100%] top-[50%] left-[50%] flex flex-col translate-x-[-50%] translate-y-[-50%] justify-center"
          >
            <span class="text-center text-[66px] text-[white]">
              {{ slide.title.toUpperCase() }}
            </span>
            <div class="flex justify-center">
              <Button
                class="text-base"
                type="primary"
                v-for="(item, index) in slide.button"
                :key="index"
                :name="item.label.toUpperCase()"
              />
            </div>
          </div>
          <img
            class="h-[47vw] w-[100%] object-cover"
            :src="slide.image ? slide.image : require('~/assets/images/not-image.png')"
            alt=""
            @error="$event.target.src = require('~/assets/images/not-image.png')"
          />
        </div>
        <template slot="prevButton">
          <em ref="icon" class="el-icon-arrow-left"></em>
        </template>
        <template slot="nextButton">
          <em ref="icon" class="el-icon-arrow-right"></em>
        </template>
      </agile>
    </client-only>
  </div>
</template>

<script>
/* How to use
<CarouselInfinite
            :slides="slides"
            :options-image-slide="optionsImageSlide"
            :options-infinite="optionsInfinite"
          ></CarouselInfinite>
*/

const SHOW_SLIDES = 4
export default {
  props: {
    slides: {
      type: Array,
      default: () => [
        {
          title: 'This is slide 1',
          image:
            'https://media.gucci.com/content/HeroBigStandard_1600x760/1679479217/HeroBigStandard_Julia-Garner-horsebit-march23_001_Default.jpg',
          button: [
            {
              url: '',
              label: 'shop now',
            },
          ],
        },
        {
          title: 'This is the second slide',
          image:
            'https://media.gucci.com/content/HeroBigStandard_1600x760/1679400917/HeroBigStandard_GG-CUT-Mar23-Black-new_001_Default.jpg',
          button: [
            {
              url: '',
              label: 'shop now',
            },
          ],
        },
        {
          title: 'This is a third and final slide',
          image:
            'https://media.gucci.com/content/HeroBigStandard_1600x760/1678464954/HeroBigStandard_Gucci-Spring-Summer-23-032_001_Default.jpg',
          button: [
            {
              url: '',
              label: 'shop women',
            },
            {
              url: '',
              label: 'shop men',
            },
          ],
        },
        {
          title: 'This is a third and final slide',
          image:
            'https://media.gucci.com/content/HeroBigStandard_1600x760/1676039455/HeroBigStandard_Gucci-Spring-Summer-23-004_001_Default.jpg',
          button: [
            {
              url: '',
              label: 'shop now',
            },
          ],
        },
      ],
    },
    slideStart: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      SHOW_SLIDES,
      asNavFor2: [],

      optionsInfinite: {
        autoplay: false,
        centerMode: false,
        dots: false,
        navButtons: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: SHOW_SLIDES,
              infinite: this.slides.length > SHOW_SLIDES,
            },
          },
        ],
      },
      optionsImageSlide: {
        autoplay: false,
        dots: false,
        fade: true,
        navButtons: true,
      },
    }
  },
}
</script>
<style scoped lang="scss" />
