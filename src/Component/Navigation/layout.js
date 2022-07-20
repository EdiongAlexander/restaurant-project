import React from "react";
import Footer from './footer/footer'
import Header from './Header/header'
import Sidebar from './sidebar'

const Layout = (props)=>{
    return(
        <div>
            <Header />
            <Sidebar />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;