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
      v-if="checkGPSService && !errorRetrievingGPS && promptResolved && !listIsPressed && !tooFar"
      v-show="buttonPressed"
    />
    <ArrivalList v-if="listIsPressed && !tooFar"/>
    <div id="map-wrapper" v-if="tooFar && checkGPSService && !errorRetrievingGPS && promptResolved">
      <h1>The closest stop</h1>
      <GmapMap
        class="map-toofar"
        :center="{lat:getLocation.position.lat, lng:getLocation.position.lng}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 50em; height: 50em"
      >
        <GmapMarker
          :position="google && new google.maps.LatLng(getLocation.position.lat,getLocation.position.lng)"
          :clickable="true"
          :draggable="true"
          @click="center=getLocation.position"
        />
      </GmapMap>
    </div>
    <v-btn
      v-if="tooFar"
      @click="toggleTooFar"
      style="position:fixed; bottom: 0.5em; right: 0.5em; color: gray; margin: 0;font-family: Roboto; overflow: hidden; z-index: 10000; user-select: none;"
    >At home</v-btn>
    <v-btn
      v-else
      @click="toggleTooFar"
      style="position:fixed; bottom: 0.5em; right: 0.5em; color: gray; margin: 0;font-family: Roboto; overflow: hidden; z-index: 10000; user-select: none;"
    >At a bus stop</v-btn>
  </div>
</template>

<script>
import ArrivalList from "../components/ArrivalList";
import GPSButton from "../components/GPSButton";
import BusList from "../components/BusList";
import { mapGetters } from "vuex";
import { store } from "../store/store.js";
<<<<<<< HEAD
import axios from "axios";
=======
import { gmapApi } from "vue2-google-maps";
import { mapActions } from "vuex";
>>>>>>> 3fb6a41c5a9837316ddb28f62f9f01ea3bd9407f

export default {
  data: () => ({
    test: "test"
  }),
  components: {
    GPSButton,
    BusList,
    ArrivalList
  },
  methods: {
    ...mapActions(["toggleTooFar"])
  },
  computed: {
    google: gmapApi,
    ...mapGetters([
      "buttonPressed",
      "checkGPSService",
      "errorRetrievingGPS",
      "promptResolved",
      "listIsPressed",
      "tooFar",
      "markers",
      "getLocation"
    ])
  }
};
</script>
<style>
<<<<<<< HEAD
</style>
=======
#map-wrapper {
  width: 100%;
  text-align: center;
}
#map-wrapper {
  width: 100%;
  text-align: center;
}

#map-wrapper .map-toofar {
  margin: auto;
}
</style>
>>>>>>> 3fb6a41c5a9837316ddb28f62f9f01ea3bd9407f
