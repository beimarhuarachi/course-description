import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCourse } from 'app/store/data/course/course.actions';
import Header from 'app/core/components/PageHeader';
import CourseDescription from './containers/CourseDescription';
import TextbooksDivider from './components/TextbooksDivider';
import TextBooksList from './containers/TextBooksList';
import HeaderActions from './containers/HeaderActions';

export function Courses({ match, getCourse }) {
  useEffect(() => {
    const courseId = match.params.id;
    if (courseId) {
      getCourse(courseId);
    }
  }, []);

  return (
    <>
      <Header titleKey='common.edit-course'>
        <HeaderActions />
      </Header>
      <CourseDescription />
      <TextbooksDivider />
      <TextBooksList />
    </>
  );
}

Courses.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string })
  }).isRequired,
  getCourse: PropTypes.func.isRequired
};

export default connect(null, { getCourse })(Courses);
