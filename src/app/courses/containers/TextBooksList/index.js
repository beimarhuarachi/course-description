import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextBook from 'app/courses/components/TextBook';

export function TextBooksList({ textbooks, canShow }) {
  if (!canShow) {
    return null;
  }
  return (
    <>
      {textbooks.map((textbook, key) =>
        <TextBook
          key={key}
          handleChange={() => {}}
          handleSubmit={() => {}}
          handleReset={() => {}}
          values={textbook}
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
      author: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  canShow: PropTypes.bool,
};

const mapStateToProps = ({ data }) => {
  return {
    textbooks: (data.course.course && data.course.course.textbooks) || [],
    canShow: data.course.loaded,
  };
};

export default connect(
  mapStateToProps,
  null,
)(TextBooksList);
