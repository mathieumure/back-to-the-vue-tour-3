<template>
  <div
    class="container"
    :style="{
      '--digit-active-color': color,
      '--digit-inactive-color': inactiveColor
    }"
  >
    <div class="line">
      <div class="tick horizontal" :class="{ active: isTopLeftActive }"></div>
      <div class="tick horizontal" :class="{ active: isTopRightActive }"></div>
    </div>
    <div class="line">
      <div
        class="tick vertical"
        :class="{ active: isMiddleTopLeftActive }"
      ></div>
      <div
        class="tick oblique-left"
        :class="{ active: isMiddleTopLeftObliqueActive }"
      ></div>
      <div
        class="tick vertical"
        :class="{ active: isMiddleTopCenterActive }"
      ></div>
      <div
        class="tick oblique-right"
        :class="{ active: isMiddleTopRightObliqueActive }"
      ></div>
      <div
        class="tick vertical"
        :class="{ active: isMiddleTopRightActive }"
      ></div>
    </div>
    <div class="line">
      <div
        class="tick horizontal"
        :class="{ active: isMiddleLeftActive }"
      ></div>
      <div
        class="tick horizontal"
        :class="{ active: isMiddleRightActive }"
      ></div>
    </div>
    <div class="line">
      <div
        class="tick vertical"
        :class="{ active: isMiddleBottomLeftActive }"
      ></div>
      <div
        class="tick oblique-right"
        :class="{ active: isMiddleBottomLeftObliqueActive }"
      ></div>
      <div
        class="tick vertical"
        :class="{ active: isMiddleBottomCenterActive }"
      ></div>
      <div
        class="tick oblique-left"
        :class="{ active: isMiddleBottomRightObliqueActive }"
      ></div>
      <div
        class="tick vertical"
        :class="{ active: isMiddleBottomRightActive }"
      ></div>
    </div>
    <div class="line">
      <div
        class="tick horizontal"
        :class="{ active: isBottomLeftActive }"
      ></div>
      <div
        class="tick horizontal"
        :class="{ active: isBottomRightActive }"
      ></div>
    </div>
  </div>
</template>
<script>
import Color from "color";
export default {
  name: "AlphaDigit",
  props: {
    value: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    inactiveColor() {
      return Color(this.color).darken(0.8);
    },
    isTopLeftActive() {
      return [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "M",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "Z"
      ].includes(this.value.toUpperCase());
    },
    isTopRightActive() {
      return [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "M",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "Z"
      ].includes(this.value.toUpperCase());
    },
    isMiddleTopLeftActive() {
      return [
        "A",
        "B",
        "C",
        "E",
        "F",
        "G",
        "H",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "U",
        "W",
        "Y"
      ].includes(this.value.toUpperCase());
    },
    isMiddleTopLeftObliqueActive() {
      return ["D", "N", "V", "X"].includes(this.value.toUpperCase());
    },
    isMiddleTopCenterActive() {
      return ["M", "T"].includes(this.value.toUpperCase());
    },
    isMiddleTopRightObliqueActive() {
      return ["K", "X", "Z"].includes(this.value.toUpperCase());
    },
    isMiddleTopRightActive() {
      return [
        "A",
        "B",
        "D",
        "H",
        "I",
        "J",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "U",
        "V",
        "W",
        "Y"
      ].includes(this.value.toUpperCase());
    },
    isMiddleLeftActive() {
      return ["A", "B", "E", "F", "H", "K", "P", "R", "S", "Y"].includes(
        this.value.toUpperCase()
      );
    },
    isMiddleRightActive() {
      return ["A", "B", "E", "F", "G", "H", "K", "P", "R", "S", "Y"].includes(
        this.value.toUpperCase()
      );
    },
    isMiddleBottomLeftActive() {
      return [
        "A",
        "B",
        "C",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "U",
        "W"
      ].includes(this.value.toUpperCase());
    },
    isMiddleBottomLeftObliqueActive() {
      return ["D", "X", "Z"].includes(this.value.toUpperCase());
    },
    isMiddleBottomCenterActive() {
      return ["T", "W"].includes(this.value.toUpperCase());
    },
    isMiddleBottomRightObliqueActive() {
      return ["N", "Q", "R", "V", "X"].includes(this.value.toUpperCase());
    },
    isMiddleBottomRightActive() {
      return [
        "A",
        "B",
        "D",
        "G",
        "H",
        "I",
        "J",
        "K",
        "M",
        "N",
        "O",
        "Q",
        "S",
        "U",
        "V",
        "W",
        "Y"
      ].includes(this.value.toUpperCase());
    },
    isBottomLeftActive() {
      return [
        "B",
        "C",
        "D",
        "E",
        "G",
        "J",
        "L",
        "O",
        "Q",
        "S",
        "U",
        "W",
        "Y",
        "Z"
      ].includes(this.value.toUpperCase());
    },
    isBottomRightActive() {
      return [
        "B",
        "C",
        "D",
        "E",
        "G",
        "J",
        "L",
        "O",
        "Q",
        "S",
        "U",
        "W",
        "Y",
        "Z"
      ].includes(this.value.toUpperCase());
    }
  }
};
</script>

<style scoped="true">
.container {
  display: inline-flex;
  flex-direction: column;
  margin-right: 5px;
}
.line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
}

.tick {
  border-radius: 10%;
  background-color: var(--digit-inactive-color);
  margin-right: 2px;
}
.tick.active {
  background-color: var(--digit-active-color);
}
.tick.horizontal {
  height: 5px;
  width: 25px;
}
.tick.vertical {
  width: 5px;
  height: 40px;
}
.tick.oblique-left {
  width: 5px;
  height: 40px;
  transform: rotate(-20deg);
  margin-right: -2px;
  margin-left: -2px;
}
.tick.oblique-right {
  width: 5px;
  height: 40px;
  transform: rotate(20deg);
  margin-right: -2px;
  margin-left: -2px;
}
</style>
