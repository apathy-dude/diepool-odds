<template>
  <div id="app">
    <Odds></Odds>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Odds from './components/Odds.vue';

@Component({
  name: 'app',
  components: { Odds },
})
export default class App extends Vue {}
</script>
