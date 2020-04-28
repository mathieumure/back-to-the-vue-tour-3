<template>
  <div class="destination-time">
    <DestinationTimeModalForm
      :date.sync="destinationTime"
      v-if="isModalDisplayed"
      @submit="closeModal"
    />
    <div class="destination-time__digits-groups">
      <div class="destination-time__digits-group">
        <div class="digits-group__title">
          YEAR
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="year" color="#fa6a01" />
        </div>
      </div>
      <div class="destination-time__digits-group">
        <div class="digits-group__title">
          MONTH
        </div>
        <div class="digits-group__value">
          <WordDigit :word="month" color="#fa6a01" />
        </div>
      </div>
      <div class="destination-time__digits-group">
        <div class="digits-group__title">
          DAY
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="day" color="#fa6a01" />
        </div>
      </div>
      <div class="destination-time__digits-group">
        <div class="digits-group__title">
          HOUR
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="hour" color="#fa6a01" />
        </div>
      </div>
      <div class="destination-time__digits-group">
        <div class="digits-group__title">
          MIN
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="minutes" color="#fa6a01" />
        </div>
      </div>
    </div>
    <button type="button" class="destination-time__title" @click="openModal">
      DESTINATION TIME
    </button>
  </div>
</template>

<script>
import NumberDigit from "./NumberDigit";
import moment from "moment";
import WordDigit from "./WordDigit";
import DestinationTimeModalForm from "./DestinationTimeModalForm";

export default {
  name: "destination-time",
  components: { DestinationTimeModalForm, WordDigit, NumberDigit },
  data: () => ({
    destinationTime: moment(),
    isModalDisplayed: false
  }),
  computed: {
    year() {
      return this.destinationTime.year();
    },
    day() {
      return this.destinationTime.days();
    },
    month() {
      return this.destinationTime.format("MMM");
    },
    hour() {
      return this.destinationTime.hour();
    },
    minutes() {
      return this.destinationTime.minutes();
    }
  },
  methods: {
    openModal() {
      this.isModalDisplayed = true;
    },
    closeModal() {
      this.isModalDisplayed = false;
      this.$emit("destinationTimeSet", this.destinationTime);
    }
  }
};
</script>

<style scoped>
.destination-time {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
  padding: 5px 50px 0 50px;
  height: 230px;
  width: 100%;
}
.destination-time__digits-groups {
  display: flex;
  align-items: center;
}

.destination-time__digits-group {
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

.destination-time__title {
  font-size: 15pt;
  text-transform: uppercase;
  background-color: black;
  padding: 5px 16px;
  letter-spacing: 3px;
  color: white;
  border: none;
}
.destination-time__title:hover {
  cursor: pointer;
}
</style>
