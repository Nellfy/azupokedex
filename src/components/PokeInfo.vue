<template>
  <div class="pokedex">
    <v-container justify="center" fluid>
      <v-form ref="form">
        <v-row align="center" justify="center">
          <v-col cols="8">
            <v-text-field label="pokemon's name" v-model="name" required></v-text-field>
          </v-col>
          <v-col cols="2" align="center">
            <v-btn fab color="success" @click="search">
              <v-icon>search</v-icon>
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
                <!--<td class="text-left" v-for="type in pokemon.type" :key="type.id">{{ type }}</td>-->
              </tbody>
            </template>
          </v-simple-table>
          <v-simple-table>
            <template>
              <thead>
                <th>×2</th>
              </thead>
              <tbody></tbody>
            </template>
          </v-simple-table>
        </v-col>
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

<script lang="ts">
// import typeCompatibility from '@/assets/scripts/typeCompatibility.js'
// import pokeData from '@/assets/scripts/galarPokemonsData.js'

export default {
  name: 'PokeInfo',
  // data: {
  //   return f
  // },
  methods: {
    search: () => {
      // if (this.$refs.form.validate()) {
      //   let pokemon = pokemons.find(pokemon => pokemon.name === this.name)
      //   if (pokemon) {
      //     this.typeCompatibility = typeCompatibility.calc(pokemon.type)
      //     console.log(JSON.stringify(this.typeCompatibility))
      //   }
      //   this.pokemon = pokemon
      // }
    }
  }
}
</script>

<style lang="scss">
</style>