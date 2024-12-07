import React from "react";

function StoryDisplay({ story, error, loading }) {
	return (
		<div>
			{loading && <p>Generating story...</p>}
			{error && <p style={{ color: "red" }}>{error}</p>}
			<div>
				<h3>Generated Story</h3>
				<p>{story}</p>
			</div>
		</div>
	);
}

export default StoryDisplay;
