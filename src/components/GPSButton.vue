<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-btn color="success" @click="testAction(10)">Show Next Busses</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    ecosystem: "eco"
  }),
  methods: {
    ...mapActions(["testAction"])
  },
  computed: {
    ...mapGetters(["testGetter"])
  }
};
</script>
<style>
</style>
