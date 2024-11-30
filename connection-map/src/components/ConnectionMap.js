// components/ConnectionMap.js
import React, { useState, useContext } from 'react';
import FilterPannel from './FilterPannel';
import ProfileCard from './ProfileCard';

const mockData = [
  {
    name: 'Alice Johnson',
    company: 'TechCorp',
    occupation: 'Software Engineer',
    email: 'alice@techcorp.com',
    phone: '123-456-7890',
    socialMedia: '@alice_tech',
    recentActivities: 'Attended React Conference',
    industry: 'tech',
    businessType: 'b2b',
    relationshipType: 'partner',
    networkingGroup: 'groupA',
  },
  // Add more profiles
];

const ConnectionMap = () => {
  const [filters, setFilters] = useState({});
  const filteredData = mockData.filter((profile) => {
    return Object.keys(filters).every((key) => {
      if (!filters[key]) return true;
      const selectedValues = filters[key].map((option) => option.value);
      return selectedValues.includes(profile[key]);
    });
  });

  return (
    <div>
      <h1>Connection Map</h1>
      <FilterPannel filters={filters} setFilters={setFilters} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredData.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default ConnectionMap;
