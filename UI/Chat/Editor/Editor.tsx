import { EditorState, LexicalEditor } from "lexical";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import useEditor from "./useEditor";
import EnterPlugin from "./plugins/EnterPlugin";

export type OnEditorChange = (
  editorState: EditorState,
  editor: LexicalEditor,
  tags: Set<string>
) => void;

const Editor = ({
  onChange,
  onEmit,
}: {
  onChange: OnEditorChange;
  onEmit: () => void;
}) => {
  const { isFocused, contentEditableProps } = useEditor();

  return (
    <div className="pt-4 px-5 pb-5 relative">
      <div
        className={[
          "relative border rounded p-2 text-lg sm:text-xl",
          isFocused ? "border-gray-400" : "border-gray-700",
        ].join(" ")}
      >
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="px-3 py-1 focus:outline-none"
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
      </div>
    </div>
  );
};

export default Editor;
