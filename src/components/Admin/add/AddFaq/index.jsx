import React, { useState } from "react";
import axios from "axios";

function AddFaq({ fetchFaqs }) {
  const [formData, setFormData] = useState({ question: "", answer: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://dreamfenceapi.vercel.app/faqs/add", formData);
      setMessage("FAQ added successfully!");
      setFormData({ question: "", answer: "" });
      if (fetchFaqs) fetchFaqs();
    } catch (err) {
      console.log(err);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2>Add FAQ</h2>
      {message && <p className="alert alert-info">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Question</label>
          <input type="text" className="form-control" name="question" value={formData.question} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Answer</label>
          <textarea className="form-control" name="answer" rows="3" value={formData.answer} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Add FAQ</button>
      </form>
    </div>
  );
}

export default AddFaq;
