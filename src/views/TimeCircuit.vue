<template>
  <div>
    <h1>Time Circuit</h1>
    <div class="digit-container">
      <DestinationTime />
    </div>
    <button type="button" @click="travels">travel</button>
  </div>
</template>

<script>
import DestinationTime from "../components/DestinationTime";
// TODO: handle destinationTime
// TODO: add PresentTime: Date actuelle and sync with actual date (setTimeout)
// TODO: add DestinationTime
// TODO: handle vuex
export default {
  name: "TimeCircuit",
  components: { DestinationTime },
  methods: {
    travels() {
      this.$router.push({ name: "time-travel" });
    }
  }
};
</script>

<style scoped="true">
.digit-container {
  display: flex;
  justify-content: space-between;
}
</style>
