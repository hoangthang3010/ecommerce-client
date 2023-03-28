<template>
  <el-button
    :type="type"
    :color="type"
    :outline="outline"
    :plain="plain"
    :round="round"
    :circle="circle"
    :icon="icon"
    :style="customStyle"
    :disabled="disabled"
    :size="size"
    :native-type="nativeType"
    :autofocus="autofocus"
    :loading="loading"
    @click="$emit('click')"
  >
    {{ name }}
  </el-button>
</template>

<script>
export default {
  props: {
    autofocus: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      // el-icon-edit
      type: String,
      default: '',
    },
    circle: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    nameMobile: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      // el-icon-edit
      type: String,
      default: '',
    },
    outline: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
    type: {
      // primary, success, info, warning, danger
      type: String,
      default: '',
    },
    round: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
$cl-white: #ffffff;
$cl-primary: #1b1b1b;
$cl-success: #67c23a;
$cl-info: #909399;
$cl-warning: $primary-black;
$cl-danger: #f56c6c;
$cl-primary-light: #74b8fd;
$cl-success-light: #86c368;
$cl-info-light: #afb2b9;
$cl-warning-light: #b9945a;
$cl-danger-light: #f78686;
$cl-info-heavy: #616161;

button.el-button {
  border-radius: 0;
  &--primary {
    background-color: $primary-black;
    border-color: $primary-black;
    &:hover {
      background-color: $primary-black-light;
      border-color: $primary-black-light;
    }
  }
}
</style>
