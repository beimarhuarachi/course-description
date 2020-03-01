import React from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from 'app/core/components/NavBar';
import AppRouter from './AppRouter';
import { Container } from 'semantic-ui-react';

function App() {
  const { t } = useTranslation();
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
