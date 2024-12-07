import axios from 'axios';

export const generateStory = async (genre, wordCount, apiKey) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        contents: [
          {
            parts: [
              {
                text: `Write a ${genre} story with ${wordCount} words.`
              }
            ]
          }
        ]
      }
    );

    console.log("API Response:", response.data);  // Log entire API response
      
    // Periksa apakah respons berisi data yang diharapkan
    // if (response.data && response.data.contents && response.data.contents[0] && response.data.contents[0].parts) {
    //     return response.data.contents[0].parts[0].text;
    if (response.data.candidates[0].content.parts[0].text) {
        return response.data.candidates[0].content.parts[0].text;
        
    } else {
        console.error("API response is not in the expected format");
      throw new Error("API response is not in the expected format.");
    }
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to generate story from the API.");
  }
};
