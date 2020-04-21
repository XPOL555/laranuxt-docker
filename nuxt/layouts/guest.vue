<template>
  <v-app id="inspire">


    <nuxt/>

  </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            //drawer: null,
            mini: null
        }),
        created() {
            this.$vuetify.theme.dark = false
        },
    }
</script>
