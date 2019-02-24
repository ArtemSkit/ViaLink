<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-btn
          color="success"
          :disabled="!checkGPSService"
          @click="changeStyle"
          :style="styleButton"
        >Show Next Busses</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    options: {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  }),
  methods: {
    getLocation() {
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.error,
        this.options
      );
    },

    showPosition(position) {
      console.log(
        "Latitude: " +
          position.coords.latitude +
          "    Longitude: " +
          position.coords.longitude
      );
    },
    changeStyle() {
      setTimeout(() => {
        this.$store.commit("changeListStyle");
        this.$store.commit("changeButtonStyle");
      }, 30);
      this.getLocation();
      this.pressButton();
    },
    ...mapActions(["pressButton", "error"])
  },
  computed: {
    ...mapGetters(["buttonPressed", "checkGPSService", "styleButton"])
  }
};
</script>
<style>
</style>
