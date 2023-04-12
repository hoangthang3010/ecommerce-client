<template>
  <div class="homepage">
    <CarouselInfinite class="product-list" :options="optionsProdList" v-slot="scope">
      <div
        class="absolute w-[100%] top-[50%] left-[50%] flex flex-col translate-x-[-50%] translate-y-[-50%] justify-center"
      >
        <span class="text-center text-[66px] text-[white] uppercase">
          {{ scope.title }}
        </span>
        <div class="flex justify-center">
          <Button
            class="text-base uppercase"
            type="primary"
            v-for="(item, index) in scope.button"
            :key="index"
            :name="item.label"
          />
        </div>
      </div>
    </CarouselInfinite>
    <div class="p-[15px]">
      <div class="pb-[140px] bg-[#e7e7e7] content">
        <CarouselInfinite :slides="bagList" :options="optionBagList" class="bag-list" v-slot="scope">
          <div
            class="absolute w-[100%] top-[75%] z-[2] left-[50%] flex flex-col translate-x-[-50%] translate-y-[-50%] justify-center"
          >
            <span class="text-center text-[30px] text-[black] uppercase">
              {{ scope.title }}
            </span>
            <span class="text-center">*</span>
            <div class="flex justify-center">
              <Button
                class="text-base uppercase"
                type="primary"
                v-for="(item, index) in scope.button"
                :key="index"
                :name="item.label"
              />
            </div>
          </div>
        </CarouselInfinite>
        <div class="flex justify-center flex-col items-center">
          <img
            src="https://media.gucci.com/content/GiantEditorialStandard_1366x1643/1679393733/GiantEditorialStandard_Horsebit-1955-mar23-US_001_Default.jpg"
            alt=""
            class="h-[1643px] w-[1366px]"
          />
          <div class="m-[30px] flex flex-col justify-center">
            <span class="text-center text-[30px] text-[black] uppercase">Gucci Horsebit 1955</span>
            <span class="text-center">*</span>
            <div class="flex justify-center">
              <Button class="text-base uppercase" type="primary" name="shop now" />
            </div>
          </div>
        </div>
        <div class="flex justify-center flex-col items-center aspect-[3/1] w-[100%] relative">
          <div class="m-auto absolute top-[50%] left-[50%] translate-[-50%]">ưerer</div>
          <img
            src="https://media.gucci.com/content/HomepageVideoBackgroundStandard_1300x758/1680085029/HomepageVideoBackgroundStandard_adidas-march31_001_Default.jpg"
            alt=""
            class="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      bagList: [
        {
          title: 'This is slide 1',
          image:
            'https://media.gucci.com/content/DarkGray_ProductPush_Standard_700x700/1643823982/ProductPush_6022041DB0G1000-updated-2_001_Light.jpg',
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
            'https://media.gucci.com/content/DarkGray_ProductPush_Standard_700x700/1639153807/ProductPush_6022041DB0G6638-new_001_Light.jpg',
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
            'https://media.gucci.com/content/DarkGray_ProductPush_Standard_700x700/1572007503/ProductPush_6022041DB0G2361_001_Light.jpg',
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
            'https://media.gucci.com/content/DarkGray_ProductPush_Standard_700x700/1563371104/ProductPush_60220492TCG8563_001_Light.jpg',
          button: [
            {
              url: '',
              label: 'shop now',
            },
          ],
        },
      ],

      optionsProdList: {
        autoplay: false,
        dots: true,
        fade: true,
        navButtons: true,
      },
      optionBagList: {
        autoplay: false,
        dots: false,
        fade: true,
        navButtons: true,
      },
    }
  },
}
</script>
<style lang="scss" scoped>
::v-deep() {
  .product-list {
    img {
      width: 100%;
    }
  }
}
.content {
  ::v-deep() {
    .agile {
      img {
        transform: translateY(-100px);
        width: 700px;
        aspect-ratio: 1/1;
      }
    }
  }
}
</style>
