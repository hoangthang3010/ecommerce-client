<template>
  <!-- sticky top-0 z-[9999] -->
  <div class="h-[120px] flex items-end hover:bg-[black] pb-[10px]">
    <div class="w-[100%] items-end flex justify-center px-[20px] text-white items-center">
      <div class="fixed top-[70px] left-[30px] py-[10px] text-[10px]">
        <i class="el-icon-location" />
        <span class="ml-[3px]">Client Services</span>
      </div>
      <div class="flex">
        <ul v-for="item in listItem" :key="'key-' + item.name" class="px-[20px] py-[10px]">
          <!-- <nuxt-link class="color-[white]"> -->
          <li class="text-[#e5dfd9] hover:text-[white] cursor-pointer">
            {{ item.label.toUpperCase() }}
          </li>
          <!-- </nuxt-link> -->
        </ul>
      </div>
      <div class="fixed top-[57px] right-[30px] py-[10px] flex items-center gap-[10px]">
        <i class="el-icon-user border-[#e5dfd9] hover:border-white cursor-pointer" />
        <i class="el-icon-goods border-[#e5dfd9] hover:border-white cursor-pointer" />
        <i
          class="el-icon-search text-[15px] rounded-full p-[6px] border-2 border-solid border-[#e5dfd9] hover:border-white font-bold cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
