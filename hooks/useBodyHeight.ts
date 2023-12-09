"useClient";
import { useEffect } from "react";
import useIsMounted from "./useIsMounted";

const useBodyHeight = () => {
  const isMounted = useIsMounted();
  useEffect(() => {
    if (!isMounted) return;
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [isMounted]);
  return null;
};

export default useBodyHeight;
