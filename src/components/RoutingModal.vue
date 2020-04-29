<template>
  <div
    class="routing-modal"
    :class="{ 'fade-out': doneAnimating }"
    v-if="routeChanged"
  >
    <div class="image-container">
      <svg class="spinning-circle" viewBox="0 0 100 100">
        <circle r="49" cx="50" cy="50" />
      </svg>
      <img src="../assets/delorean.png" alt="delorean" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  data: () => ({
    routeChanged: false,
    doneAnimating: false
  }),
  watch: {
    $route(to, from) {
      if (to.path === "/") {
        return;
      }
      if (to.name !== from.name) {
        this.routeChanged = true;
        this.doneAnimating = false;
        setTimeout(() => {
          this.doneAnimating = true;
        }, 3000);
        setTimeout(() => {
          this.routeChanged = false;
        }, 3300);
      }
    }
  }
};
</script>

<style scoped>
@keyframes sway {
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(-0deg);
  }
}

@keyframes filling {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.routing-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000;
}

.image-container {
  position: relative;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container > img {
  height: 95%;
  width: auto;
  object-fit: contain;
  animation: sway 1s infinite ease-in-out;
}

.image-container > svg {
  position: absolute;
  stroke: white;
  width: auto;
  height: 100%;
  stroke-dasharray: 308;
  stroke-dashoffset: 308;
  animation: filling 3s ease-in-out forwards, spin 3s infinite linear;
}

.fade-out {
  opacity: 0;
  transition: opacity 0.3s;
}
</style>
