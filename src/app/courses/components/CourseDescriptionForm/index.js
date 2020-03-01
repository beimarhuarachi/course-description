import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CourseDescription from 'app/courses/containers/CourseDescription';

export function CourseDescritionForm({ course }) {
  const { t } = useTranslation();
  return (
    <Form>
      <Form.Group widths='equal'>
        <Form.Field
          value={course.name}
          control={Input}
          name='name'
          label={t('course.name')}
          placeholder={t('course.name')}
        />
        <Form.Field
          value={course.description}
          control={TextArea}
          name='description'
          label={t('course.description')}
          placeholder={t('course.description')}
        />
      </Form.Group>
    </Form>
  );
}

CourseDescritionForm.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default CourseDescritionForm;
