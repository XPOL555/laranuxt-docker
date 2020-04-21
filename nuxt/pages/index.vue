<template>
  <v-content>
    <v-container grid-list-xl
    >
      <v-layout
      >
        <v-flex>
          <v-card>
            <v-card-text>
              home
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<router>
    name: Dashboard
</router>
<script>
    export default {
        middleware: 'auth',
        components: {

        }
    }
</script>
