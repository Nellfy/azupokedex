<template>
  <v-app>
    <v-content>
      <Pokedex />
    </v-content>
  </v-app>
</template>

<script>
import Pokedex from './components/pages/Pokedex';

export default {
  name: 'App',

  components: {
    Pokedex,
  },

  data: () => ({
    //
  }),
};
</script>
