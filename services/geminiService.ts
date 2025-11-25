import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateCreativeConcept(theme: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a short, avant-garde, and abstract artistic concept description (max 80 words) for a digital art installation based on the theme: "${theme}". 
      Focus on sensory details, light, motion, and emotion. Do not use markdown formatting.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster creative burst
      }
    });
    
    return response.text || "Concept generation failed. Try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The creative muse is currently unavailable. Please try again later.";
  }
}