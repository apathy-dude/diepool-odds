<template>
  <v-flex xs12>
    <v-card>
      <v-layout v-if="true" row wrap>
        <v-flex xs1>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="text-xs-center">Hits</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-for="h in attackBasePool" :key="h">
              <v-list-tile-title class="text-xs-center" v-text="h"></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-flex>

        <odd-column v-for="tn in 5" :key="tn" :rolls="rollSum(tn + 1)" :targetNumber="tn + 1"></odd-column>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import OddColumn from './OddColumn.vue';
import { Roll, SubtractMultiply, SubtractSingleMultiplyPerIndex } from '../services/OddsService';
import { mapFields } from 'vuex-map-fields';

@Component({
  name: 'odd-table',
  components: {
    OddColumn,
  },
  computed: {
    ...mapFields({
      attackBasePool: 'attack.basePool',
      defenceBaseTN: 'defence.baseTN',
      defenceCounterPool: 'defence.counterPool',
      defenceCounterTN: 'defence.counterTN',
    }),
  },
})
export default class OddTable extends Vue {
  public attackBasePool!: number;
  public defenceBaseTN!: number;
  public defenceCounterPool!: number;
  public defenceCounterTN!: number;

  public rollSum(tn: number): number[] {
    const attack: number[] = Roll(this.attackBasePool, tn);
    const counter: number[] = Roll(this.defenceCounterPool, this.defenceCounterTN);
    const postCounter: number[] = SubtractMultiply(attack, counter);

    const roll: number[] = SubtractSingleMultiplyPerIndex(postCounter, this.defenceBaseTN);
    const rollSum: number[] = [1];
    for (let i = 1; i < roll.length; i++)
      rollSum[i] = rollSum[i - 1] - roll[i - 1];

    return rollSum;
  }
}
</script>

