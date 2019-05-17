<template>
  <v-flex xs12 sm6>
    <v-card>
      <v-card-title>
        <v-layout align-space-around justify-start column fill-height>
          <h3 class="headline mb-0">Attack</h3>
          <v-text-field
            label="Base Pool"
            type="number"
            v-model="basePool"
            full-width
            hide-details
          ></v-text-field>
        </v-layout>
      </v-card-title>
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
  name: 'attack-input',
  computed: {
    ...mapFields([
      'attack.basePool',
    ]),
  },
})
export default class AttackInput extends Vue {}
</script>

<style>
</style>
