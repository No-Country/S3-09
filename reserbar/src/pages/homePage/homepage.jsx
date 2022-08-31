import React from "react";
import DrawerFooterNavLinks from "../../components/drawerFooterNavLinks/drawerFooterNavLinks";
import  {RiHomeFill } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'
import { MdOutlineQrCodeScanner } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'
import { Outlet } from "react-router-dom";


const Homepage = () => {

    // Drawer or footer links.
    const navLinksInfo = [
        {navIcon: <RiHomeFill /> , path:"/home" , text: "Home"},
        {navIcon: <BiSearch /> , path:"/search" , text: "Buscar"},
        {navIcon: <MdOutlineQrCodeScanner /> , path:"/qr" , text: "Mi ID"},
        {navIcon: <HiUserCircle /> , path:"/perfil" , text: "Perfil"},
    ]

    return (
        <section className="homePageContent">
            <div className="homePageContent__drawer">
                {
                    navLinksInfo.map((link, index) => {
                        return <DrawerFooterNavLinks
                            key={index}
                            text={link.text}
                            path={link.path} 
                            navIcon={link.navIcon}/>
                    })
                }
            </div>
            <div className="homePageContent__AppVisibleToUser">
                <Outlet />
            </div>
        </section>
    )
};

export default Homepage;
