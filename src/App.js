import React, { useState } from 'react'

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native'])
  const [newTech, setNewTech] = useState('')

  const handleAdd = () => {
    setTech([...tech, newTech])
    setNewTech('')
  }

  return (
    <>
      <ul>
        {tech.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>Add</button>
    </>
  );
}

export default App;
