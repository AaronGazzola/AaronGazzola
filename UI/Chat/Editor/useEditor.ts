import { useState } from "react";

const useEditor = () => {
  const [isFocused, setIsFocused] = useState(false);
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);
  return {
    isFocused,
    onFocus,
    onBlur,
  };
};

export default useEditor;
