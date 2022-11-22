import './App.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import Content from './Content';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([...products, { name, price: +price }]);

    setName('');
    setPrice('');
    nameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = products.reduce((result, product) => {
      console.log('tinh toan lai');
      return result + product.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div style={{ padding: '32px' }}>
      <input
        ref={nameRef}
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
