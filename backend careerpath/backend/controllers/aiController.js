import { GoogleGenAI } from "@google/genai";

export const getRecommendations = async (req, res) => {
  const { profile } = req.body;
  
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Gemini API key not configured' });
  }

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Based on the following user profile, suggest 3 tailored career paths and 3 educational resources.
      Profile: ${JSON.stringify(profile)}
      Return the response in JSON format with keys: careerPaths (array of strings) and resources (array of strings).`,
      config: {
        responseMimeType: "application/json",
      }
    });

    res.json(JSON.parse(response.text));
  } catch (error) {
    console.error('AI Error:', error);
    res.status(500).json({ error: 'Failed to generate recommendations' });
  }
};
