import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import logo from 'logo.svg';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
  const { t } = useTranslation();
  return (
    <Menu inverted>
      <Container>
        <Menu.Item>
          <img src={logo} />
        </Menu.Item>

        <Menu.Item
          name={'title'}
        >
          {t('app-name')}
        </Menu.Item>
      </Container>
    </Menu>
	);
}
