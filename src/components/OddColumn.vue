<template>
  <v-flex xs2>
    <v-list>
      <v-list-tile>
        <v-list-tile-title class="text-xs-center">{{ targetNumber }}+</v-list-tile-title>
      </v-list-tile>
      <v-list-tile :class="rangeColor(rolls[h])" v-for="h in rolls.length - 1" :key="h">
        <v-list-tile-title class="text-xs-center">{{ rolls[h] | percent }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({
  name: 'odd-column',
  filters: {
    percent: (value: number) => {
      if (typeof(value) === 'number' && !isNaN(value)) {
        value *= 100;
        return value.toFixed(1) + '%';
      }

      return '-';
    },
  },
})
export default class OddColumn extends Vue {
  @Prop({ required: true }) public rolls!: number;
  @Prop({ required: true }) public targetNumber!: number;

  public rangeColor(percent: number): { [key: string]: boolean } {
    if (percent > 0.65) {
      const level = Math.floor((percent - 0.9) / 0.05);
      if (level > 0)
        return { blue: true, [`darken-${level}`]: true };

      if (level === 0)
        return { blue: true };

      return { blue: true, [`lighten${level}`]: true };
    }

    if (percent < 0.35) {
      const level = Math.floor((percent - 0.05) / .05);
      if (level > 0)
        return { red: true, [`lighten-${level}`]: true };

      if (level === 0)
        return { red: true};

      return { red: true, [`darken${level}`]: true };
    }

    return {};
  }
}
</script>