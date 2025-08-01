import React from "react";
import "./Services.css";

const services = [
  {
    icon: "📱",
    title: "Cross-Platform Mobile App Development",
  },
  {
    icon: "💻",
    title: "Front-End Development",
  },
  {
    icon: "🖥️",
    title: "Back-End Development",
  },
  {
    icon: "🗂️",
    title: "Product Planning and Management",
  },
  {
    icon: "🗃️",
    title: "Database Management",
  },
  {
    icon: "💡",
    title: "UI/UX Design",
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-container">
        <h2 className="text-4xl font-bold mb-12">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ fontSize: "2.5rem" }}>{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-underline"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
