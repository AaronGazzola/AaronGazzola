import { EditorState, LexicalEditor } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import useEditor from "./useEditor";

const theme = {};

function onError(error: any) {
  console.error(error);
}

type OnEditorChange = (
  editorState: EditorState,
  editor: LexicalEditor,
  tags: Set<string>
) => void;

const Editor = () => {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  const onChange: OnEditorChange = (editorState) => {
    console.log(editorState.toJSON());
  };

  const { isFocused, onFocus, onBlur } = useEditor();

  return (
    <div className="pt-4 px-5 pb-5 relative">
      <div
        className={[
          "relative border rounded p-2 text-lg sm:text-xl",
          isFocused ? "border-gray-400" : "border-gray-700",
        ].join(" ")}
      >
        <LexicalComposer initialConfig={initialConfig}>
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="px-3 py-1 focus:outline-none"
                onFocus={onFocus}
                onBlur={onBlur}
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
        </LexicalComposer>
      </div>
    </div>
  );
};

export default Editor;
