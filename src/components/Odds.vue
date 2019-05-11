<template>
  <div>
    <v-card>
      <v-card-text>
        <v-layout row wrap>
          <v-text-field
            label="Dice"
            type="number"
            v-model="dice"
          ></v-text-field>
        </v-layout>
      </v-card-text>
    </v-card>

    <v-layout row>
      <v-flex xs12>
        <odd-table :dice="dice"></odd-table>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import OddTable from './OddTable.vue';

@Component({
  name: 'odds',
  components: { OddTable },
})
export default class Odds extends Vue {
  private d: number = 6;

  get dice(): number {
     return this.d;
  }
  set dice(value: number) {
    if (typeof(value) === 'number') {
      this.d = value;
      return;
    }

    if (value === '') {
      this.d = 0;
      return;
    }

    this.d = parseInt(value, 10);
  }
}
</script>

