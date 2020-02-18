import React, { useEffect, useState } from 'react';
import './App.css';
import AutoComplete from './components/AutoComplete';
import NamesResource from './resources/NamesResource';

function App() {
  const [names, setNames] = useState([]);

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNames = async () => {
    setLoading(true);
    const names = await NamesResource.get();
    setLoading(false);
    setNames(names);
  };

  useEffect(() => {
    fetchNames();
  }, []);

  const onChangeHandler = (_, value) => setSelectedCharacter(value);

  const onInputHandler = (_, value) => {
    fetchNames(value);
  };

  return (
    <div className="App">
      <div style={{ width: '300px' }}>
        <AutoComplete
          options={names}
          onChange={onChangeHandler}
          loading={loading}
          onInput={onInputHandler}
          value={selectedCharacter}
        />
      </div>

      <p>Selected character: {selectedCharacter || 'Nobody selected ):'}</p>
    </div>
  );
}

export default App;
