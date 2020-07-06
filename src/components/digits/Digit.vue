<template>
  <div
    class="container"
    :style="{
      '--digit-active-color': color,
      '--digit-inactive-color': inactiveColor
    }"
  >
    <div class="line">
      <div class="tick horizontal" :class="{ active: isTopActive }"></div>
    </div>
    <div class="line">
      <div class="tick vertical" :class="{ active: isTopLeftActive }"></div>
      <div class="tick vertical" :class="{ active: isTopRightActive }"></div>
    </div>
    <div class="line">
      <div class="tick horizontal" :class="{ active: isMiddleActive }"></div>
    </div>
    <div class="line">
      <div class="tick vertical" :class="{ active: isBottomLeftActive }"></div>
      <div class="tick vertical" :class="{ active: isBottomRightActive }"></div>
    </div>
    <div class="line">
      <div class="tick horizontal" :class="{ active: isBottomActive }"></div>
    </div>
  </div>
</template>
<script>
import { useColors } from "./useColors";

export default {
  name: "Digit",
  setup(props) {
    const inactiveColor = useColors(props.color);
    return { inactiveColor };
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    isTopActive() {
      return [0, 2, 3, 5, 6, 7, 8, 9].includes(this.value);
    },
    isTopLeftActive() {
      return [0, 4, 5, 6, 8, 9].includes(this.value);
    },
    isTopRightActive() {
      return [0, 1, 2, 3, 4, 7, 8, 9].includes(this.value);
    },
    isMiddleActive() {
      return [2, 3, 4, 5, 6, 8, 9].includes(this.value);
    },
    isBottomLeftActive() {
      return [0, 2, 6, 8].includes(this.value);
    },
    isBottomRightActive() {
      return [0, 1, 3, 4, 5, 6, 7, 8, 9].includes(this.value);
    },
    isBottomActive() {
      return [0, 2, 3, 5, 6, 8, 9].includes(this.value);
    }
  }
};
</script>
<style scoped="true">
.container {
  display: inline-flex;
  flex-direction: column;
}
.line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
}

.tick {
  border-radius: 10%;
  background-color: var(--digit-inactive-color);
}
.tick.active {
  background-color: var(--digit-active-color);
}
.tick.horizontal {
  height: 5px;
  width: 40px;
}
.tick.vertical {
  width: 5px;
  height: 40px;
}
</style>
