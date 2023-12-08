"use client";
import Message from "./Message";
import Editor, { OnEditorChange } from "./Editor/Editor";
import { useEffect, useRef, useState } from "react";
import { httpRequest } from "@/lib/interceptor";
import { v4 as idGen } from "uuid";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createParagraphNode, $getRoot, $isParagraphNode } from "lexical";

// TODO:
// Handle loading
// Handle paragraph + mod key on enter

type Message = {
  id: string;
  message: string;
  isUser: boolean;
  isNew?: boolean;
};

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [editor] = useLexicalComposerContext();

  const onEmit = () => {
    setLoading(true);
    setMessages((prev) => [...prev, { id: idGen(), isUser: true, message }]);
    const t = message;
    setMessage("");
    editor.update(() => {
      const root = $getRoot();
      root.clear();
      root.append($createParagraphNode());
    });
    httpRequest
      .post("/api/chat", {
        message: t,
      })
      .then(({ data }) => {
        setMessages((prev) => [
          ...prev,
          { id: idGen(), isUser: false, message: data.message, isNew: true },
        ]);
      })
      .catch((err) => {
        // TODO: handle error
        console.error(err.response?.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  function clear() {
    setMessages([]);
  }

  function updateScroll() {
    var element = scrollRef.current;
    if (!element) return;
    element.scrollTop = element.scrollHeight;
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const onEditorChange: OnEditorChange = (editorState) => {
    const paragraphContentArr: string[] = [];
    editorState.read(() => [
      editorState._nodeMap.forEach((node) => {
        if ($isParagraphNode(node))
          paragraphContentArr.push(node.getTextContent());
      }),
    ]);
    setMessage(paragraphContentArr.join(""));
  };

  useEffect(updateScroll, [messages]);
  return (
    <div className="absolute inset-0 flex flex-col items-center">
      <div className="grow rounded border border-b-gray-900 border-r-gray-800 border-t-gray-600 border-l-gray-700 opacity-0 w-full flex flex-col items-center pr-3 pt-4 max-w-[650px] h-full expand">
        <div className="w-full h-full flex flex-col items-left opacity-0 fade-in-content">
          <div
            ref={scrollRef}
            className="grow scrollbar scrollbar-track scrollbar-thumb overflow-y-scroll pr-7 sm:pr-10 pt-3"
          >
            {messages.map((message) => (
              <Message
                key={message.id}
                isUser={message.isUser}
                message={message.message}
                isNew={message.isNew}
              />
            ))}
          </div>
          <Editor onChange={onEditorChange} onEmit={onEmit} />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
