import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Icon, Header, Button } from 'semantic-ui-react';
import styles from './styles.module.scss';

function PageHeader({ titleKey = '' }) {
  const { t } = useTranslation();
  return (
    <div className={styles.header}>
      <Header as='h3'>
        <Icon name='edit' size='small' />
        <Header.Content>{t(titleKey)}</Header.Content>
      </Header>

      <Button.Group>
        <Button disabled positive>Save All Changes</Button>
        <Button.Or />
        <Button disabled>Discard All Changes</Button>
      </Button.Group>
    </div>
  );
}

PageHeader.propTypes = {
  titleKey: PropTypes.string.isRequired,
};

export default PageHeader;
