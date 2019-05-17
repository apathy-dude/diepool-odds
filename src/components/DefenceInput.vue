<template>
  <v-flex xs12 sm6>
    <v-card>
      <v-card-text>
        <v-layout align-space-around justify-start column fill-height>
          <h3 class="headline mb-0">Defence</h3>
          <v-layout row wrap>
            <v-text-field
              label="Bonus Pool"
              type="number"
              v-model="bonusPool"
              full-width
              hide-details
            ></v-text-field>
            <v-text-field
              label="Base Target Number"
              type="number"
              v-model="baseTN"
              full-width
              hide-details
            ></v-text-field>
          </v-layout>
          <v-layout row wrap>
            <v-text-field
              label="Counter Pool"
              type="number"
              v-model="counterPool"
              full-width
              hide-details
            ></v-text-field>
            <v-text-field
              label="Counter Target Number"
              type="number"
              v-model="counterTN"
              full-width
              hide-details
            ></v-text-field>
          </v-layout>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { createHelpers } from 'vuex-map-fields';

const { mapFields } = createHelpers({
  getterType: 'getField',
  mutationType: 'updateNumberField',
});

@Component({
  name: 'defence-input',
  computed: {
    ...mapFields([
      'defence.baseTN',
      'defence.bonusPool',
      'defence.counterPool',
      'defence.counterTN',
    ]),
  },
})
export default class DefenceInput extends Vue {}
</script>

<style>
</style>
