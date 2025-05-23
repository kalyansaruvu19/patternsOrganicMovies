import {Link, NavLink} from "react-router-dom"
import logo from "../assets/logo.png"
export const Header = () => {
  return (
    <div>
    <header>
    <img   src={logo} alt="logo" /><h1 > MOVIE FLIX</h1>
    <NavLink className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/Populars"className="nav-link">Populars</Link>
      <Link to="/TopRated"className="nav-link">TopRated</Link>
      <Link to="/UpComing"className="nav-link">UpComing</Link>
    </NavLink>
  </header>
  </div>
  )
}
