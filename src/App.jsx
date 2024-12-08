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
			<section class="py-10 xl:py-16 xl:mt-4 bg-primary">
				<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
					<div className="mb-6 md:mb-10 text-center md:space-y-2">
						<a href="/" class="text-3xl md:text-4xl xl:text-5xl font-coiny font-semibold tracking-wide text-fourth">
							{/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
							StoryCraft    
						</a>
						<h2 class="text-lg font-suranna font-medium md:text-xl xl:text-2xl text-fourth">
							Crafting tales, one click at a time.
						</h2>
					</div>
					<div className="w-full md:w-[90%] mx-auto flex flex-col md:flex-row space-y-6 md:space-x-6 xl:space-x-10 md:space-y-0 justify-evenly">
						<div class="w-full mx-auto md:mx-0 rounded-lg shadow border md:mt-0 sm:max-w-sm md:max-w-md xl:p-0 bg-secondary border-gray-700">
							<div class="p-6 flex flex-col justify-between space-y-4 h-full sm:p-6">
								<h1 class="text-xl text-center font-bold font-libre leading-tight tracking-tight md:text-2xl text-fourth">
									Setting
								</h1>
								<form class="space-y-4 md:space-y-6" action="#">
									<div>
										<label for="genres" class="block mb-2 text-sm font-medium text-fourth">Genre</label>
										<select id="genres" value={genre} onChange={(e) => setGenre(e.target.value)} class="border text-sm rounded-lg block w-full p-2.5 bg-primary/80 border-third placeholder-primary/80 text-fourth focus:ring-third focus:border-third">
											<option value="Fantasy" className="">Fantasy</option>
											<option value="Sci-Fi" className="">Sci-Fi</option>
											<option value="Mystery" className="">Mystery</option>
											<option value="Adventure" className="">Adventure</option>
											<option value="Romance" className="">Romance</option>
										</select>
									</div>
									<div>									
										<label for="words" class="block mb-2 text-sm font-medium text-fourth">Word Count: {wordCount}</label>
										<input id="words" type="range"
											min="100"
											max="500"
											value={wordCount}
											onChange={(e) => setWordCount(e.target.value)}
											class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-primary  [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:!bg-third" />
									</div>
								</form>
									<button type="submit" onClick={handleGenerateStory} disabled={isLoading} class="w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center text-fourth bg-primary hover:bg-primary/95 focus:ring-primary/50">
										{isLoading ? "Generating..." : "Generate Story"}
									</button>
							</div>
						</div>
						<div class="w-full mx-auto md:mx-0 rounded-lg shadow border md:mt-0 sm:max-w-sm md:max-w-md xl:p-0 bg-secondary border-gray-700">
							<div class="p-6 space-y-3 sm:p-6 h-modal">
								<h1 class="text-xl text-center font-bold font-libre leading-tight tracking-tight md:text-2xl text-fourth">
									Your Story
								</h1>

								<div className="block p-2.5 w-full h-44 text-sm rounded-lg border bg-primary border-gray-600 text-fourth">
									{/* {!story && (
										<p class="block p-2.5 w-full max-h-40 overflow-y-scroll text-sm text-gray-900">
											Your story will here
										</p>
									)} */}
									{story && (
										<p class="p-2.5 block w-full max-h-36 overflow-y-scroll text-sm font-karma text-fourth">
											{story}
										</p>
									)}
								</div>
								{error && 
									<p className="mt-2 text-sm font-karma font-semibold text-red-500">{error}</p>
								}

									<button type="submit" onClick={handleCopyToClipboard} disabled={isLoading} class="w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center text-fourth bg-primary hover:bg-primary/95 focus:ring-primary/50">
										Copy Story
									</button>
								


								{/* <textarea id="output" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here...">
									{story}
								</textarea> */}
							</div>
						</div>
					</div>

				</div>
			</section>
			<footer className="w-full mb-6 md:mt-4 lg:mt-6 xl:mt-8 text-center">
				<span class="text-xs lg:text-sm font-karma font-medium text-fourth text-center">
					© 2024 <a href="https://arest.tech/" target="_blank" class="text-fourth font-bold hover:text-white hover:underline">ARrest</a>. All Rights Reserved.
				</span>
			</footer>
		</div>
	);
}

export default App;
