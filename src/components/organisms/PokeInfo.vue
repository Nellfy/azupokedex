<template>
  <div class="pokeinfo">
    <v-container justify="center" fluid>
      <v-form ref="form">
        <v-row align="center" justify="center">
          <v-col cols="8">
            <v-text-field label="pokemon's name" v-model="pokename" :rules="rules" required></v-text-field>
          </v-col>
          <v-col cols="2" align="center">
            <v-btn fab color="success" @click="search">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
    <v-container v-if="pokemon">
      <v-row justify="center">
        <v-col cols="10" class="text-center">
          <span>図鑑No.{{ pokemon.galarNum }}</span>
          <span>(全国図鑑No.{{ pokemon.worldNum }})</span>
          <span>{{ pokemon.name }}</span>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <span>種族値</span>
          <v-simple-table>
            <template>
              <thead>
                <th class="text-center">H</th>
                <th class="text-center">A</th>
                <th class="text-center">B</th>
                <th class="text-center">C</th>
                <th class="text-center">D</th>
                <th class="text-center">S</th>
              </thead>
              <tbody>
                <td class="text-center">{{ pokemon.baseStats.H }}</td>
                <td class="text-center">{{ pokemon.baseStats.A }}</td>
                <td class="text-center">{{ pokemon.baseStats.B }}</td>
                <td class="text-center">{{ pokemon.baseStats.C }}</td>
                <td class="text-center">{{ pokemon.baseStats.D }}</td>
                <td class="text-center">{{ pokemon.baseStats.S }}</td>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <span>タイプ</span>
          <v-simple-table>
            <template>
              <tbody>
                <td class="text-left" v-for="item in pokemon.type" :key="item">{{ item }}</td>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <span>タイプ相性</span>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-simple-table class="mx-2" v-for="damage in damagelist" :key="damage">
          <thead>
            <th class="text-center">{{ damage }}</th>
          </thead>
          <tbody>
            <tr v-for="comp in pokemon.compatibility" :key="comp.id">
              <td class="text-center" v-if="comp.damage === damage">{{ comp.type }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <span>特性</span>
          <v-simple-table>
            <template>
              <tbody>
                <tr v-for="abbility in pokemon.abbility" :key="abbility.id">
                  <td class="text-left">{{ abbility.abbilityName }}</td>
                  <td class="text-left">{{ abbility.detail }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="js">
const typeCompatibility = require('@/assets/scripts/typeCompatibility')
const pokeData = require('@/assets/scripts/galarPokemonsData')

export default {
  name: 'PokeInfo',
  data: () => ({
    pokename: 'モスノウ',
    pokemon: null,
    rules: [v => !!v || '入力してください'],
    damagelist: [4, 2, 0.5, 0]
  }),
  methods: {
    search: function () {
      console.log('invoke search')
      if (this.$refs.form.validate()) {
        let pokemon = pokeData.data.find(pokemon => pokemon.name === this.pokename)
        if (pokemon) {
          pokemon.compatibility = typeCompatibility.main(pokemon.type)
          console.log(JSON.stringify(pokemon.compatibility))
        }
        this.pokemon = pokemon
      }
    }
  }
}
</script>

<style lang="scss">
</style>