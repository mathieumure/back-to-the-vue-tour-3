import { computed } from "vue";
import Color from "color";

export const useColors = color => {
  const inactiveColor = computed(() => {
    return Color(color).darken(0.8);
  });
  return inactiveColor;
};
