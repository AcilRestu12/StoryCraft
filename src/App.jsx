import React, { useState } from "react";
import axios from "axios";
// import './App.css';
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
			
			<div className="controls flex flex-col">
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
		
				<button type="button" onClick={handleGenerateStory} disabled={isLoading} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
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

			<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
				</a>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
				<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Read more
					<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
					</svg>
				</a>
			</div>

			
		</div>
	);
}

export default App;
