    import React from "react";
import "./resume.css";

const data = {
  experience: [
    {
      date: "May 2025 – Present",
      title: "Senior Technologist – Software Development (Co-op)",
      org: "Seneca Polytechnic – ITS Information Solutions",
      location: "Toronto, Ontario, Canada",
      mode: "HYBRID",
    },
  ],
  education: [
    {
      date: "Jan 2023 – Aug 2026",
      expected: true,
      title: "Honours Bachelor of Technology – Software Development",
      org: "Seneca Polytechnic",
      location: "Toronto, Ontario, Canada",
    },
  ],
  projects: [
    {
      name: "Smart Attendance System",
      description:
        "Built a real-time facial recognition-based attendance system using Python and OpenCV.",
      tools: "Python, OpenCV, Flask",
    },
  ],
};

const Card = ({ heading, items, type }) => (
  <div className="card">
    <h2 className="card-heading">{heading}</h2>
    {items.map((item, index) => (
      <div key={index} className="card-item">
        <p className="card-date">
          {item.date} {item.expected ? "(Expected)" : ""}
        </p>
        <p className="card-title">{item.title || item.name}</p>
        {type !== "projects" && (
          <>
            <p className="card-org">{item.org}</p>
            <p className="card-location">{item.location}</p>
            {item.mode && <p className="card-mode">({item.mode})</p>}
          </>
        )}
        {type === "projects" && (
          <>
            <p className="card-description">{item.description}</p>
            <p className="card-tools">Tools: {item.tools}</p>
          </>
        )}
      </div>
    ))}
  </div>
);

export default function ProfilePage() {
  return (
    <div className="profile-section">
      <Card heading="EXPERIENCE" items={data.experience} type="experience" />
      <Card heading="EDUCATION" items={data.education} type="education" />
      <Card heading="PROJECTS" items={data.projects} type="projects" />
    </div>
  );
}
