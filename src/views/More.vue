<template>
  <div class="more fill-height">
    <TopBar>
      <span class="title white--text">设置</span>
    </TopBar>
    <v-container>
      <v-switch v-model="showMaps" color="success">
        <template #label>
          <div
            :style="{ width: '100%', textAlign: 'right', paddingRight: '1rem' }"
          >
            是否显示地图
          </div>
        </template>
      </v-switch>
    </v-container>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"

import TopBar from "@/components/TopBar.vue"
export default {
  components: {
    TopBar,
  },
  computed: {
    ...mapGetters(["bottomNavData"]),
    showMaps: {
      get() {
        return this.$store.state.showMaps
      },
      set(val) {
        this.toggleBND(val)
      },
    },
  },
  methods: {
    ...mapMutations(["toggleBND"]),
  },
}
</script>
