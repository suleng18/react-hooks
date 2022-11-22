import { useContext } from 'react';
import './App.css';
import Content from './Content';
import { ThemContext } from './ThemeContext';

// Context
// 1. Create context
// 2. Provider
// 3. Consumer

function App() {
  const context = useContext(ThemContext);
  return (
    <div style={{ padding: '32px' }}>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <Content />
    </div>
  );
}

export default App;
