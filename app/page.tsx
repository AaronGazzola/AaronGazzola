"use client";
import ChatBox from "@/UI/Chat/ChatBox";

export default function Home() {
  return (
    <main className="flex flex-col grow w-full px-10 lg:px-24 items-center">
      <ChatBox />
    </main>
  );
}
