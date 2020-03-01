import React from 'react';
import NavBar from 'app/core/components/NavBar';
import AppRouter from './AppRouter';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <AppRouter />
      </Container>
    </>
  );
}

export default App;
