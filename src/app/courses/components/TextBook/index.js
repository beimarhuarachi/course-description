import React from 'react';
import { Segment, Form, Input, Button } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export function TextBook({ handleChange, handleReset, handleSubmit, values, enableActions }) {
  const { t } = useTranslation();

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field>
            <label>{t('textbook.author')}</label>
            <Input
              placeholder={t('textbook.author')}
              name='author'
              onChange={handleChange}
              value={values.author}
            />
          </Form.Field>

          <Form.Field>
            <label>{t('textbook.title')}</label>
            <Input
              placeholder={t('textbook.title')}
              name='title'
              onChange={handleChange}
              value={values.title}
            />
          </Form.Field>

        </Form.Group>
        <Button type='submit' primary disabled={!enableActions}>
          {t('action.save')}
        </Button>
        <Button onClick={handleReset} disabled={!enableActions}>
            {t('action.discard-changes')}
        </Button>
      </Form>
    </Segment>
  );
}

TextBook.propTypes = {
  values: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
  }),
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleReset: PropTypes.func,
  enableActions: PropTypes.bool,
};

export default TextBook;
