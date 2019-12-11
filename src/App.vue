<template>
  <v-app>
    <navigation-bar></navigation-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavigationBar from '@/components/organisms/NavigationBar'

export default {
  name: 'App',
  components: {
    NavigationBar
  },
  data: () => ({
    //
  }),
};
</script>
