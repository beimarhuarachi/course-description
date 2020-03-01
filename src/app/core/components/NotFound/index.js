import React from 'react'
import { Header } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <Header>{t('common.page-not-found')}</Header>
  );
}
