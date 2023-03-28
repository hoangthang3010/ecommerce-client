<template>
  <div>
    <header id="header" class="header_not_login">
      <div class="header__wrapper d-flex align-items-center justify-content-center">
        <div class="header_content">
          <span class="logo d-flex align-items-center cursor-pointer" @click="goToHomePage">
            <!-- <img
              src="~/assets/icons/icon-logo-new.svg"
              alt=""
              class="hidden-sm-and-down"
            />
            <img
              src="~/assets/icons/icon-log-mob.svg"
              alt=""
              class="hidden-md-and-up"
            /> -->
          </span>
        </div>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    async goToHomePage() {
      if (this.$route.name === '401') {
        await this.$auth.logout()
        await this.$auth.$storage.setState('loggedIn', false)
      }
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.header_not_login {
  .header__wrapper {
    // background: $color-dark--15;
    min-height: 92px;
    // color: $bg-white;
    a {
      color: inherit;
    }
    .logo__text {
      font-family: 'Playfair Display', Arial, Helvetica, sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: -0.8px;
      text-transform: uppercase;
      padding-left: 0.625rem;
    }
  }
}
</style>
