<template>
  <v-toolbar
    :height="height"
    flat
    tile
    color="#ee742f"
    class="d-flex justify-center"
  >
    <slot name="default">请输入内容</slot>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    height: {
      type: [Number,String],
      default: 48,
    },
  },
}
</script>

<style></style>
