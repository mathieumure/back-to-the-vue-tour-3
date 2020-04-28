<template>
  <div class="last-departed-time">
    <div class="last-departed-time__digits-groups">
      <div class="last-departed-time__digits-group">
        <div class="digits-group__title">
          YEAR
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="year" :color="digitColor" />
        </div>
      </div>
      <div class="last-departed-time__digits-group">
        <div class="digits-group__title">
          MONTH
        </div>
        <div class="digits-group__value">
          <WordDigit :word="month" :color="digitColor" />
        </div>
      </div>
      <div class="last-departed-time__digits-group">
        <div class="digits-group__title">
          DAY
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="day" :color="digitColor" />
        </div>
      </div>
      <div class="last-departed-time__digits-group">
        <div class="digits-group__title">
          HOUR
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="hour" :color="digitColor" />
        </div>
      </div>
      <div class="last-departed-time__digits-group">
        <div class="digits-group__title">
          MIN
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="minutes" :color="digitColor" />
        </div>
      </div>
    </div>
    <button type="button" class="last-departed-time__title">
      LAST TIME DEPARTED
    </button>
  </div>
</template>

<script>
import NumberDigit from "./digits/NumberDigit";
import WordDigit from "./digits/WordDigit";

export default {
  name: "last-departed-time",
  components: { WordDigit, NumberDigit },
  data: () => ({
    digitColor: "#f5df18"
  }),
  computed: {
    lastDepartedTime() {
      return this.$store.getters.LAST_TIME_DEPARTED;
    },
    year() {
      return this.lastDepartedTime.year();
    },
    day() {
      return this.lastDepartedTime.date();
    },
    month() {
      return this.lastDepartedTime.format("MMM");
    },
    hour() {
      return this.lastDepartedTime.hour();
    },
    minutes() {
      return this.lastDepartedTime.minutes();
    }
  }
};
</script>

<style scoped>
.last-departed-time {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
  padding: 5px 50px 0 50px;
  height: 230px;
}
.last-departed-time__digits-groups {
  display: flex;
  align-items: center;
}

.last-departed-time__digits-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.digits-group__title {
  font-size: 15pt;
  text-transform: uppercase;
  background-color: #b20000;
  padding: 5px 16px;
  letter-spacing: 3px;
  margin-bottom: 5px;
}

.digits-group__value {
  background-color: black;
  border: 7px outset #626262;
  border-radius: 4px;
}

.last-departed-time__title {
  font-size: 15pt;
  text-transform: uppercase;
  background-color: black;
  padding: 5px 16px;
  letter-spacing: 3px;
  color: white;
  border: none;
}
.last-departed-time__title:hover {
  cursor: pointer;
}
</style>
