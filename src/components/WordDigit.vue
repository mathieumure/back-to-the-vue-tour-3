<template>
    <div class="word-digit">
        <AlphaDigit
            v-for="(digit, index) in digits"
            class="single-ampha"
            :color="color"
            :key="index"
            :value="digit"
        />
    </div>
</template>

<script>
  import AlphaDigit from './AlphaDigit';

  export default {
    name: "word-digit",
    components: {AlphaDigit},
    props: {
      word: {
        type: String,
        required: true
      },
        color: {
            type: String,
            required: true
        }
    },
    computed: {
      digits() {
        return this.word.split('')
      }
    }
  }
</script>

<style scoped>
.word-digit {
    padding: 10px 15px;
}
.word-digit {
    margin-right: 10px;
}
</style>
