import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../images/cudd.io.svg';

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContent>
      <Brand>
        <Link to="/">
          <Logo src={logo} alt="Gatsby Logo" />
        </Link>
      </Brand>
    </HeaderContent>
  </HeaderContainer>
);

export default Header;

const Logo = styled.img`
  padding-right: 20px;
  height: 50px;
`;

const HeaderContainer = styled.div`
  background: #0091ea;
  color: white;
  padding: 10px;
  z-index: 500;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  padding: 0.25rem;
`;

const Brand = styled.h1`
  color: white;
  margin: 0px;
  h1 {
    font-size: 0.85em;
    display: inline;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 0.1;
  }
`;
