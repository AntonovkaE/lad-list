import { NavLink } from 'react-router-dom';
import './style.css';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-light">
    <h1 className="navbar-brand nav-link">Weather</h1>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/coords">Get coords</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Weather</NavLink>
      </li>
    </ul>
  </nav>);

