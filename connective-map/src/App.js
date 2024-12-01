import React from 'react';
import './style/App.css';  // Import the CSS file
import Cards from './comp/cards';  // Corrected the import name to uppercase

function App() {
  return (
    <div className="App">
      <Cards /> {/* Properly use the Cards component */}
    </div>
  );
}

export default App;
