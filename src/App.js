import React, { useState, useEffect, useMemo } from 'react'

function App() {
  const [techs, setTech] = useState([])
  const [newTech, setNewTech] = useState('')

  const handleAdd = () => {
    setTech([...techs, newTech])
    setNewTech('')
  }

  useEffect(() => {
    const tech = localStorage.getItem('tech')
    tech && setTech(JSON.parse(tech))
  }, [])

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs))
  }, [techs])

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <p>{techs.length} items</p>
      <button type="button" onClick={handleAdd}>Add</button>
    </>
  );
}

export default App;
