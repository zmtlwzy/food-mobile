<template>
  <v-text-field
    :loading="loading"
    class="mx-4"
    :placeholder="plhd"
    hide-details
    clearable
    background-color="grey lighten-4"
    color="orange darken-3"
    dense
    outlined
    flat
    solo
    prepend-inner-icon="mdi-magnify"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  props: {
    plhd: {
      type: String,
      default: "",
    },
  },
}
</script>

<style></style>
