import React, { useEffect, useState } from 'react';
import './App.css';
import NamesResource from './resources/NamesResource';
import Text from './components/Text';
import CombinedProviders from './components/CombinedProviders';

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
    <CombinedProviders>
      <div className="App">
        <Text as="h1" color="secondary" align="center">
          Hello world
        </Text>
      </div>
    </CombinedProviders>
  );
}

export default App;
