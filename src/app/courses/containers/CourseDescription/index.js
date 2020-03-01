import CourseDescritionForm from 'app/courses/components/CourseDescriptionForm';
import { connect } from 'react-redux';
import { updateCourse } from 'app/store/data/course/course.actions';

const mapStateToProps = ({ data }) => {
  return {
    course: (data.courseDetails.loaded && data.courseDetails.course.currentValue) || {},
  };
};

const CourseDescription = connect(
  mapStateToProps,
  { handleChange: ({ target }) => updateCourse(target.name, target.value) },
)(CourseDescritionForm);

export default CourseDescription;
