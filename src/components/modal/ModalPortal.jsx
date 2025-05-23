import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * 모달용 Portal 컴포넌트
 */
const ModalPortal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? createPortal(children, document.getElementById("root")) : null;
};

export default ModalPortal;
