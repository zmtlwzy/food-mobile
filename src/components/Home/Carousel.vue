<template>
  <!--
    因为轮播图组件有警告BUG，所以用window组件
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
  </v-carousel> -->
  <v-card :color="themeColor" dark flat tile>
    <v-window v-model="sliderIndex">
      <v-window-item v-for="(slide, i) in slides" :key="i">
        <v-card color="transparent" height="250" flat tile>
          <div
            class="fill-height"
            align="center"
            justify="center"
            tag="div"
            :style="{
              backgroundImage: `url(${slide.src})`,
              backgroundSize: 'cover',
              backgroundPosition: `${slide.position}`,
              width: '100%',
            }"
          ></div>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn text @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group v-model="sliderIndex" class="text-center" mandatory>
        <v-item
          v-for="n in slides.length"
          :key="`btn-${n}`"
          v-slot:default="{ active, toggle }"
        >
          <v-btn :input-value="active" icon @click="toggle">
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn text @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from "vuex"

const getInterVal = function(_this, time = 5000) {
  return setInterval(() => {
    _this.next()
  }, time)
}
export default {
  data() {
    return {
      slides: [],
      sliderIndex: 0,
      interval: null,
    }
  },
  computed: {
    ...mapState(["themeColor"]),
  },
  beforeCreate() {
    this.$axios.get("home/carouselImg").then((resp) => {
      this.slides = resp.list
    })
  },
  mounted() {
    // 组件挂载后启动自动切换
    this.interval = getInterVal(this)
  },
  methods: {
    next() {
      // 处理自动切换效果
      if (this.interval !== null) {
        clearInterval(this.interval)
      }
      this.sliderIndex =
        this.sliderIndex + 1 === this.slides.length ? 0 : this.sliderIndex + 1
      this.interval = getInterVal(this)
    },
    prev() {
      this.sliderIndex =
        this.sliderIndex - 1 < 0 ? this.slides.length - 1 : this.sliderIndex - 1
    },
  },
}
</script>

<style></style>
