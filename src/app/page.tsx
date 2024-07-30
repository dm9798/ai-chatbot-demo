import { Chatbot } from "@/components/component/chatbot";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-full bg-gray-50">
      <h2 className="text-3xl font-bold pb-5">AI Chatbot</h2>
      <Chatbot />
    </main>
  );
}
