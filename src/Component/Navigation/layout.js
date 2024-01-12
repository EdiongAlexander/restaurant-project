import React from "react";
import Footer from './footer/footer'


const Layout = (props)=>{
    return(
        <div className="w-full h-full">
            
            <main>
                
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;