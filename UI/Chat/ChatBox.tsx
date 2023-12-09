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

type Message = {
  id: string;
  message: string;
  isUser: boolean;
  isNew?: boolean;
};

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      isUser: false,
      message:
        "Hello, please select or type a question to learn about Aaron and his work.",
    },
  ]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [editor] = useLexicalComposerContext();

  const onEmit = useCallback(
    async (messageArg = "") => {
      const messageVar = messageArg || message;
      setLoading(true);
      setMessages((prev) => [
        ...prev,
        { id: idGen(), isUser: true, message: messageVar },
      ]);
      setMessage("");
      editor.update(() => $getRoot().clear());
      try {
        const res = await fetch("/api/chat", {
          method: Method.Post,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: messageVar,
          }),
        });
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          {
            id: idGen(),
            isUser: false,
            message: data.message,
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
    let messageText = "";
    editorState.read(() => {
      const root = $getRoot();
      messageText = root
        .getChildren()
        .reduce((arr: string[], child: LexicalNode) => {
          if ($isParagraphNode(child)) arr.push(child.getTextContent());
          return arr;
        }, [])
        .join("\n");
    });
    setMessage(messageText);
  };

  const onSelectQuestion = (question: Question) => {
    switch (question) {
      case Question.About:
        return onEmit("Who is this Aaron guy and why should I hire him??");
      case Question.Porfiolio:
        return onEmit(
          "Did he make this site? What else has he made? Give me some links!"
        );
      case Question.Availability:
        return onEmit("When is he available to hire?");
      case Question.Reviews:
        return onEmit("Show me some reviews!");
      case Question.Contact:
        return onEmit("How can I contact him?");
    }
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
          <Editor onChange={onEditorChange} onEmit={onEmit} message={message} />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
