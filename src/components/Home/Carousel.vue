<template>
  <v-carousel
    cycle
    height="250"
    interval="5000000"
    :show-arrows="false"
    :touch="handleTouch"
    v-model="sliderIndex"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
      :style="{ backgroundImage: 'cover' }"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      slides: [],
      sliderIndex: 0,
      handleTouch: {
        left: this.left,
        right: this.right,
      },
    }
  },
  beforeCreate() {
    this.$axios.get("home/carouselImg").then((resp) => {
      this.slides = resp.list
    })
  },
  methods: {
    left() {
      this.sliderIndex++
    },
    right() {
      if (this.sliderIndex === 0) {
        this.sliderIndex = this.slides.length - 1
        return
      }
      this.sliderIndex--
    },
  },
}
</script>

<style></style>
