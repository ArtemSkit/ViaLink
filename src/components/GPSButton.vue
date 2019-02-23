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
    styleButton: {
      transition: "all 0.75s ease 0s",
      "margin-top": "20%"
    }
  }),
  methods: {
    getLocation() {
      navigator.geolocation.getCurrentPosition(this.showPosition);
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
      this.styleButton["margin-top"] = "0.5em";
      setTimeout(() => {
        this.$store.commit("changeListStyle");
      }, 30);
      this.$store.commit("changeListStyle");
      this.getLocation();
      this.pressButton();
    },
    ...mapActions(["pressButton"])
  },
  computed: {
    ...mapGetters(["buttonPressed", "checkGPSService"])
  }
};
</script>
<style>
</style>
