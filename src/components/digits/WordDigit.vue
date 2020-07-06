<template>
  <div class="word-digit">
    <AlphaDigit
      v-for="(digit, index) in digits"
      :color="color"
      :key="index"
      :value="digit"
    />
  </div>
</template>

<script>
import AlphaDigit from "./AlphaDigit";
import { computed } from "vue";

export default {
  name: "word-digit",
  components: { AlphaDigit },
  setup(props) {
    const digits = computed(() => {
      return props.word.split("");
    });

    return {
      digits,
      color: props.color
    };
  },
  props: {
    word: {
      type: String,
      required: true
    },
    // eslint-disable-next-line vue/no-dupe-keys
    color: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.word-digit {
  padding: 10px 15px;
}
.word-digit {
  margin-right: 10px;
}
</style>
