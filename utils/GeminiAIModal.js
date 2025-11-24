// utils/GeminiAIModal.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "models/gemini-2.0-flash",
});

// Generic helper for any prompt
export async function generateAIResponse(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (err) {
    console.error("Gemini error:", err);
    throw err;
  }
}

// Still keep questions generator if needed
export async function generateInterviewQuestions(prompt) {
  return await generateAIResponse(prompt);
}
