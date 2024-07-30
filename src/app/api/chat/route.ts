// import { google } from "@ai-sdk/google";
// import { anthropic } from "@ai-sdk/anthropic";
import { createOpenAI } from "@ai-sdk/openai";
import { type CoreMessage, streamText } from "ai";

export const maxDuration = 30;

// export async function POST(request: Request) {
//   const { messages }: { messages: CoreMessage[] } = await request.json();

//   const result = await streamText({
//     model: google("models/gemini-1.5-flash-latest"),
//     system: "You are a helpful assistant.",
//     messages,
//   });

//   return result.toAIStreamResponse();
// }

// export async function POST(request: Request) {
//   const { messages }: { messages: CoreMessage[] } = await request.json();

//   const result = await streamText({
//     model: anthropic("claude-3-haiku-20240307"),
//     system: "You are a helpful assistant.",
//     messages,
//   });

//   return result.toAIStreamResponse();
// }

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  const { messages }: { messages: CoreMessage[] } = await request.json();

  const result = await streamText({
    model: groq("llama3-8b-8192"),
    system: "You are a helpful assistant.",
    messages,
  });

  return result.toAIStreamResponse();
}
