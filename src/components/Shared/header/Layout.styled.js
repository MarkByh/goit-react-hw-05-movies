import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  
  text-decoration: none;
  &.active {
    color: white;
    
  }
`;
