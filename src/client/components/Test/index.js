import React from 'react';
// import propTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import TestComponent from './Test';

const Test = () => {
  return <TestComponent />;
};

Test.propTypes = {};

Test.defaultProps = {};

const mapStateToProps = (state) => ({
  app: state.app,
});

const mapDispatchToProps = {};

const WithTranslation = withTranslation()(Test);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithTranslation);
