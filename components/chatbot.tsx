"use client";

import { useState, FormEvent } from "react";
import { Bot, CornerDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { PromptInputBox } from "@/components/ui/ai-prompt-box";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hello! How can I help you today?",
      sender: "ai",
    },
    {
      id: 2,
      content: "I have a question about the component library.",
      sender: "user",
    },
    {
      id: 3,
      content: "Sure! I'd be happy to help. What would you like to know?",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: input,
        sender: "user",
      },
    ]);
    setInput("");
    setIsLoading(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: "This is an AI response to your message.",
          sender: "ai",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Sheet>
      <div className="fixed bottom-8 right-8 z-999 max-w-sm w-full flex flex-col items-end">
        <SheetTrigger asChild>
          <button
            className="w-16 h-16 rounded-full bg-yellow-400 shadow-2xl flex items-center justify-center hover:bg-yellow-300 transition-all border-4 border-yellow-200/60 mb-2"
            aria-label="Open chatbot"
            type="button"
          >
            <Bot className="h-8 w-8 text-black" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="p-0 border-none bg-transparent shadow-none w-full max-w-sm"
        >
          <Card className="shadow-2xl border-2 border-yellow-400/40 bg-black/80 backdrop-blur-lg">
            <CardHeader className="flex flex-col items-center text-center gap-1 pb-2 relative">
              <SheetClose asChild>
                <button
                  className="absolute right-2 top-2 text-yellow-400 hover:text-yellow-200 text-xl font-bold px-2"
                  aria-label="Close chatbot"
                  type="button"
                >
                  ×
                </button>
              </SheetClose>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400/20 mb-2">
                <Bot className="h-7 w-7 text-yellow-400" />
              </div>
              <CardTitle className="text-yellow-400 text-2xl">
                Chat with Novalis AI
              </CardTitle>
              <CardDescription className="text-white/70">
                Ask me anything about the components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 max-h-72 overflow-y-auto px-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm shadow-md ${
                      message.sender === "user"
                        ? "bg-yellow-400 text-black font-semibold"
                        : "bg-white/10 text-white border border-yellow-400/30"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl px-4 py-2 max-w-[80%] text-sm shadow-md bg-white/10 text-white border border-yellow-400/30 animate-pulse">
                    ...
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="pt-2 px-4">
              <form onSubmit={handleSubmit} className="flex w-full">
                <PromptInputBox />
              </form>
            </CardFooter>
          </Card>
        </SheetContent>
      </div>
    </Sheet>
  );
}
