<template>
  <main class="main" @click="goToNextPage">
    <h1 class="title">Back</h1>
    <h2 class="subtitle">&vue tour</h2>
    <h3 class="version">{{ parseVue(vueVersion) }}</h3>
  </main>
</template>

<script>
import pakageData from "../../package.json";
import {reactive} from 'vue';
import router from '../router'

export default {
  name: "Home",
  setup() {
    const data = reactive({
      vueVersion: pakageData.dependencies.vue
    })

    const parseVue = () => {
      if (/^\^?2\./.exec(data.vueVersion)) {
        return "II";
      }
      if (/^\^?3\./.exec(data.vueVersion)) {
        return "III";
      }
      return "";
    }
    const goToNextPage = () => {
      router.push({ name: "time-circuit" });
    }

    return {goToNextPage, parseVue, vueVersion: data.vueVersion}
  }
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
