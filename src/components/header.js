import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1.5rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
    `}
  >
    <NavLink to="/" fontWeight="bold">
      Daily Life
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Blog
      </NavLink>
      <NavLink to="https://www.notion.so/iwannabetterthantoday/Profile-4c4dff642ccd47c09e21e5817970dc53">
        About
      </NavLink>
      <NavLink to="https://www.notion.so/iwannabetterthantoday/dev-aa036756725d47feb8c1678215ae907c">
        Blog Development
      </NavLink>
    </nav>
  </header>
  
);

export default Header;
