import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { areEqual } from 'app/core/utils/areEqual';
import { Button } from 'semantic-ui-react';
import { discardAllChanges, saveAllChanges } from 'app/store/data/course/course.actions';

export function HeaderActions({ enableActions, discardAllChanges, saveAllChanges }) {
  const { t } = useTranslation();
  return (
    <Button.Group>
      <Button disabled={!enableActions} positive onClick={saveAllChanges}>{t('action.save-all')}</Button>
      <Button.Or />
      <Button disabled={!enableActions} onClick={discardAllChanges}>
        {t('action.discard-all')}
      </Button>
    </Button.Group>
  );
}

HeaderActions.propTypes = {
  enableActions: PropTypes.bool,
  discardAllChanges: PropTypes.func,
  saveAllChanges: PropTypes.func,
};

HeaderActions.defaultProps = {
  enableActions: false,
};

function canEnableActions({ loaded, error, course, textbooks, updating }) {
  if (!loaded || error || !course || !textbooks || updating) {
    return false;
  }

  let enableActions = areEqual(course.previousValue, course.currentValue);
  if (!enableActions) return true;
  for(let index = 0; index < textbooks.length; index++) {
    const { previousValue, currentValue } = textbooks[index];
    enableActions = areEqual(previousValue, currentValue);
    if (!enableActions) return true;
  }
  return false;
}

const mapStateToProps = ({ data: { courseDetails } }) => {
  return {
    enableActions: canEnableActions(courseDetails),
  };
};

export default connect(
  mapStateToProps,
  { discardAllChanges, saveAllChanges },
)(HeaderActions);
