import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Faq.css";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [newImage, setNewImage] = useState(null); // For handling image upload
  const [editFaqId, setEditFaqId] = useState(null);
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");
  const [editImage, setEditImage] = useState(null); // Edit image handling

  // Fetch FAQs
  const fetchFaqs = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/faqs");
      setFaqs(res.data);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    }
  };

  // Create new FAQ
  const createFaq = async () => {
    const formData = new FormData();
    formData.append("question", newQuestion);
    formData.append("answer", newAnswer);
    if (newImage) {
      formData.append("image", newImage);
    }

    try {
      const res = await axios.post("http://127.0.0.1:5000/faqs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFaqs([...faqs, res.data]);
      setNewQuestion("");
      setNewAnswer("");
      setNewImage(null); // Reset image
    } catch (error) {
      console.error("Error creating FAQ:", error);
    }
  };

  // Update an existing FAQ
  const updateFaq = async () => {
    const formData = new FormData();
    formData.append("question", editQuestion);
    formData.append("answer", editAnswer);
    if (editImage) {
      formData.append("image", editImage);
    }

    try {
      const res = await axios.put(
        `http://127.0.0.1:5000/faqs/${editFaqId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFaqs(faqs.map((faq) => (faq.id === editFaqId ? res.data : faq)));
      setEditFaqId(null);
      setEditQuestion("");
      setEditAnswer("");
      setEditImage(null); // Reset edit image
    } catch (error) {
      console.error("Error updating FAQ:", error);
    }
  };

  // Delete an FAQ
  const deleteFaq = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/faqs/${id}`);
      setFaqs(faqs.filter((faq) => faq.id !== id));
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <div className="faq-container">
      <h1>FAQs</h1>

      {/* List FAQs */}
      <ul>
        <div className="abc">
          {faqs.map((faq) => (
            <li key={faq.id}>
              {faq.image && (
                <img src={faq.image} alt={faq.question} className="iu" />
              )}
              <strong className="ti">{faq.question}</strong>: {faq.answer}
              <br />
              <button
                onClick={() => {
                  setEditFaqId(faq.id);
                  setEditQuestion(faq.question);
                  setEditAnswer(faq.answer);
                  setEditImage(null); // Reset image input
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteFaq(faq.id)}>Delete</button>
            </li>
          ))}
        </div>
      </ul>

      {/* Add New FAQ */}
      <div>
        <h3>Add New FAQ</h3>
        <br />
        <input
          type="text"
          placeholder="Enter question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <br></br>

        <input
          type="file"
          id="faq-image"
          onChange={(e) => setNewImage(e.target.files[0])}
        />
        <br />
        <button onClick={createFaq}>Add FAQ</button>
      </div>

      {/* Edit FAQ */}
      {editFaqId && (
        <div>
          <h3>Edit FAQ</h3>
          <input
            type="text"
            value={editQuestion}
            onChange={(e) => setEditQuestion(e.target.value)}
          />
          <input
            type="text"
            value={editAnswer}
            onChange={(e) => setEditAnswer(e.target.value)}
          />
          <label htmlFor="edit-faq-image">Upload new image:</label>
          <input
            type="file"
            id="edit-faq-image"
            onChange={(e) => setEditImage(e.target.files[0])}
          />
          <button onClick={updateFaq}>Update FAQ</button>
        </div>
      )}
    </div>
  );
};

export default Faq;
