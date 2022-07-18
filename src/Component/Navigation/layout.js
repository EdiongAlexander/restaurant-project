import React from "react";
import footer from './footer'
import header from './header'
import sidebar from './sidebar'

const Layout = (props)=>{
    return(
        <div>
            <header />
            <sidebar />
            <main>
                {props.children}
            </main>
            <footer />
        </div>
    )
}

export default Layout;