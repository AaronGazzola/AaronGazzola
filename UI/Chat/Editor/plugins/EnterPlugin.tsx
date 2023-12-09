import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COMMAND_PRIORITY_NORMAL, KEY_ENTER_COMMAND } from "lexical";
import { useEffect } from "react";

const EnterPlugin = ({ onEmit }: { onEmit: () => void }) => {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerCommand(
      KEY_ENTER_COMMAND,
      (e) => {
        const isModKey = e?.ctrlKey || e?.shiftKey || e?.metaKey;
        if (isModKey) return false;
        e?.preventDefault();
        onEmit();
        return true;
      },
      COMMAND_PRIORITY_NORMAL
    );
  }, [editor, onEmit]);
  return null;
};

export default EnterPlugin;
