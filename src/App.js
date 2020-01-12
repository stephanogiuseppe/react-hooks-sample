import React, { useState, useEffect, useMemo, useCallback } from 'react'

function App() {
  const [techs, setTech] = useState([])
  const [newTech, setNewTech] = useState('')

  const handleAdd = useCallback(() => {
    setTech([...techs, newTech])
    setNewTech('')
  }, [newTech, techs])

  const techsSize = useMemo(() => techs.length, [techs])

  useEffect(() => {
    const tech = localStorage.getItem('techs')
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
      <p>{techsSize} items</p>
      <button type="button" onClick={handleAdd}>Add</button>
    </>
  );
}

export default App;
