import { EditorState, LexicalEditor } from "lexical";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import useEditor from "./useEditor";
import EnterPlugin from "./plugins/EnterPlugin";
import SendIcon from "../SendIcon";

export type OnEditorChange = (
  editorState: EditorState,
  editor: LexicalEditor,
  tags: Set<string>
) => void;

const Editor = ({
  onChange,
  onEmit,
  message,
}: {
  onChange: OnEditorChange;
  onEmit: () => void;
  message: string[];
}) => {
  const { isFocused, contentEditableProps } = useEditor();
  const messageIsEmpty = !message.length || message[0] === "";
  return (
    <div className="pt-4 px-5 pb-5 relative">
      <div
        className={[
          "relative border rounded p-2 text-lg sm:text-xl flex items-center",
          isFocused ? "border-gray-400" : "border-gray-700",
        ].join(" ")}
      >
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="pl-3 py-1 focus:outline-none grow"
              {...contentEditableProps}
            />
          }
          placeholder={
            <div className="-z-10 absolute top-3 left-6 text-gray-700 italic">
              Message Aaron's AI ...
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={onChange} />
        <EnterPlugin onEmit={onEmit} />
        <button
          disabled={messageIsEmpty}
          type="button"
          className={[messageIsEmpty ? "opacity-50" : ""].join(" ")}
          onClick={() => onEmit()}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Editor;
