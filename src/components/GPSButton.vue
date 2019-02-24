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
      this.noError();
      console.log(
        "Latitude: " +
          position.coords.latitude +
          "    Longitude: " +
          position.coords.longitude
      );
    },
    changeStyle() {
      var interval = setInterval(() => {
        if (!this.promptResolved) return;
        if (this.checkGPSService && !this.errorRetrievingGPS) {
          this.$store.commit("changeListStyle");
          this.$store.commit("changeButtonStyle");
        }
        clearInterval(interval);
        console.log("Resolved");
      }, 30);
      this.getLocation();
      this.pressButton();
    },
    ...mapActions(["pressButton", "error", "noError"])
  },
  computed: {
    ...mapGetters([
      "errorRetrievingGPS",
      "buttonPressed",
      "checkGPSService",
      "styleButton",
      "promptResolved"
    ])
  }
};
</script>
<style>
</style>
