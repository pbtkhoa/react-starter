import React from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import PropTypes from 'prop-types';

class LoadableProgressContainer extends React.Component {
  componentDidMount() {
    this.props.showLoading();
  }

  componentWillUnmount() {
    this.props.hideLoading();
  }

  render() {
    return null;
  }
}

LoadableProgressContainer.propTypes = {
  showLoading: PropTypes.func.isRequired,
  hideLoading: PropTypes.func.isRequired
};

export default ({ loader }) =>
  Loadable({
    loader,
    delay: 0, // react-redux-loading-bar has its own time delay handling
    loading: connect(
      null,
      dispatch => bindActionCreators({ showLoading, hideLoading }, dispatch)
    )(LoadableProgressContainer)
  });
