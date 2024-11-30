// components/FilterPanel.js
import React from 'react';
import Select from 'react-select';

const FilterPannel = ({ filters, setFilters }) => {
  const options = {
    industry: [{ value: 'tech', label: 'Tech' }, { value: 'finance', label: 'Finance' }],
    businessType: [{ value: 'b2b', label: 'B2B' }, { value: 'b2c', label: 'B2C' }],
    relationshipType: [{ value: 'partner', label: 'Partner' }, { value: 'client', label: 'Client' }],
    networkingGroup: [{ value: 'groupA', label: 'Group A' }, { value: 'groupB', label: 'Group B' }],
  };

  const handleChange = (key, selectedOption) => {
    setFilters((prev) => ({ ...prev, [key]: selectedOption }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '10px' }}>
      {Object.keys(options).map((key) => (
        <Select
          key={key}
          options={options[key]}
          onChange={(selected) => handleChange(key, selected)}
          placeholder={`Filter by ${key}`}
          isMulti
        />
      ))}
    </div>
  );
};

export default FilterPannel;
