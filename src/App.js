import React from 'react';
import './App.css';
import { initNotication } from './service/firebaseService';

function App() {
  return (
    <div className="App">
      <h2>Slam Pakistan</h2>
      <button onClick={initNotication}>Configure Notification</button>

    </div>
  );
}

export default App;
