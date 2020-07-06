<template>
  <div class="destination-time">
    <DestinationTimeModalForm
      v-model:date="destinationTime"
      v-if="isModalDisplayed"
      @submit="closeModal"
    />
    <div class="destination-time__digits-groups">
      <div class="destination-time__digits-group">
        <div class="digits-group__title">
          YEAR
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="year" :color="digitColor" />
        </div>
      </div>
      <div class="destination-time__digits-group">
        <div class="digits-group__title">
          MONTH
        </div>
        <div class="digits-group__value">
          <WordDigit :word="month" :color="digitColor" />
        </div>
      </div>
      <div class="destination-time__digits-group">
        <div class="digits-group__title">
          DAY
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="day" :color="digitColor" />
        </div>
      </div>
      <div class="destination-time__digits-group">
        <div class="digits-group__title">
          HOUR
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="hour" :color="digitColor" />
        </div>
      </div>
      <div class="destination-time__digits-group">
        <div class="digits-group__title">
          MIN
        </div>
        <div class="digits-group__value">
          <NumberDigit :number="minutes" :color="digitColor" />
        </div>
      </div>
    </div>
    <button type="button" class="destination-time__title" @click="openModal">
      DESTINATION TIME
    </button>
  </div>
</template>

<script>
import NumberDigit from "./digits/NumberDigit";
import moment from "moment";
import WordDigit from "./digits/WordDigit";
import DestinationTimeModalForm from "./DestinationTimeModalForm";
import { reactive, computed, toRefs } from "vue";

export default {
  name: "destination-time",
  components: { DestinationTimeModalForm, WordDigit, NumberDigit },
  setup(_, context) {
    const data = reactive({
      digitColor: "#fa6a01",
      destinationTime: moment(),
      isModalDisplayed: false
    });

    const year = computed(() => {
      return data.destinationTime.year();
    });

    const day = computed(() => {
      return data.destinationTime.date();
    });
    const month = computed(() => {
      return data.destinationTime.format("MMM");
    });
    const hour = computed(() => {
      return data.destinationTime.hour();
    });
    const minutes = computed(() => {
      return data.destinationTime.minutes();
    });

    const openModal = () => {
      console.log("Im here", data.destinationTime);
      data.isModalDisplayed = true;
    };

    const closeModal = () => {
      data.isModalDisplayed = false;
      // eslint-disable-next-line vue/custom-event-name-casing
      context.emit("destinationTimeSet", data.destinationTime);
    };

    return {
      year,
      day,
      month,
      hour,
      minutes,
      openModal,
      closeModal,
      ...toRefs(data),
    };
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
