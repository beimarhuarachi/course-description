import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Icon, Header, Button } from 'semantic-ui-react';
import styles from './styles.module.scss';

function PageHeader({ titleKey = '', children }) {
  const { t } = useTranslation();
  return (
    <div className={styles.header}>
      <Header as='h3'>
        <Icon name='edit' size='small' />
        <Header.Content>{t(titleKey)}</Header.Content>
      </Header>
      {React.Children.only(children)}
    </div>
  );
}

PageHeader.propTypes = {
  titleKey: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageHeader;
