import React, { useState } from "react";
import axios from "axios";

function AddCard({ fetchCards }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      const res = await axios.post("https://dreamfenceapi.vercel.app/homecards/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Card Added Successfully!");
      setFormData({ title: "", description: "", image: null });
      setPreview("");

      if (fetchCards) fetchCards(); // refresh list on parent

    } catch (error) {
      console.log(error);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2>Add New Card</h2>

      {message && <p className="alert alert-info">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" name="description" rows="3" value={formData.description} onChange={handleChange} required></textarea>
        </div>

        <div className="mb-3">
          <label>Upload Image</label>
          <input type="file" className="form-control" accept="image/*" onChange={handleImage} required />
        </div>

        {preview && (
          <div className="mb-3 text-center">
            <img src={preview} alt="Preview" style={{ width: "200px", borderRadius: "10px" }} />
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100">Add Card</button>
      </form>
    </div>
  );
}

export default AddCard;
