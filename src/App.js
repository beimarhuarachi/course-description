import React from 'react';
import { Header } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <Header>{t('app-name')}</Header>
  );
}

export default App;
