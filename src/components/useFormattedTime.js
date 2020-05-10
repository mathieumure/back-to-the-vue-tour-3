import {computed, reactive} from "vue";
import moment from 'moment';

export function useFormattedTime() {
  let state = reactive({
    timeToDisplay: moment()
  });
  const year = computed(() => state.timeToDisplay.year());
  const day = computed(() => state.timeToDisplay.date());
  const month = computed(() => state.timeToDisplay.format("MMM"));
  const hour = computed(() => state.timeToDisplay.hour());
  const minutes = computed(() => state.timeToDisplay.minutes());

  return {
    timeToDisplay: state.timeToDisplay,
    year,
    day,
    month,
    hour,
    minutes
  };
}
