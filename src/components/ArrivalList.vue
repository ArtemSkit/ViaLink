<template>
  <div class="text-xs-center">
    <v-list class="arrivalList">
      <template v-for="(item, i) in items">
        <!-- If you click on battle, it navigates to the specific battle -DV -->
        <v-list-tile v-ripple style="cursor: pointer" :key="i" :style="styleArrivalList">
          <v-list-tile-content>
            <v-list-tile-title>
              <div class="opposite-sides-string-wrapper">
                <div>Bus #:{{ item.busNumber }}</div>
                <!-- <v-spacer></v-spacer> -->
                <div>{{ item.busName }}</div>
                <span class="time">{{ item.busTime}}PM/AM</span>
              </div>
            </v-list-tile-title>
            <v-list-tile-sub-title>
              <div class="opposite-sides-right">Estimated wait: {{ item.estimatedWait }}</div>
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider v-if="i + 1 < items.length" :key="`divider1-${i}`"></v-divider>
      </template>
    </v-list>
  </div>
</template> 

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    items: [
      {
        busNumber: 444,
        busName: "Hellooooo",
        busTime: "12:30",
        estimatedWait: "(Add variable) min(s)"
      },
      {
        busNumber: 560,
        busName: "Howdy",
        busTime: "14:30",
        estimatedWait: "(Add variable) min(s)"
      },
      {
        busNumber: 780,
        busName: "Woody",
        busTime: "15:45",
        estimatedWait: "(Add variable) min(s)"
      },
      {
        busNumber: 660,
        busName: "Jar Jar Binx",
        busTime: "09:45",
        estimatedWait: "(Add variable) min(s)"
      },
      {
        busNumber: 444,
        busName: "Hellooooo",
        busTime: "12:30",
        estimatedWait: "(Add variable) min(s)"
      },
      {
        busNumber: 560,
        busName: "Howdy",
        busTime: "14:30",
        estimatedWait: "(Add variable) min(s)"
      },
      {
        busNumber: 780,
        busName: "Woody",
        busTime: "15:45",
        estimatedWait: "(Add variable) min(s)"
      },
      {
        busNumber: 660,
        busName: "Jar Jar Binx",
        busTime: "09:45",
        estimatedWait: "(Add variable) min(s)"
      }
    ]
  }),
  computed: {
    ...mapGetters(["styleArrivalList"])
  }
};
</script>

<style>
.opposite-sides-string-wrapper {
  display: grid;
  grid-template-rows: auto;
}
.opposite-sides-string-wrapper div {
  width: 25%;
  display: inline-block;
}
.opposite-sides-string-wrapper .opposite-sides-right {
  width: 3em;
  text-align: center;
}
.arrivalList {
  max-width: 80em;
  margin: auto;
}
.time {
  margin-right: auto;
  align-content: left;
  width: 3em;
}
.v-list__tile--link {
  height: 60px;
}
</style>
