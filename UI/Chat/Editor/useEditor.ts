import { useState } from "react";

const useEditor = () => {
  const [isFocused, setIsFocused] = useState(false);
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);
  const onEnter = () => console.log("enter");
  return {
    isFocused,
    contentEditableProps: {
      onFocus,
      onBlur,
      onEnter,
    },
  };
};

export default useEditor;
