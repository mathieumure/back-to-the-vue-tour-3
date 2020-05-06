<template>
  <main class="main" @click="goToNextPage">
    <h1 class="title">Back</h1>
    <h2 class="subtitle">&vue tour</h2>
    <h3 class="version">{{ parsedVue }}</h3>
  </main>
</template>

<script>
import pakageData from "../../package.json";
import { ref, computed } from "vue";
import router from "../router";
export default {
  setup() {
    const vueVersion = ref(pakageData.dependencies.vue);

    const parsedVue = computed(() => {
      if (/^\^?2\./.exec(vueVersion.value)) {
        return "II";
      }
      if (/^\^?3\./.exec(vueVersion.value)) {
        return "III";
      }
      return "";
    });

    const goToNextPage = () => router.push({ name: "time-circuit" });

    return {
      goToNextPage,
      parsedVue
    };
  },
  name: "Home"
};
</script>

<style scoped="true">
@keyframes slideFromRight {
  from {
    transform: rotateX(3deg) rotateY(16deg) rotateZ(-7deg) translateX(120vw);
  }
  to {
    transform: rotateX(3deg) rotateY(16deg) rotateZ(-7deg) translateX(20px);
  }
}

@keyframes slideFromLeft {
  from {
    transform: rotateX(3deg) rotateY(16deg) rotateZ(-7deg) translateX(-120vw)
      translateY(-30px);
  }
  to {
    transform: rotateX(3deg) rotateY(16deg) rotateZ(-7deg) translateX(140px)
      translateY(-30px);
  }
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.main {
  width: 100vw;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 500px;
}

.main:hover {
  cursor: pointer;
}

.title,
.subtitle,
.version {
  margin: 0;
  font-family: "BTTF", sans-serif;
}

.title {
  font-size: 150px;
  padding-right: 40px;
  padding-left: 40px;
  font-weight: bold;
  background: linear-gradient(to bottom, #b50d13 30%, #f7dc11 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: slideFromRight ease-in-out 2s both;
}
.title:after {
  content: "<";
}

.subtitle {
  font-size: 115px;
  background: linear-gradient(to top, #b50d13 0%, #f7dc11 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: slideFromLeft ease-in-out 2s both 1s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.version {
  font-size: 150px;
  position: absolute;
  padding-right: 40px;
  padding-left: 40px;
  top: calc(50% + 100px);
  left: calc(50%);
  background: linear-gradient(to top, #b50d13 0%, #f7dc11 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: rotateX(3deg) rotateY(16deg) rotateZ(-7deg) translateX(200px)
    translateY(-30px);
  opacity: 0;

  animation: appear 1s ease-in-out 3s both;
}
.version:before {
  content: ">";
}
</style>
