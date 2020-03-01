import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Icon, Header } from 'semantic-ui-react';

function PageHeader({ titleKey = '' }) {
  const { t } = useTranslation();
  return (
    <Header as='h3'>
      <Icon name='edit' size='small' />
      <Header.Content>{t(titleKey)}</Header.Content>
    </Header>
  );
}

PageHeader.propTypes = {
  titleKey: PropTypes.string.isRequired,
};

export default PageHeader;
