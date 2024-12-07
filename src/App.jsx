import React, { useState } from "react";
import axios from "axios";
import './App.css';
import { generateStory } from './utils/apiUtils';

function App() {
	const [genre, setGenre] = useState("");
	const [wordCount, setWordCount] = useState(300);
	const [story, setStory] = useState("");
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleGenreChange = (e) => {
		setGenre(e.target.value);
	};

	const handleWordCountChange = (e) => {
		setWordCount(e.target.value);
	};

	const handleGenerateStory = async () => {
		setLoading(true);
		setError("");
		setStory("");
	
		try {
			const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
			const generatedStory = await generateStory(genre, wordCount, apiKey);
			setStory(generatedStory);
		} catch (err) {
			console.error("Error details:", err); // Menampilkan detail error di console
			setError("Failed to generate story. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	const handleCopyToClipboard = () => {
		if (story) {
			navigator.clipboard.writeText(story).then(() => {
				alert("Story copied to clipboard!");
			}).catch(err => {
				console.error("Failed to copy text: ", err);
				alert("Failed to copy story to clipboard.");
			});
		}
	};
	
	return (
		<div className="app">
			<h1>Short Story Generator</h1>
			
			<div className="controls">
				<select value={genre} onChange={(e) => setGenre(e.target.value)}>
					<option value="Fantasy">Fantasy</option>
					<option value="Sci-Fi">Sci-Fi</option>
					<option value="Mystery">Mystery</option>
					<option value="Adventure">Adventure</option>
					<option value="Romance">Romance</option>
				</select>
		
				<input
					type="range"
					min="100"
					max="500"
					value={wordCount}
					onChange={(e) => setWordCount(e.target.value)}
				/>
				<span>{wordCount} words</span>
		
				<button onClick={handleGenerateStory} disabled={isLoading}>
					{isLoading ? "Generating..." : "Generate Story"}
				</button>
			</div>
		
			{error && <p className="error">{error}</p>}
			
			{story && (
				<div className="story-output">
					<p>{story}</p>
					<button onClick={handleCopyToClipboard}>Copy Story</button>
				</div>
			)}
		</div>
	);
}

export default App;
