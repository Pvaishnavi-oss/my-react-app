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
      bullets: [
        "Led version migration of legacy Angular applications, improving performance and compatibility with modern frameworks.",
        "Revamped UI components and made application layouts fully mobile responsive to enhance user experience across devices.",
      ],
    },
    {
      date: "Nov 2023 – Present",
      title: "Team Lead",
      org: "Prince St. Pizza",
      location: "Toronto, Ontario, Canada",
      mode: "PART–TIME",
      bullets: [
        "Lead a team of about 15 employees, ensuring consistent quality and service to over 300 customers daily.",
        "Managed inventory and coordinated tasks for timely preparation and service.",
        "Resolved customer conflicts efficiently to maintain a positive business reputation.",
      ],
    },
  ],
  education: [
    {
      date: "Jan 2023 – Aug 2026",
      expected: true,
      title: "Honours Bachelor of Technology – Software Development",
      org: "Seneca Polytechnic",
      location: "Toronto, Ontario, Canada",
      bullets: [
        "Cumulative GPA: 3.8/4 (1x President’s Honour List)",
        "Specialization: Software Development, GUI Designing (Figma)",
        "Web Development: Responsive Design, UX/UI Development.",
      ],
    },
    {
      date: "Sept 2024 – Dec 2024",
      title: "Cultural Intelligence Badge",
      org: "Seneca Polytechnic",
      location: "Toronto, Ontario, Canada",
      bullets: [
        "Developed intercultural communication and collaboration skills.",
        "Applied the Intercultural Development Inventory (IDI) to assess and advance intercultural competence.",
        "Earned the badge by meeting criteria related to self-awareness, inclusive communication, and teamwork.",
      ],
    },
  ],
};

// ✅ CardHeading as inner function
const CardHeading = ({ text }) => (
  <h2 className="card-heading">{text}</h2>
);

// ✅ Card component
const Card = ({ heading, items }) => (
  <div className="card">
    <CardHeading text={heading} />
    {items.map((item, index) => (
      <div key={index} className="card-item">
        <p className="card-date">
          {item.date} {item.expected ? <span className="expected">(Expected)</span> : ""}
        </p>
        <p className="card-title">{item.title}</p>
        <p className="card-org">{item.org}</p>
        <p className="card-location">
          {item.location} {item.mode && <span className="card-mode">({item.mode})</span>}
        </p>
        {item.bullets && (
          <ul className="card-description">
            {item.bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);

// ✅ Main Exported Component
export default function ProfilePage() {
  return (
    <div className="profile-section">
      <h1 className="resume-heading">
        <span className="overlay-text">Resume</span>
        Resume
      </h1>
      <Card heading="EXPERIENCE" items={data.experience} />
      <Card heading="EDUCATION" items={data.education} />
    </div>
  );
}
