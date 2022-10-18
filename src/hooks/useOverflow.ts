import { ref, watch } from "vue";

export default function (isMobile: boolean) {
  const isHiddenOverflow = ref<boolean>(false);

  const changeOverflow = (overflow: boolean, isMobile: boolean) => {
    if (overflow) {
      document.body.style.overflow = "hidden";
      if (isMobile) {
        document.body.style.marginRight = "17px";
      } else {
        document.body.style.marginRight = "0";
      }
    } else {
      document.body.style.overflow = "auto";
    }
  };

  watch(isHiddenOverflow, (next, prev) => {
    changeOverflow(next, isMobile);
  });

  return {
    isHiddenOverflow,
  };
};
