<template>
  <v-layout row wrap>
    <v-flex xs1>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="text-xs-center">Hits</v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-for="h in dice" :key="h">
          <v-list-tile-title class="text-xs-center" v-text="h"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-flex>

    <odd-column v-for="tn in 5" :key="tn" :rolls="rollSum(7 - tn)" :targetNumber="tn + 1"></odd-column>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import OddColumn from './OddColumn.vue';
import { Roll } from '../services/OddsService';

@Component({
  name: 'odd-table',
  components: {
    OddColumn,
  },
})
export default class OddTable extends Vue {
  @Prop({ required: true }) public dice!: number;

  public rollSum(tn: number): number[] {
    const roll: number[] = Roll(this.dice, tn);
    const rollSum: number[] = [1];
    for (let i = 1; i < roll.length; i++)
      rollSum[i] = rollSum[i - 1] - roll[i - 1];

    return rollSum;
  }
}
</script>

