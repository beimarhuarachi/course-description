import React from 'react';
import { useTranslation } from 'react-i18next';
import { Divider, Header, Icon } from 'semantic-ui-react';

export default function TextbooksDivider() {
  const { t } = useTranslation();
  return (
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='book' />
        {t('common.textbooks')}
      </Header>
    </Divider>
  );
}
