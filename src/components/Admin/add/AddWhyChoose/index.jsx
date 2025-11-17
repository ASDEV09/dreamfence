import React, { useState } from "react";
import axios from "axios";

function AddWhyChoose({ fetchItems }) {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    image: null,
  });

  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("desc", formData.desc);
    data.append("image", formData.image);

    try {
      await axios.post("https://dreamfenceapi.vercel.app/whychoose/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Item added successfully!");
      setFormData({ title: "", desc: "", image: null });
      setPreview("");
      if (fetchItems) fetchItems();
    } catch (err) {
      console.log(err);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2>Add Item</h2>
      {message && <p className="alert alert-info">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" name="desc" rows="3" value={formData.desc} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Upload Image</label>
          <input type="file" className="form-control" accept="image/*" onChange={handleImage} required />
        </div>

        {preview && <div className="mb-3 text-center">
          <img src={preview} alt="Preview" style={{ width: "200px", borderRadius: "10px" }} />
        </div>}

        <button type="submit" className="btn btn-primary w-100">Add Item</button>
      </form>
    </div>
  );
}

export default AddWhyChoose;
