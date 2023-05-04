import { NavLink, NavLinkProps} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import styled from "styled-components";

export interface NavItemProps extends NavLinkProps {
  label: React.ReactNode;
  exact?: string;
}

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 10px;
  transition: all 0.2s;

  &:hover {
    background-color: #eee;
  }

  &.active {
    font-weight: bold;
    color: #fff;
    background-color: #0077cc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0077cc;
  }
`;

export const NavItemWrapper = styled.li`
  display: inline-block;
  margin-right: 10px;
`;

export function NavItem({ label, ...props }: NavItemProps) {
  return (
    <NavItemWrapper>
      <StyledNavLink
        {...props}
      >
        {label}
      </StyledNavLink>
    </NavItemWrapper>
  );
}


function Navigation() {
  return (
    <nav>
      <ul>
        <NavItem exact="true" to="/" label={<HomeIcon/>} />
        <NavItem to="/charts" label={<BarChartIcon/>} />
        <NavItem to="/settings" label={<SettingsIcon/>} />
      </ul>
    </nav>
  );
}

export default Navigation;
