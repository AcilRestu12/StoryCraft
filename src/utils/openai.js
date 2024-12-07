import axios from 'axios';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const generateStory = async (genre, wordCount) => {
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const endpoint = "https://api.openai.com/v1/chat/completions";

  try {
    await sleep(1000); // Tambahkan delay 1 detik untuk menghindari batas rate limit
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a creative short story generator. Generate a short story in the ${genre} genre.`,
          },
          {
            role: "user",
            content: `Write a ${wordCount}-word story in the ${genre} genre.`,
          },
        ],
        max_tokens: wordCount * 4,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch story from OpenAI API.");
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error fetching story:", error);
    throw error;
  }
};
  
export default generateStory;
  