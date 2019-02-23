<template>
  <v-app dark>
    <v-toolbar app>
      <router-link class="toolbar_title_link" to="/about">About</router-link>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import GPSButton from "./components/GPSButton";

export default {
  name: "App",
  components: {
    GPSButton
  },
  data() {
    return {
      //
    };
  }
};
</script>
