import React, { useState, useEffect } from 'react'

function App() {
  const [tech, setTech] = useState([])
  const [newTech, setNewTech] = useState('')

  const handleAdd = () => {
    setTech([...tech, newTech])
    setNewTech('')
  }

  useEffect(() => {
    const storeTech = localStorage.getItem('tech')
    storeTech && setTech(JSON.parse(storeTech))
  }, [])

  useEffect(() => {localStorage.setItem('tech', JSON.stringify(tech))}, [tech])

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
