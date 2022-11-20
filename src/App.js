import './App.css';
import { useState } from 'react';

const gifts = ['cpui9', 'ram16gb', 'keyboard'];

function App() {
  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  return (
    <div style={{ padding: '32px' }}>
      <h1>{gift || 'Chua co phan thuong'}</h1>
      <button onClick={randomGift}>Lay thuong</button>
    </div>
  );
}

export default App;
