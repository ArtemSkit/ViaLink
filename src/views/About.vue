<template>
   <v-content>
      <section>
         <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">CodeMonkeys</h1>
            <!-- <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div> -->
            
          </v-layout>

      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Team</div>
                    </v-card-title>
                    <v-card-text>
                      We are students that attend Texas A&M University of San Antonio. Lorem Ipsum has been the industry's standard dummy text ever 
                      since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                      specimen book. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">help_outline</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">The Problem</div>
                    </v-card-title>
                    <v-card-text>
                      <!-- Bind/Low Vision riders are hindered by the current inaccessible use of stop_id
                      on bus stops, to get route data for/from a nearby stop. -->
                      All riders are inconvenienced
                      by habing to constantly input the stop_id into a text message to get the next several 
                      buses arriving at that specified stop. Street and Bus Stop announcments on busses are 
                      unreliable and have been failing at times.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">info_outline</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"> The Solution</div>
                    </v-card-title>
                    <v-card-text>
                      Modify existing implementation through the use of signage with QR codes 
                      in conjunction with tactile cues such as braille to streamline stop_id input process.
                      Develop a GPS enabled website in order to find the stop_id near you and get data on the
                      next several buses arriving at the stop.

                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>


    </v-content>
</template>

<script>

</script>

<style>
  .v-card__text {
    font-family: monospace;
  }
  .mb-2 {
    font-family: "Kaushan Script", Helvetica, Arial, sans-serif !important;
  }
  
</style>

