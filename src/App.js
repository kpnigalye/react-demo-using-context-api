import React from 'react';
import { AddItem } from './Components/AddItem';
import { Nav } from './Components/Nav';
import Store from './Components/Store';
import { StoreProvider } from './StoreContext';

const App = () => {
  return (
    <StoreProvider>
      <div>
        <Nav />
        <AddItem />
        <Store />
      </div>
    </StoreProvider>
  );
}

export default App;
