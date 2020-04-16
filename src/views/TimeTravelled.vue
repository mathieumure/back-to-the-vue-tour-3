<template>
  <div>
    <h1>Welcome to the {{currentDate}}</h1>
    <ul>
      <li v-for="(fact, factId) in parsedFacts" :key="factId">
        <p v-for="(paragraph, paragraphId) in fact" :key="paragraphId">{{paragraph}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {getContent} from "../service";
import moment from 'moment';

export default {
  name: "TimeTravelled",
  data: () => ({facts: [], date: '1989-04-25'}),
  async mounted() {
    this.facts = await getContent(this.moment);
  },
  computed: {
    parsedFacts () {
      return this.facts.map(it => it.split("\n").filter(Boolean)).filter(it => it.length > 0)
    },
    moment () {
      return moment(this.date)
    },
    currentDate () {
      return this.moment.format('DD MMMM YYYY')
    }
  }
}
</script>

<style scoped>

</style>