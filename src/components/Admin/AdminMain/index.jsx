import React, { useState } from "react";
import GalleryAdd from "../add/GalleryAdd";
import AddCard from "../add/addhomecard";
import AddService from "../add/AddService";
import AddWhyChoose from "../add/AddWhyChoose";
import AddFaq from "../add/AddFaq";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("gallery");

  const renderTab = () => {
    switch (activeTab) {
      case "gallery":
        return <GalleryAdd />;
      case "homecard":
        return <AddCard />;
      case "service":
        return <AddService />;
      case "whychoose":
        return <AddWhyChoose />;
      case "faq":
        return <AddFaq />;
      default:
        return <GalleryAdd />;
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Admin Dashboard</h1>

      {/* Tab Buttons */}
      <div className="mb-4 d-flex gap-2 flex-wrap">
        <button className="btn btn-primary" onClick={() => setActiveTab("gallery")}>Add Gallery</button>
        <button className="btn btn-primary" onClick={() => setActiveTab("homecard")}>Add Home Card</button>
        <button className="btn btn-primary" onClick={() => setActiveTab("service")}>Add Service</button>
        <button className="btn btn-primary" onClick={() => setActiveTab("whychoose")}>Add Why Choose</button>
        <button className="btn btn-primary" onClick={() => setActiveTab("faq")}>Add FAQ</button>
      </div>

      {/* Render selected tab */}
      <div>{renderTab()}</div>
    </div>
  );
}

export default AdminDashboard;
