import React, { useState } from 'react';
import './Pages.css';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setError('');
    setTranslatedText('');

    try {
      const response = await fetch("http://localhost:5000/api/translate", {
        method: "POST",
        body: JSON.stringify({
          q: inputText,
          source: "tr",
          target: "eo",
          format: "text",
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error('Translation service failed.');
      }

      const data = await response.json();
      setTranslatedText(data.translatedText);

    } catch (err) {
      setError("Failed to translate. Please try again later.");
      console.error("Translation error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Turkish <span>→</span> Esperanto Translator</h1>
        <p>Practice your skills by translating Turkish sentences into Esperanto in real-time.</p>
      </div>

      <div className="translator-container">
        <div className="translator-io">
          <textarea
            placeholder="Enter Turkish text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={isLoading}
          />
          <textarea
            placeholder="Translation will appear here..."
            value={translatedText || error}
            readOnly
          />
        </div>
        <button onClick={handleTranslate} disabled={isLoading} className="translate-button">
          {isLoading ? 'Translating...' : 'Translate'}
        </button>
      </div>
    </div>
  );
};

export default Translator;