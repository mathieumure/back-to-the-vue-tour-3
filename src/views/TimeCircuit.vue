<template>
  <div>
    <h1>Time Circuit</h1>
    <div class="digit-container">
      <DestinationTime @destinationTimeSet="handleDestinationTimeSet" />
      <PresentTime />
    </div>
    <button type="button" @click="travels">travel</button>
  </div>
</template>

<script>
import DestinationTime from "../components/DestinationTime";
import PresentTime from "../components/PresentTime";
// TODO: handle destinationTime
// TODO: add PresentTime: Date actuelle and sync with actual date (setTimeout)
// TODO: add DestinationTime
// TODO: handle vuex
export default {
  name: "TimeCircuit",
  components: { PresentTime, DestinationTime },
  methods: {
    travels() {
      this.$router.push({ name: "time-travel" });
    },
    handleDestinationTimeSet(time) {
      console.log(time);
    }
  }
};
</script>

<style scoped="true">
.digit-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
