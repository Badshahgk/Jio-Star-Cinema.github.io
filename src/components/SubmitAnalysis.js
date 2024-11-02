// src/components/SubmitAnalysis.js
import React, { useState } from 'react';

function SubmitAnalysis() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Analysis:", { title, content });
    alert("Your analysis has been submitted to Jio Star Cinema!");
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Submit Your Film Analysis to Jio Star Cinema</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Film Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Your Analysis" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitAnalysis;
