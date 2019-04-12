import * as React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { push } from 'connected-react-router';

import Test from 'components/Test';
import Features from 'components/Features';
import { ReactComponent as ReactLogo } from 'assets/react.svg';

import { setLocale } from 'store/app/actions';
import { logoutSuccess } from '../../store/user/actions';

const App = (props) => {
  const setLanguage = React.useCallback((e) => {
    props.setLocale(e.target.value);
  }, []);

  const { t, logoutSuccess: logout, push: pushRoute } = props;
  return (
    <Wrapper>
      <Helmet defaultTitle="React SSR Starter" titleTemplate="%s – React SSR Starter" />
      <h1>
        <StyledReactLogo /> React + Express – SSR Starter
      </h1>
      <Features />
      <h2>{t('i18n-example')}</h2>
      <p>
        <button type="button" value="de_DE" onClick={setLanguage}>
          Deutsch
        </button>
        <button type="button" value="en_US" onClick={setLanguage}>
          English
        </button>
        <button type="button" onClick={logout}>
          Logout
        </button>
        <button type="button" onClick={() => pushRoute('/asdasdasd')}>
          PUSH
        </button>
      </p>
      <Test />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  max-width: 100%;
  width: 768px;

  h1 {
    font-size: 20px;
  }
`;

const StyledReactLogo = styled(ReactLogo)`
  height: 48px;
  vertical-align: middle;
  width: 48px;
`;

App.propTypes = {
  setLocale: propTypes.func.isRequired,
  logoutSuccess: propTypes.func.isRequired,
  push: propTypes.func.isRequired,
  t: propTypes.func.isRequired,
};

const mapDispatchToProps = {
  setLocale,
  logoutSuccess,
  push,
};

export default connect(
  null,
  mapDispatchToProps
)(withTranslation()(App));
