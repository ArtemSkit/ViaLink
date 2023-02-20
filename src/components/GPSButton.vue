<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-btn
          color="success"
          :disabled="!checkGPSService"
          @click="changeStyle"
          :style="styleButton"
        >Show Next Buses</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import { request } from 'request'

export default {
  data: () => ({
    options: {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  }),
  methods: {
    getLocation () {
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.error,
        this.options
      )
    },

    showPosition (position) {
      this.noError()
      console.log(
        'Latitude: \t' +
          position.coords.latitude +
<<<<<<< HEAD
          '\nLongitude: \t' +
          position.coords.longitude +
          '\nIP Address: \t'
      )
=======
          "    Longitude: " +
          position.coords.longitude
      );
      var marker = {
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      };
      this.setLocation(marker);
>>>>>>> 3fb6a41c5a9837316ddb28f62f9f01ea3bd9407f
    },
    changeStyle () {
      var interval = setInterval(() => {
        if (!this.promptResolved) return
        if (this.checkGPSService && !this.errorRetrievingGPS) {
<<<<<<< HEAD
          this.$store.commit('changeListStyle')
          this.$store.commit('changeButtonStyle')
=======
          this.$store.commit("changeListStyle");
          this.$store.commit("changeButtonStyle");
          this.$store.commit("changeArrvalListStyle");
>>>>>>> 3fb6a41c5a9837316ddb28f62f9f01ea3bd9407f
        }
        clearInterval(interval)
        console.log('Resolved')
      }, 30)
      this.getLocation()
      this.pressButton()
    },
<<<<<<< HEAD
    ...mapActions(['pressButton', 'error', 'noError'])
=======
    ...mapActions(["pressButton", "error", "noError", "setLocation"])
>>>>>>> 3fb6a41c5a9837316ddb28f62f9f01ea3bd9407f
  },
  computed: {
    ...mapGetters([
      'errorRetrievingGPS',
      'buttonPressed',
      'checkGPSService',
      'styleButton',
      'promptResolved'
    ])
  }
}
</script>
<style>
</style>
