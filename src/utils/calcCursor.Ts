import { ref } from "vue";

const previousX = ref(0);
const leftOrRight = ref("");

export const useCursor = () => {
  const calcXAxis = (cursor) => {
    const currentX = cursor;
    if (currentX > previousX.value) {
      leftOrRight.value = "d";
    } else if (currentX < previousX.value) {
      leftOrRight.value = "g";
    } else if (currentX === previousX.value) {
      leftOrRight.value = " ";
    }

    previousX.value = currentX;
  }

  return {
    leftOrRight,
    calcXAxis
  };
};
