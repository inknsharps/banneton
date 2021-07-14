import React from "react";

const FooterIcon = ({ link, fontAwesomeClasses }) => {
    return (
        <a href={ link } className="FooterIcon p-1">
            <i className={ fontAwesomeClasses }></i>
        </a>
    )
};

export default FooterIcon;