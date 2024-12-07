import React from 'react';

const WordCountSlider = ({ wordCount, setWordCount }) => {
  return (
    <div>
      <label>Word Count: {wordCount}</label>
      <input
        type="range"
        min="100"
        max="500"
        step="50"
        value={wordCount}
        onChange={(e) => setWordCount(Number(e.target.value))}
      />
    </div>
  );
};

export default WordCountSlider;
