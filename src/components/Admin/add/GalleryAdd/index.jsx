import React, { useState } from "react";
import axios from "axios";

function GalleryAdd() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image) {
      setMsg("Please fill all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      const res = await axios.post("https://dreamfenceapi.vercel.app/gallery/add", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setMsg("✅ Gallery item added successfully!");
      setTitle("");
      setImage(null);

    } catch (error) {
      setMsg("❌ Error uploading: " + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Gallery Item</h2>

      {msg && <p className="alert alert-info text-center">{msg}</p>}

      <form onSubmit={handleSubmit} className="card p-4 shadow-lg">

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input 
            type="text" 
            className="form-control" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Enter image title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Select Image</label>
          <input 
            type="file" 
            className="form-control" 
            onChange={(e) => setImage(e.target.files[0])} 
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Upload to Gallery
        </button>

      </form>
    </div>
  );
}

export default GalleryAdd;
