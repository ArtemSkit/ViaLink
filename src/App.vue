<template>
  <v-app dark>
    <v-toolbar app>
      <router-link class="toolbar_title_link" to="/">
        <v-toolbar-title style="min-width: 10em">
          <span id="toolbar_title" class="headline">ViaLink</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <router-link
        class="toolbar_title_link"
        to="/about"
        style="color: grey; text-decoration: none; height: 80%;"
      >
        <div style="margin-top: .5em; font-size: 1.5em;">About</div>
      </router-link>
    </v-toolbar>
    <div
      style="position:fixed; bottom: 0.5em; left: 0.5em; color: gray; margin: 0;font-family: Roboto; overflow: hidden; z-index: 10000; user-select: none;"
    >v0.1.1</div>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
<style>
.toolbar_title_link {
  text-decoration: none !important;
}
#toolbar_title {
  font-family: "Kaushan Script", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  color: lightgray !important;
  font-size: 175% !important;
}
</style>
