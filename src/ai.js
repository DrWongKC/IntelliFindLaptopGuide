// import Anthropic from "@anthropic-ai/sdk";
import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are a computer nerd who receives a list of specifications that are mandatory to have on a laptop. You are to suggest a laptop based on those specifications provided. You may pick a laptop that has better specifications than what was listed but it shouldn't cost too much to purchase the laptop. Format your response in markdown to make it easier to render to a web page.
`;

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// Make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.

/* const anthropic = new Anthropic({
  // Make sure you set an environment variable
  // for ANTHROPIC_API_KEY
  apiKey: process.env.ANTHROPIC_API_KEY,

  dangerouslyAllowBrowser: true,
});

export async function getLaptopRecommendationFromClaude(specificationsArr) {
  const specificationsString = specificationsArr.join(", ");

  const msg = await anthropic.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `I have ${specificationsString}. Please give me a laptop recommendation you'd recommend!`,
      },
    ],
  });
  return msg.content[0].text;
} */

// Make sure you set an environment variable
// for HF_ACCESS_TOKEN
const hf = new InferenceClient(import.meta.env.HF_ACCESS_TOKEN);

export async function getLaptopRecommendationFromMistral(specificationsArr) {
  const specificationsString = specificationsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${specificationsString}. Please give me a laptop recommendation you'd recommend!`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}
