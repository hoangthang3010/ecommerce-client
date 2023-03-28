<template>
  <div id="layouts__default" class="layouts__default" v-scroll="scrollPage">
    <div
      :class="[
        compressed ? 'swiper-bar-hidden' : 'swiper-bar-appear',
        'fixed top-0 z-[10] h-[50px] w-[100vw] bg-[white]',
      ]"
    >
      <i class="el-icon-close absolute top-[50%] left-[20px] translate-y-[-50%] z-[3]" />
      <el-carousel direction="vertical" :autoplay="true" :interval="4000" class="h-[100%]">
        <el-carousel-item
          v-for="item in [
            'Collect In-Store: Order online & pick up in your preferred boutique',
            'Discover the latest collection of Interlocking G Loafers',
            'Complimentary Shipping & returns on all online orders',
          ]"
          :key="item"
          class="text-center leading-[50px]"
        >
          <span class="medium text-center">{{ item }}</span>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="h-[50px] w-[100vw] bg-[white]"></div>
    <div :class="[compressed ? 'page-header-up' : 'page-header-down', 'z-[10] sticky top-[50px] w-[100vw]']">
      <HeaderPage />
    </div>
    <el-container ref="elContainer" class="translate-y-[-120px]">
      <el-main style="min-height: 100vh; padding: 0; overflow-x: clip; overflow-y: unset">
        <slot name="content"></slot>
        <Nuxt />

        {{ compressed }} gk
      </el-main>
    </el-container>

    <!-- <Footer /> -->
  </div>
</template>
<script>
export default {
  name: 'LayoutDefault',
  data() {
    return {
      jsonld: {
        '@context': 'http://schema.org/',
        '@type': 'Product',
        name: ['Abcd'],
        image: [''],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '299.00',
          priceValidUntil: '2020-11-11',
          itemCondition: 'http://schema.org/NewCondition',
          availability: 'http://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: ['Furusato Japan', 'Furusato Nozei'],
          },
        },
      },
      compressed: false,
    }
  },
  head() {
    return {
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(this.jsonld), // <- set jsonld object in data or wherever you want
        },
      ],
      __dangerouslyDisableSanitizers: ['script'], // <- this is important
    }
  },
  methods: {
    scrollPage() {
      if (this.$refs.elContainer.$el.getBoundingClientRect().top <= -100) this.compressed = true
      else this.compressed = false
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes page-header-up {
  from {
    top: 50px;
    background: black;
  }
  to {
    top: 0px;
    background: black;
  }
}
@keyframes page-header-down {
  from {
    top: 0px;
    background: linear-gradient(to bottom, #25211e 0, rgba(37, 33, 30, 0) 100%);
  }
  to {
    top: 50px;
    background: linear-gradient(to bottom, #25211e 0, rgba(37, 33, 30, 0) 100%);
  }
}
.page-header-up,
.page-header-down {
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
}
.page-header-up {
  animation-name: page-header-up;
}
.page-header-down {
  animation-name: page-header-down;
}

@keyframes swiper-bar-hidden {
  from {
    height: 50px;
  }
  to {
    height: 0px;
  }
}
@keyframes swiper-bar-appear {
  from {
    height: 0px;
  }
  to {
    height: 50px;
  }
}
.swiper-bar-hidden {
  animation-name: swiper-bar-hidden;
  animation-duration: 0.5s;
}
.swiper-bar-appear {
  animation-name: swiper-bar-appear;
  animation-duration: 0.5s;
}
// .swiper-bar-appear {
//   animation-name: example1;
//   animation-duration: 1s;
//   animation-direction: reverse;
// }
::v-deep() {
  // .el-carousel__item h3 {
  //   color: #475669;
  //   font-size: 14px;
  //   opacity: 0.75;
  //   line-height: 50px;
  //   margin: 0;
  // }

  // .el-carousel__item:nth-child(2n) {
  //   background-color: #99a9bf;
  // }

  // .el-carousel__item:nth-child(2n + 1) {
  //   background-color: #d3dce6;
  // }
  .el-carousel__container {
    height: 100%;
  }
}
</style>
