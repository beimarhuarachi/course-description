import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextBook from 'app/courses/components/TextBook';
import { updateTextbook, discardTextbookChanges } from 'app/store/data/course/course.actions';
import { areEqual } from 'app/core/utils/areEqual';

export function TextBooksList({ textbooks, canShow, updateTextbook, discardTextbookChanges, updatingCourse }) {
  if (!canShow) {
    return null;
  }
  return (
    <>
      {textbooks.map(({ id, previousValue, currentValue }) =>
        <TextBook
          key={id}
          handleChange={({ target }) => {updateTextbook(id, target.name, target.value)}}
          handleSubmit={() => {}}
          handleReset={() => {discardTextbookChanges(id)}}
          values={currentValue}
          enableActions={!areEqual(previousValue, currentValue) && !updatingCourse}
        />
      )}
    </>
  );
}

TextBooksList.propTypes = {
  textbooks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      currentValue: PropTypes.shape({
        author: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  ),
  canShow: PropTypes.bool,
  updateTextbook: PropTypes.func,
  discardTextbookChanges: PropTypes.func,
  updatingCourse: PropTypes.bool,
};

const mapStateToProps = ({ data }) => {
  return {
    textbooks: (data.courseDetails.loaded && data.courseDetails.textbooks) || [],
    canShow: data.courseDetails.loaded,
    updatingCourse: data.courseDetails.updating,
  };
};

export default connect(
  mapStateToProps,
  { updateTextbook, discardTextbookChanges },
)(TextBooksList);
