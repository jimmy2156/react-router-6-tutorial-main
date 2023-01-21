
import { Outlet } from "react-router-dom";

import StyledNavbar from "../components/StyledNavbar";



const SharedLayout = () => {
  return (
    <section className='section'>
      <StyledNavbar/>
      <Outlet/>
    </section>
  );
};
export default SharedLayout;
