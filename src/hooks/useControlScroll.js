import { useEffect } from "react";

export default function useControlScroll(isOpen) {
  useEffect(() => {
    // 스크롤 제어
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);
}
