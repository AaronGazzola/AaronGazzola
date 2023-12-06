"use client";
import ChatBox from "@/UI/Chat/ChatBox";

export default function Home() {
  return (
    <main className="flex flex-col grow w-full px-5 sm:px-10 items-center">
      <ChatBox />
    </main>
  );
}
