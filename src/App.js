import React, { useState } from 'react';
import './App.css';  // Pastikan ada file CSS jika dibutuhkan

function App() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(true);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click Me</button>
      {showText && <p>Hello World</p>}
    </div>
  );
}

export default App;