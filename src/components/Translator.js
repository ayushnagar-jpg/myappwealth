import React, { useState } from "react";
import axios from "axios";
import "./Translator.css";

const Translator = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("hi"); // Default to Hindi; update as needed

  const translateText = async () => {
    setIsLoading(true);
    setError("");
    try {
      const apiUrl = "http://127.0.0.1:5000/translate"; // Replace with actual API URL
      const response = await axios.post(apiUrl, {
        text,
        targetLanguage,
      });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error("Error translating text:", error);
      setError(
        error.response ? error.response.data.error : "Failed to translate text"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="translator-container">
      {/* <h1>Translator</h1> */}
      <div className="in">
        <input
          className="ne"
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select
          className="language-select"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          {/* Add options for different languages here */}
          <option value="hi">Hindi</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          {/* Add more languages as needed */}
        </select>
        <button className="bm" onClick={translateText} disabled={isLoading}>
          {isLoading ? "Translating..." : "Translate"}
        </button>
        {error && <p className="error">{error}</p>}
        <p className="er">Translated Text: {translatedText}</p>
      </div>
    </div>
  );
};

export default Translator;
