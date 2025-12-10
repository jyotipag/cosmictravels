import { GoogleGenAI, Chat } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables.");
    // In a real app, handle this gracefully. For this demo, we assume it's there.
    // The instructions say assume process.env.API_KEY is pre-configured and valid.
  }
  return new GoogleGenAI({ apiKey: apiKey || '' });
};

export const initChatSession = async () => {
  const ai = getClient();
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: AI_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  return chatSession;
};

export const sendMessageStream = async function* (message: string) {
  if (!chatSession) {
    await initChatSession();
  }
  
  if (!chatSession) {
    throw new Error("Failed to initialize chat session.");
  }

  const result = await chatSession.sendMessageStream({ message });
  
  for await (const chunk of result) {
    yield chunk.text;
  }
};