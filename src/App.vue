<template>
  <div id="app-container">

    <div>Pinia state: {{ counter }} </div>

    <div>Pinia getter: {{ doubleCounter }} </div>

    <div>Component data: {{ counterFromComponentData }} </div>

  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useStore } from './stores/counter';

export default {
  name: 'App',

  data() {
    return {
      counterFromComponentData: -2,
    };
  },

  computed: {
    ...mapState(useStore, ['counter', 'doubleCounter']),
  },
};
</script>

<style lang="scss" scoped>
#app-container {
  position: relative;
  background: black;
  color: white;

  display: grid;
  grid-gap: 20px;

  font-family: Arial, Helvetica, sans-serif;
}
</style>
