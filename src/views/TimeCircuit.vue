<template>
  <div>
    <h1>Time Circuit</h1>
    <div class="digit-container">
      <DestinationTime @destinationTimeSet="handleDestinationTimeSet" />
      <PresentTime />
      <LastDepartedTime />
    </div>
    <button type="button" @click="travels">travel</button>
  </div>
</template>

<script>
import DestinationTime from "../components/DestinationTime";
import PresentTime from "../components/PresentTime";
import LastDepartedTime from "../components/LastDepartedTime";
// TODO: handle vuex
export default {
  name: "TimeCircuit",
  components: { LastDepartedTime, PresentTime, DestinationTime },
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
