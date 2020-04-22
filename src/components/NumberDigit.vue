<template>
    <div class="number-digits">
        <Digit
            v-for="(digit, index) in digits"
            class="single-digit"
            :key="index"
            :value="digit"
        />
    </div>
</template>

<script>
  import Digit from './Digit';

  export default {
    name: "number-digit",
    components: {Digit},
    props: {
      number: {
        type: Number,
        required: true
      }
    },
    computed: {
      digits() {
        return this.number.toString().split('').map(Number)
      }
    }
  }
</script>

<style scoped>
.number-digits {
    padding: 10px 15px;
}
.single-digit {
    margin-right: 10px;
}
</style>
