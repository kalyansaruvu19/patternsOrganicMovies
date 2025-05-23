import {Link, NavLink} from "react-router-dom"
export const Header = () => {
  return (
    <div>
    <header>
    <h1>ORGANICFLIX</h1>
    <NavLink className="navbar">
      <Link to="#" className="nav-link">Home</Link>
      <Link to="#"className="nav-link">Populars</Link>
      <Link to="#"className="nav-link">TopRated</Link>
      <Link to="#"className="nav-link">UpComing</Link>
    </NavLink>
  </header>
  </div>
  )
}
