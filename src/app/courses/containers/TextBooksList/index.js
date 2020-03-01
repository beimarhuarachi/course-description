import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextBook from 'app/courses/components/TextBook';
import { updateTextbook } from 'app/store/data/course/course.actions';

export function TextBooksList({ textbooks, canShow, updateTextbook }) {
  if (!canShow) {
    return null;
  }
  return (
    <>
      {textbooks.map((textbook) =>
        <TextBook
          key={textbook.id}
          handleChange={({ target }) => {updateTextbook(textbook.id, target.name, target.value)}}
          handleSubmit={() => {}}
          handleReset={() => {}}
          values={textbook.currentValue}
          enableActions={false}
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
};

const mapStateToProps = ({ data }) => {
  return {
    textbooks: (data.courseDetails.loaded && data.courseDetails.textbooks) || [],
    canShow: data.courseDetails.loaded,
  };
};

export default connect(
  mapStateToProps,
  { updateTextbook },
)(TextBooksList);
