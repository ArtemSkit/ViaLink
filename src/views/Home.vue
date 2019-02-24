<template>
  <div>
    <v-alert
      :value="errorRetrievingGPS"
      outline
      dismissible
      type="error"
      style="max-width : 40.75em; position: fixed; right: 0; left: 0; margin-right: auto; z-index: 1000; margin-left: auto; margin: auto;  background:  rgba(48,48,48,.8);"
    >
      <h2>Enable GPS and allow app to access GPS data!</h2>
    </v-alert>
    <h1 v-if="!checkGPSService">Geolocation is not supported by this browser.</h1>
    <GPSButton/>
    <BusList
      v-if="checkGPSService && !errorRetrievingGPS && promptResolved && !listIsPressed"
      v-show="buttonPressed"
    />
    <ArrivalList v-if="listIsPressed"/>
  </div>
</template>



<script>
import ArrivalList from "../components/ArrivalList";
import GPSButton from "../components/GPSButton";
import BusList from "../components/BusList";
import { mapGetters } from "vuex";
import { store } from "../store/store.js";

export default {
  data: () => ({
    test: "test"
  }),
  components: {
    GPSButton,
    BusList,
    ArrivalList
  },
  methods: {},
  computed: {
    ...mapGetters([
      "buttonPressed",
      "checkGPSService",
      "errorRetrievingGPS",
      "promptResolved",
      "listIsPressed"
    ])
  }
};
</script>
<style>
</style>