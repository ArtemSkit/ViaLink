<template>
  <div>
    <GPSButton/>
    <BusList v-show="buttonPressed"/>
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
    ...mapGetters(["buttonPressed"])
  }
};
</script>
<style>
</style>