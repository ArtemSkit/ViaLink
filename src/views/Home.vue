<template>
  <div>
    <h1 v-if="!checkGPSService">Geolocation is not supported by this browser.</h1>
    <GPSButton/>
    <BusList v-if="checkGPSService" v-show="buttonPressed"/>
  </div>
</template>



<script>
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
    BusList
  },
  methods: {},
  computed: {
    ...mapGetters(["buttonPressed", "checkGPSService"])
  }
};
</script>
<style>
</style>