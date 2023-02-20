<template>
  <div class="text-xs-center">
    <v-list class="buslist">
      <template v-for="(item, i) in items">
        <!-- If you click on battle, it navigates to the specific battle -DV -->
        <v-list-tile v-ripple :style="styleList" :key="i" @click="pressList(item.busNumber)">
          <v-list-tile-content>
            <v-list-tile-title>
              <div class="opposite-sides-string-wrapper">
                <div>{{ item.busNumber }}</div>
                <div>{{ item.busName }}</div>
                <div class="opposite-sides-right">{{ item.busTime }}</div>
              </div>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider v-if="i + 1 < items.length" :key="`divider1-${i}`"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
<<<<<<< HEAD
import { mapGetters } from 'vuex'
import { store } from '../store/store.js'
=======
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { store } from "../store/store.js";
>>>>>>> 3fb6a41c5a9837316ddb28f62f9f01ea3bd9407f

export default {
  data: () => ({
    items: [
<<<<<<< HEAD
      { busNumber: 443, busName: 'Loot and skip', busTime: '12:30' },
      { busNumber: 449, busName: 'Loot and skip', busTime: '12:30' },
      { busNumber: 444, busName: 'Loot and skip', busTime: '12:30' },
      { busNumber: 444, busName: 'Loot and skip', busTime: '12:30' },
      { busNumber: 44544, busName: 'Loot and skip', busTime: '12:30' },
      { busNumber: 443423, busName: 'Loot and skip', busTime: '12:30' }
    ]
  }),
  computed: {
    ...mapGetters(['buttonPressed', 'styleList'])
  }

  // methods: {
  //     ...mapActions("")
  // }
}
=======
      { busNumber: 444, busName: "Bus Name", busTime: "12:30" },
      { busNumber: 443, busName: "Bus Name", busTime: "12:40" },
      { busNumber: 449, busName: "Bus Name", busTime: "12:10" }
    ]
  }),
  computed: {
    ...mapGetters(["buttonPressed", "styleList"])
  },
  methods: {
    ...mapActions(["pressList"])
  }
};
>>>>>>> 3fb6a41c5a9837316ddb28f62f9f01ea3bd9407f
</script>

<style>
.opposite-sides-string-wrapper {
  display: grid;
  grid-template-columns: 5em auto 5em;
  grid-template-rows: auto;
}
.opposite-sides-string-wrapper div {
  width: 25%;
  display: inline-block;
}
.opposite-sides-string-wrapper .opposite-sides-right {
  width: 5em;
  text-align: right;
}
.buslist {
  max-width: 80em;
  margin: auto;
}
.listHidden {
  opacity: 0.5;
  margin-top: 3em;
}
</style>
