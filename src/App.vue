<template>
  <div>
    <router-view />
    <RoutingModal />
  </div>
</template>

<script>
import RoutingModal from "./components/RoutingModal";

export default {
  name: "app",
  components: {
    RoutingModal
  }
};
</script>

<style>
@font-face {
  font-family: "BTTF";
  src: url("/BTTF.ttf");
}

@font-face {
  font-family: "Roboto";
  src: url("/Roboto-Light.ttf");
}

body {
  font-family: Roboto, Open Sans, sans-serif;
  background-color: black;
  color: white;
}
</style>
