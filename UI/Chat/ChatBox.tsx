"use client";
import Message from "./Message";
import Editor, { OnEditorChange } from "./Editor/Editor";
import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as idGen } from "uuid";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot, $isParagraphNode, LexicalNode } from "lexical";
import { Method, Question, Role } from "@/lib/constants";

// TODO:
// Handle loading
// Handle read stream
// Handle links
// Add send button

type Message = {
  id: string;
  message: string[];
  isUser: boolean;
  isNew?: boolean;
};

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      isUser: false,
      message: [
        "Hello, please select or type a question to learn about Aaron and his work.",
      ],
    },
  ]);
  const [message, setMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [editor] = useLexicalComposerContext();

  const onEmit = useCallback(
    async (messageVar?: string[]) => {
      const msg = messageVar || message;
      setLoading(true);
      setMessages((prev) => [
        ...prev,
        { id: idGen(), isUser: true, message: msg },
      ]);
      setMessage([]);
      editor.update(() => $getRoot().clear());
      try {
        const res = await fetch("/api/chat", {
          method: Method.Post,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: msg,
          }),
        });
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          {
            id: idGen(),
            isUser: false,
            message: data.message.split(`\n`),
            isNew: true,
          },
        ]);
      } catch (err: any) {
        // TODO: handle error
        console.error(err.response?.data.message);
      } finally {
        setLoading(false);
      }
    },
    [editor, message]
  );

  function updateScroll() {
    var element = scrollRef.current;
    if (!element) return;
    element.scrollTop = element.scrollHeight;
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const onEditorChange: OnEditorChange = (editorState) => {
    let paragraphTextArr: string[] = [];
    editorState.read(() => {
      const root = $getRoot();
      paragraphTextArr = root
        .getChildren()
        .reduce((arr: string[], child: LexicalNode) => {
          if ($isParagraphNode(child))
            arr.push(...child.getTextContent().split("\n"));
          return arr;
        }, []);
    });
    setMessage(paragraphTextArr);
  };

  const onSelectQuestion = (question: Question) => {
    const message: string[] = [];
    if (question === Question.About)
      message.push("Who is this Aaron guy and why should I hire him??");
    if (question === Question.Porfiolio)
      message.push(
        "Did he make this site? What else has he made? Give me some links!"
      );
    if (question === Question.Availability)
      message.push("When is he available to hire?");
    if (question === Question.Reviews) message.push("Show me some reviews!");
    if (question === Question.Contact) message.push("How can I contact him?");
    onEmit(message);
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
                role={message.isUser ? Role.User : Role.AI}
                message={message.message}
                isNew={message.isNew}
                isInitial={message.id === "init"}
                onSelectQuestion={onSelectQuestion}
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
