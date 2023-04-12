<template>
  <!-- sticky top-0 z-[9999] -->
  <div :class="[isSwiperBar ? 'h-[120px]' : 'h-[60px]', 'flex items-end hover:bg-[black] pb-[10px]']" ref="">
    <div class="w-[100%] items-end flex justify-center px-[20px] text-white items-center flex-col">
      <div
        :class="[
          isSwiperBar ? 'top-[70px]' : 'top-[14px]',
          'fixed left-[30px] flex items-center gap-[4px] py-[10px] text-[11px]',
        ]"
      >
        <i class="el-icon-location inline-block h-[15px]" />
        <span class="ml-[3px] inline-block gucci-text-base cursor-pointer" v-if="compressed">Client Services</span>
        <div class="flex items-center gap-[10px]" v-else>
          <span class="gucci-text-base cursor-pointer">USA</span>
          <span class="gucci-text-base cursor-pointer">English</span>
          <span class="gucci-text-base cursor-pointer">Client Services</span>
        </div>
      </div>

      <div class="logo text-0" v-if="!compressed">
        <span>GUCCI</span>
      </div>
      <div class="flex">
        <ul v-for="item in listItem" :key="'key-' + item.name" class="px-[20px] py-[10px]">
          <nuxt-link
            class="color-[white]"
            to="/"
            tag="li"
            :class="[
              'gucci-text-base cursor-pointer font-[800] text-[11px] uppercase',
              { 'text-[#A1C751!important] hover:text-[#A1C751!important]': item.name === 'handbags' },
            ]"
          >
            {{ item.label }}
          </nuxt-link>
        </ul>
      </div>
      <div
        :class="[isSwiperBar ? 'top-[57px]' : 'top-20px', 'fixed right-[30px] py-[10px] flex items-center gap-[20px]']"
      >
        <div v-if="compressed" class="flex gap-[20px]">
          <i class="el-icon-user gucci-text-base cursor-pointer" />
          <i class="el-icon-goods gucci-text-base cursor-pointer" />
        </div>
        <div class="flex gap-[25px] items-center" v-else>
          <span class="text-[11px] gucci-text-base cursor-pointer">Sign In</span>
          <i class="el-icon-user gucci-text-base cursor-pointer" />
          <div class="flex items-center gucci-text-base gap-[4px]">
            <i class="el-icon-goods cursor-pointer" />
            <span class="text-[11px] cursor-pointer">Bag</span>
          </div>
        </div>
        <i
          class="el-icon-search text-[15px] rounded-full p-[6px] border-2 border-solid border-[#e5dfd9] hover:border-white font-bold cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    compressed: {
      type: Boolean,
      default: false,
    },
    isSwiperBar: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    a() {
      return this.isSwiperBar ? this.isSwiperBar : this.compressed
    },
  },
  data() {
    return {
      listItem: [
        {
          name: 'what-is-new',
          label: "What's new",
        },
        {
          name: 'handbags',
          label: 'Handbags',
        },
        {
          name: 'women',
          label: 'Women',
        },
      ],
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.logo {
  background-image: url(data:image/png;base64,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);
  background-repeat: no-repeat;
  background-size: 160px 26px;
  font-size: 0;
  height: 40px;
  position: relative;
  width: 160px;
  z-index: 100;
}
</style>
