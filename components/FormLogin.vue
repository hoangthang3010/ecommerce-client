<template>
  <el-form ref="form" :model="formData" label-width="120px">
    <el-form-item label="Email">
      <el-input v-model="formData.email"></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="formData.password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
        remember_me: true,
      },
    }
  },
  methods: {
    async onSubmit() {
      if (this.formData.email && this.formData.password) {
        try {
          this.$nuxt.$loading.start()
          this.formData.email = this.formData.email.trim()
          await this.$auth.loginWith('local', {
            data: this.formData,
          })
          this.$router.push('/')
        } catch (error) {
          // this.$router.push('/login')
        } finally {
          this.$nuxt.$loading.finish()
          // if (this.$auth.user) {
          //   sessionStorage.setItem('logged', 1)
          // } else {
          //   if (navigator.onLine == false) {
          //     this.errorMsg = this.$t('msg.MSG_024')
          //   }
          // }
        }
      }
    },
  },
}
</script>
