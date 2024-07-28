import { Outlet } from "react-router-dom";
import AnnouncementBar from "../components/Announcementbar/announcementbar";
import NavBar from "../components/Navbar/navbar";
import Credits from "../components/Credits/credits";
const Layout = () => {
    return (  

        <>
           <header>
            <AnnouncementBar/>
           <NavBar/>
           </header>
           <main>
            <Outlet/>
           </main>
           <footer>
          <Credits/>
           </footer>
        </>
    );
}
 
export default Layout;