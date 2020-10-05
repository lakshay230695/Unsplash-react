import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    return(
        <div>
            <footer>Lak Copyright © {currentYear}</footer>
        </div>
    );
}

export default Footer;