<template>
  <div class="time-travelled">
    <h1>Welcome to the {{ currentDate }}</h1>
    <ul>
      <li v-for="(fact, factId) in parsedFacts" :key="factId">
        <p v-for="(paragraph, paragraphId) in fact" :key="paragraphId">
          {{ paragraph }}
        </p>
      </li>
    </ul>
    <button @click="goBackToTheDeLorean">Go back to the DeLorean</button>
  </div>
</template>

<script>
import { getContent } from "../service";

export default {
  name: "TimeTravelled",
  data: () => ({ facts: [] }),
  async mounted() {
    this.facts = await getContent(this.moment);
  },
  computed: {
    parsedFacts() {
      return this.facts
        .map(it => it.split("\n").filter(Boolean))
        .filter(it => it.length > 0);
    },
    moment() {
      return this.$store.getters.CURRENT_TIME;
    },
    currentDate() {
      return this.moment.format("DD MMMM YYYY");
    }
  },
  methods: {
    goBackToTheDeLorean() {
      this.$router.push({ name: "time-circuit" });
    }
  }
};
</script>

<style scoped>
.time-travelled {
  margin: 40px;
}
</style>
