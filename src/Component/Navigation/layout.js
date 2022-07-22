import React from "react";
import Footer from './footer/footer'
import Sidebar from './sidebar'

const Layout = (props)=>{
    return(
        <div>
            {/* <Sidebar /> */}
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;