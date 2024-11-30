import React from 'react';
import { getImageUrl } from './utils.js';

// JSON Data
export const profileData = [
  {
    "ID number": "RP-BS-MD-2024-001",
    "Name": "John Doe",
    "Company": "EcoTech Solutions",
    "Occupation-level": "MID",
    "Occupation": "Sustainability Consultant",
    "Email": "john.doe@example.com",
    "Phone": "+1-123-456-7890",
    "SocialMedia": {
      "LinkedIn": "linkedin.com/in/johndoe",
      "Twitter": "@johndoe"
    },
    "RecentActivities": "Presented at the GreenTech Summit 2024",
    "IndustryType": "Service",
    "Industry": "Sustainability and Green Technology",
    "BusinessType": "B2B",
    "RelationshipType": "Professional Partner",
    "NetworkingGroup": "Green Innovators Network",
    "MainConnection": "Emma Smith",
    "PreferredReferral": {
      "Industry": "Renewable Energy",
      "Occupation": "Project Manager",
      "Person": "Alex Johnson"
    }
  },
  {
    "ID number": "CL-B2C-MD-2024-002",
    "Name": "Jane Smith",
    "Company": "Bright Minds IT",
    "Occupation-level": "MID",
    "Occupation": "Business Analyst",
    "Email": "jane.smith@example.com",
    "Phone": "+1-987-654-3210",
    "SocialMedia": {
      "LinkedIn": "linkedin.com/in/janesmith",
      "Twitter": "@janesmith"
    },
    "RecentActivities": "Launched new cloud-based IT solution for nonprofits",
    "IndustryType": "Information",
    "Industry": "Tech for Good",
    "BusinessType": "B2C",
    "RelationshipType": "Collaborator",
    "NetworkingGroup": "Tech Leaders Roundtable",
    "MainConnection": "David Lee",
    "PreferredReferral": {
      "Industry": "Sustainable IT",
      "Occupation": "Business Analyst",
      "Name": "Sophia Turner"
    }
  }
];

export default function card({ selectedProfile }) {
  return (
    <div>
      <h1>Notable Profiles</h1>
      <div className="profile-container">
        {profileData.map((profile) => (
          <section 
            key={profile["ID number"]} 
            className={`profile-card ${selectedProfile === profile["ID number"] ? "hovered" : ""}`}
          >
            <h2>{profile.Name}</h2>
            <img
              className="avatar"
              src={getImageUrl(profile["ID number"])} // Adjust if needed
              alt={profile.Name}
              width={70}
              height={70}
            />
            <ul>
              <li><b>Profession:</b> {profile.Occupation}</li>
              <li><b>Awards:</b> {profile.RecentActivities}</li>
              <li><b>Industry:</b> {profile.Industry}</li>
              <li><b>Business Type:</b> {profile.BusinessType}</li>
              <li><b>Relationship:</b> {profile.RelationshipType}</li>
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
