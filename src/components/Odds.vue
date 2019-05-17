<template>
  <v-container pa-0>
    <v-layout row wrap>
      <attack-input></attack-input>
      <defence-input></defence-input>
      <odd-table></odd-table>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import OddTable from './OddTable.vue';
import AttackInput from './AttackInput.vue';
import DefenceInput from './DefenceInput.vue';

@Component({
  name: 'odds',
  components: { AttackInput, DefenceInput, OddTable },
})
export default class Odds extends Vue {}
</script>

