import { NavLink, NavLinkProps } from "react-router-dom";

interface NavItemProps extends NavLinkProps {
  label: string;
  exact?: boolean;
}

function NavItem({ label, ...props }: NavItemProps) {
  return (
    <li>
      <NavLink
        {...props}
        className="nav-link"
      >
        {label}
      </NavLink>
    </li>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <NavItem exact to="/" label="Home" />
        <NavItem to="/about" label="About" />
        <NavItem to="/contact" label="Contact" />
      </ul>
    </nav>
  );
}

export default Navigation;
