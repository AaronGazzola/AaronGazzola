import { EditorState, LexicalEditor } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

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

  return (
    <div className="pl-3 pb-3 ">
      <div className="relative border">
        <LexicalComposer initialConfig={initialConfig}>
          <RichTextPlugin
            contentEditable={<ContentEditable />}
            placeholder={
              <div className="-z-10 absolute top-0 left-0">
                Enter some text...
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
