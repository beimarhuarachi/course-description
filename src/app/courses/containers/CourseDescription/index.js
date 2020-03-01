import CourseDescritionForm from 'app/courses/components/CourseDescriptionForm';
import { connect } from 'react-redux';

const mapStateToProps = ({ data }) => {
  return {
    course: (data.course && data.course.course) || {},
  };
};

const CourseDescription = connect(
  mapStateToProps,
  null,
)(CourseDescritionForm);

export default CourseDescription;
