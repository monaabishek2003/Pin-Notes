import React from "react";

const year = new Date().getFullYear()

function Footer(){
    return (
    <footer>
        <p>Copyrights ⓒ{year} @monaabishek</p>

    </footer>)
}

export default Footer;