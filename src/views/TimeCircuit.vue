<template>
  <div>
    <h1>Time Circuit</h1>
    <button type="button" @click="travels">travel</button>
  </div>
</template>

<script>
export default {
  name: 'TimeCircuit',
  methods: {
    travels() {
        this.$router.push({name: 'time-travel'})
    }
  }
}
</script>

<style scoped="true"></style>