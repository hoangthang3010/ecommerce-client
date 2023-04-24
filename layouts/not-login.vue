<template>
  <div class="layouts__default">
    <!-- START: HEADER -->
    <!-- <header id="header" class="header_not_login">
      <div class="header__wrapper d-flex align-items-center justify-content-center">
        <div class="header_content">
          <nuxt-link to="/" class="logo d-flex align-items-center">
            <img
              src="~/assets/icons/icon-logo-new.svg"
              alt=""
              class="hidden-sm-and-down"
            />
            <img
              src="~/assets/icons/icon-log-mob.svg"
              alt=""
              class="hidden-md-and-up"
            />
          </nuxt-link>
        </div>
      </div>
    </header> -->
    <el-container>
      <el-main style="min-height: 100vh">
        <Nuxt />
      </el-main>
    </el-container>
    <Footer />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
$bg-color: #150c15;
$cl-white: #ffffff;
.header_not_login {
  .header__wrapper {
    // background: $bg-color;
    min-height: 92px;
    // color: $cl-white;
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
