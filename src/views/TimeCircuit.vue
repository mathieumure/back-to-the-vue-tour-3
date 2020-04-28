<template>
  <div class="time-circuit">
    <div class="time-circuit__wrapper">
      <DestinationTime @destinationTimeSet="travel" />
      <PresentTime />
      <LastDepartedTime />
    </div>
  </div>
</template>

<script>
import DestinationTime from "../components/DestinationTime";
import PresentTime from "../components/PresentTime";
import LastDepartedTime from "../components/LastDepartedTime";

export default {
  name: "TimeCircuit",
  components: { LastDepartedTime, PresentTime, DestinationTime },
  methods: {
    travel(time) {
      this.$router.push({ name: "time-travel" });
      this.$store.dispatch("timeTravel", time);
    }
  }
};
</script>

<style scoped="true">
.time-circuit {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.time-circuit__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
</style>
