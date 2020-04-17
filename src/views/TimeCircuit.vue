<template>
  <div>
    <h1>Time Circuit</h1>
    <div class="digit-container">
      <Digit :value="0"/>
      <Digit :value="1"/>
      <Digit :value="2"/>
      <Digit :value="3"/>
      <Digit :value="4"/>
      <Digit :value="5"/>
      <Digit :value="6"/>
      <Digit :value="7"/>
      <Digit :value="8"/>
      <Digit :value="9"/>
    </div>
    <button type="button" @click="travels">travel</button>
  </div>
</template>

<script>
import Digit from "../components/Digit";

export default {
  name: 'TimeCircuit',
  components: {Digit},
  methods: {
    travels() {
        this.$router.push({name: 'time-travel'})
    }
  }
}
</script>

<style scoped="true">
  .digit-container {
    display: flex;
    justify-content: space-between;
  }
</style>