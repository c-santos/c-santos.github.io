import { NavLink } from 'react-router';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <NavLink to={"/"} className={(isActive) => isActive ? 'active' : 'inactive'}>Carlo's Site</NavLink>
      <NavLink className={(isActive) => isActive ? 'active' : 'inactive'} to={"/about"}>About</NavLink>
    </nav>
  );
}

export default Nav;
