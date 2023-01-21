import { NavLink} from "react-router-dom"



const StyledNavbar = () => {
    return (
        <nav>
  <NavLink to="/" className={({isActive}) => isActive ? 'linkactive' : 'link' }>Home</NavLink>
  <NavLink to="/about" className={({isActive}) => isActive ? 'linkactive' : 'link' }>About</NavLink>
  <NavLink to="/products" className={({isActive}) => isActive ? 'linkactive' : 'link' }>Products</NavLink>
  <NavLink to="/login" className={({isActive}) => isActive ? 'linkactive' : 'link' }>Login</NavLink>


        </nav>
    )
}

export default StyledNavbar;