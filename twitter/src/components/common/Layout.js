import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as COLORS from '../../constants/colors';

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  background-color: ${COLORS.WHITE};
  border-bottom: 1px solid rgba(0,0,0,0.25);
`;
Navbar.displayName = 'Navbar';

const Content = styled.div`
  max-width: 600px;
  margin: 10px auto;
  background-color: ${COLORS.GREY_100};
  border: 1px solid ${COLORS.GREY_200};
`;
Content.displayName = 'Content';

const Layout = ({ children }) => (
  <Fragment>
    <Navbar>
      <Link to="/">Home</Link>
      <Link to="/me">Me</Link>
    </Navbar>
    <Content>
      {children}
    </Content>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
