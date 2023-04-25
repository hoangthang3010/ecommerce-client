<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column v-for="(item, index) in headerTable" :key="index" :prop="item.name" :label="item.label">
        <template slot-scope="scope">
          <!-- {{ scope.row }} -->
          <el-select v-if="item.name === 'active'" v-model="scope.row.active" placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <div v-else-if="item.name === 'date'">
            <el-date-picker v-model="scope.row.date" type="date" placeholder="Pick a day"></el-date-picker>
          </div>
          <div v-else-if="item.name === 'price'">{{ scope.row[item.name] | price }}đ</div>
          <div v-else>{{ scope.row[item.name] }}</div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Operations" width="120">
        <template slot-scope="scope">
          <!-- {{ scope.row.isEdit }} -->
          <!-- <el-button @click="handleClick" type="text" size="small">Detail</el-button> -->
          <el-button v-if="!scope.row.isEdit" type="text" size="small" @click="scope.row.isEdit = true">Edit</el-button>
          <div v-else>
            <el-button type="text" size="small" @click="onSave(scope.row)">Save</el-button>
            <el-button type="text" size="small" @click="scope.row.isEdit = false">Cancel</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  layout: 'not-login',
  methods: {
    handleClick() {
      console.log('click')
    },
  },
  async fetch() {
    try {
      // this.$nuxt.$loading.start()
      const data = await this.$userApi.auth.getLists()
      this.tableData = data.data.map((item) => {
        return { ...item, isEdit: false }
      })
    } catch (error) {
      console.error(error)
    } finally {
      // this.$nuxt.$loading.finish()
    }
  },
  data() {
    return {
      options: [
        {
          value: 'eat',
          label: 'Ăn uống',
        },
        {
          value: 'trip',
          label: 'Du Lịch',
        },
        {
          value: 'shopping',
          label: 'Mua sắm',
        },
        {
          value: 'entertainment',
          label: 'Vui chơi',
        },
        {
          value: 'other',
          label: 'Dịch vụ khác',
        },
      ],
      value: '',
      tableData: [],
      headerTable: [
        {
          name: 'active',
          label: 'Active',
        },
        {
          name: 'content',
          label: 'Content',
        },
        {
          name: 'price',
          label: 'Price',
        },
        {
          name: 'date',
          label: 'Date',
        },
      ],
    }
  },
  methods: {
    async onSave(data) {
      try {
        await this.$userApi.auth.updateLists(data.id, data)
        // this.tableData = data.data.map((item) => {
        //   return { ...item, isEdit: false }
        // })
      } catch (error) {
        console.error(error)
      } finally {
      }
    },
  },
}
</script>
