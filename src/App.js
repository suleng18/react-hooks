import './App.css';
import { useState } from 'react';

const courseList = [
  {
    name: 'javascript',
    id: 1,
  },
  {
    name: 'php',
    id: 2,
  },
  {
    name: 'react',
    id: 3,
  },
];

function App() {
  const [checked, setChecked] = useState([]);
  console.log('🚀 ~ checked', checked);

  const handleSubmit = () => {
    console.log({ id: checked });
  };

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);

      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div style={{ padding: '32px' }}>
      {courseList.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Resgister</button>
    </div>
  );
}

export default App;
