import { useLayoutEffect } from "react";

const useWindowSize = () => {
  useLayoutEffect(() => {
    function updateSize() {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
};

export default useWindowSize;
