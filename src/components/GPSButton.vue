<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-btn color="success" @click="changeStyle" :style="styleButton">Show Next Busses</v-btn>
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
    changeStyle() {
      console.log("hi");
      this.styleButton["margin-top"] = "0.5em";
      this.$store.commit("changeListStyle");
      this.pressButton();
    },
    ...mapActions(["pressButton"])
  },
  computed: {
    ...mapGetters(["buttonPressed"])
  }
};
</script>
<style>
</style>
