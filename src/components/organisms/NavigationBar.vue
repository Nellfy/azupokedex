<template>
  <div class="navigation-bar">
    <v-app-bar color="gray accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title @click="home">Azuha's Galar Pokedex</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute left temporary dark>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="(list, index) in listData" :key="index" @click="path(index)">
            <v-list-item-title>{{ list.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NaviationBar',
  data: () => ({
    drawer: false,
    group: null,
    listData: [
      { title: 'ポケモン図鑑', path: '/pokedex' },
      { title: 'タイプ相性チェッカー', path: '/typeChecker' }
    ]
  }),
  watch: {
    group() {
      this.drawer = false
    }
  },
  methods: {
    home() {
      this.$router.push('/')
    },
    path(index) {
      this.$router.push(this.listData[index].path)
    }
  }
}
</script>

<style lang="scss">
</style>