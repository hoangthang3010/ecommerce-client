<template>
  <div>
    <client-only placeholder="Loading...">
      <agile ref="imageSlide" :initial-slide="slideStart" :options="options">
        <div v-for="(slide, index) in slides" :key="index" class="slide" :class="`slide--${index}`">
          <slot :button="slide.button" :title="slide.title"></slot>
          <img
            class="object-cover m-auto"
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
    options: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
<style scoped lang="scss">
::v-deep() {
  .agile {
    &__nav-button {
      background: transparent;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 24px;
      height: 100%;
      position: absolute;
      top: 0;
      transition-duration: 0.3s;
      width: 80px;

      &:hover {
        background-color: rgba(#000, 0.5);
        opacity: 1;
      }

      &--prev {
        left: 0;
      }

      &--next {
        right: 0;
      }
    }
    &__dots {
      bottom: 10px;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    }
    &__dot {
      margin: 0 10px;
      button {
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        display: block;
        height: 10px;
        font-size: 0;
        line-height: 0;
        margin: 0;
        padding: 0;
        transition-duration: 0.3s;
        width: 10px;
      }

      &--current,
      &:hover {
        button {
          background-color: #fff;
        }
      }
    }
  }
}
</style>
