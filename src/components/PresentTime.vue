<template>
  <div class="present-time">
    <div class="present-time__digits-groups">
      <div class="present-time__digits-group">
        <div class="digits-group__title">
          YEAR
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="year" :color="digitColor" />
        </div>
      </div>
      <div class="present-time__digits-group">
        <div class="digits-group__title">
          MONTH
        </div>
        <div class="digits-group__value">
          <WordDigit :word="month" :color="digitColor" />
        </div>
      </div>
      <div class="present-time__digits-group">
        <div class="digits-group__title">
          DAY
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="day" :color="digitColor" />
        </div>
      </div>
      <div class="present-time__digits-group">
        <div class="digits-group__title">
          HOUR
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="hour" :color="digitColor" />
        </div>
      </div>
      <div class="present-time__digits-group">
        <div class="digits-group__title">
          MIN
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="minutes" :color="digitColor" />
        </div>
      </div>
    </div>
    <button type="button" class="present-time__title">
      PRESENT TIME
    </button>
  </div>
</template>

<script>
import moment from "moment";
import NumberDigit from "./digits/NumberDigit";
import WordDigit from "./digits/WordDigit";

export default {
  name: "present-time",
  components: { WordDigit, NumberDigit },
  data: () => ({
    digitColor: "#6df518",
    presentTime: moment(),
    currentTimeout: null
  }),
  mounted() {
    this.syncMinutes();
    if (this.currentTime) {
      this.presentTime = this.currentTime;
    }
  },
  destroyed() {
    clearTimeout(this.currentTimeout);
  },
  watch: {
    currentTime() {
      this.presentTime = moment(this.currentTime);
    }
  },
  computed: {
    currentTime() {
      return this.$store.getters.CURRENT_TIME;
    },
    year() {
      return this.presentTime.year();
    },
    day() {
      return this.presentTime.date();
    },
    month() {
      return this.presentTime.format("MMM");
    },
    hour() {
      return this.presentTime.hour();
    },
    minutes() {
      return this.presentTime.minutes();
    }
  },
  methods: {
    syncMinutes() {
      this.currentTimeout = setTimeout(() => {
        // TODO Avoid this reset, Vue.set ? proxy ?
        this.presentTime = moment(this.presentTime.add(1, "minutes"));
        this.syncMinutes();
      }, 60000);
    }
  }
};
</script>

<style scoped>
.present-time {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
  padding: 5px 50px 0 50px;
  height: 230px;
}
.present-time__digits-groups {
  display: flex;
  align-items: center;
}

.present-time__digits-group {
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

.present-time__title {
  font-size: 15pt;
  text-transform: uppercase;
  background-color: black;
  padding: 5px 16px;
  letter-spacing: 3px;
  color: white;
  border: none;
}
.present-time__title:hover {
  cursor: pointer;
}
</style>
