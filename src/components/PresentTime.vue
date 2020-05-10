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
      PRESENT TIME {{ timeToDisplay }}
    </button>
  </div>
</template>

<script>
import moment from "moment";
import NumberDigit from "./digits/NumberDigit";
import WordDigit from "./digits/WordDigit";
import {
  ref,
  watch,
  reactive,
  computed,
  onMounted,
  onUnmounted,
  toRefs
} from "vue";
import store from "../store";

export default {
  name: "present-time",
  components: { WordDigit, NumberDigit },
  setup() {
    let state = reactive({
      timeToDisplay: moment()
    });
    const digitColor = ref("#6df518");
    let timeout = reactive({});

    // Proxy of object, .value not needed

    const currentTime = computed(() => store.getters.CURRENT_TIME);

    const year = computed(() => state.timeToDisplay.year());
    const day = computed(() => state.timeToDisplay.date());
    const month = computed(() => state.timeToDisplay.format("MMM"));
    const hour = computed(() => state.timeToDisplay.hour());
    const minutes = computed(() => state.timeToDisplay.minutes());

    onMounted(() => {
      syncMinutes();
      if (currentTime) {
        state.timeToDisplay = moment(currentTime.value);
      }
    });
    onUnmounted(() => {
      clearTimeout(timeout);
    });

    watch(currentTime, () => {
      state.timeToDisplay = moment(currentTime.value);
    });

    const syncMinutes = () => {
      timeout = setTimeout(() => {
        // TODO Avoid this reset, Vue.set ? proxy ?
        state.timeToDisplay = moment(state.timeToDisplay.add(1, "minutes"));
        syncMinutes();
      }, 100);
    };

    return {
      timeToDisplay: toRefs(state).timeToDisplay,
      digitColor,
      year,
      day,
      month,
      hour,
      minutes
    };
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
