import {NavLink} from "react-router-dom";
import './style.css'

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg bg-light">
           <h1 className="navbar-brand">Weather</h1>
           <ul className="navbar-nav">
               <li className="nav-item">
                   <NavLink className="nav-link" to="/">Home</NavLink>
               </li>
               <li className="nav-item">
                   <NavLink className="nav-link" to="/about">Прогноз погоды</NavLink>
               </li>
           </ul>
    </nav>)

