import { NavLink} from "react-router-dom"
import logo from "../assets/logo.png"
export const Header = () => {
  return (
    <div>
   <header>
  <div className="header-container">
    <div className="branding">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">MOVIE FLIX</h1>
    </div>

    <nav className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/Populars" className="nav-link">Populars</NavLink>
      <NavLink to="/TopRated" className="nav-link">TopRated</NavLink>
      <NavLink to="/UpComing" className="nav-link">UpComing</NavLink>
    </nav>
  </div>
</header>
  </div>
  )
}
