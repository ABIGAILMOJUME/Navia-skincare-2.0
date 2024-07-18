import { Outlet } from "react-router-dom";
import AnnouncementBar from "../components/Announcementbar/announcementbar";
import NavBar from "../components/Navbar/navbar";

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
        </>
    );
}
 
export default Layout;