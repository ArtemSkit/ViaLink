<template>
  <v-app dark>
    <v-toolbar app>
      <router-link
        class="toolbar_title_link"
        to="/about"
        style="color: grey; text-decoration: none; height: 80%;"
      >
        <div style="margin-top: 1em">About</div>
      </router-link>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>
