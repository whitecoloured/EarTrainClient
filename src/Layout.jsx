import Header from "./components/header/Header";
import {Outlet} from 'react-router'
import Footer from "./components/footer/footer"

function Layout()
{
    return(
    <>
        <Header/>
            <Outlet/>
        <Footer/>
    </>)
}

export default Layout;