import './App.css';
import { useState } from 'react';

function App() {
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs')) ?? [];
    console.log(storageJobs);
    return storageJobs;
  });

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJob = [...prev, job];

      const jsonJobs = JSON.stringify(newJob);

      localStorage.setItem('jobs', jsonJobs);

      return newJob;
    });
    setJob('');
  };

  const handleRemove = (index) => {
    const newTodo = jobs.filter((todo, indexTodo) => index !== indexTodo);
    localStorage.setItem('jobs', JSON.stringify(newTodo));
    setJobs(newTodo);
  };

  return (
    <div style={{ padding: '32px' }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => handleRemove(index)}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
