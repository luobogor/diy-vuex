<template>
  <div>
    <HelloWorld/>
    <button @click="add">ADD</button>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld';

export default {
  name: 'VuexDemo',
  components: { HelloWorld },
  methods: {
    add() {
      this.$store.commit('increment');
      // strict model 下直接修改 state 会报错
      // this.$store.state.count++;
    }
  },
}
</script>
