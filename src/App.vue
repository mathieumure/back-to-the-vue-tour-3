<template>
  <div>
    <router-view/>
    <RoutingModal />
  </div>
</template>

<script>
import RoutingModal from "./components/RoutingModal";

export default {
  name: 'app',
  components: {
    RoutingModal
  },
}
</script>

<style>
body {
  background-color: black;
  color: white;
}
</style>
