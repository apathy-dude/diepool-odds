import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    attack: {
      basePool: 6,
    },
    defence: {
      baseTN: 6,
      bonusPool: 0,
      counterPool: 0,
      counterTN: 6,
    },
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    updateNumberField(state, field) {
      if (field.value === '') field.value = 0;

      field.value = parseInt(field.value, 10);
      updateField(state, field);
    },
  },
});
