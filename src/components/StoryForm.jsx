import React from "react";

function StoryForm({ genre, wordCount, onGenreChange, onWordCountChange, onGenerate }) {
	return (
		<div>
			<div>
				<label>
					Genre:
					<select value={genre} onChange={onGenreChange}>
						<option value="fantasy">Fantasy</option>
						<option value="sci-fi">Sci-Fi</option>
						<option value="romance">Romance</option>
						<option value="mystery">Mystery</option>
						<option value="horror">Horror</option>
					</select>
				</label>
			</div>

			<div>
				<label>
				Word Count: {wordCount}
				<input
					type="range"
					min="100"
					max="500"
					value={wordCount}
					onChange={onWordCountChange}
				/>
				</label>
			</div>

			<button onClick={onGenerate}>Generate Story</button>
		</div>
	);
}

export default StoryForm;
