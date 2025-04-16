import throttle from "@/utils/throttle.js";
import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = throttle(() => {
      if (window.innerWidth <= 768) setIsMobile(true);
      else setIsMobile(false);
    }, 300);

    handleResize(); // 최초 실행
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
