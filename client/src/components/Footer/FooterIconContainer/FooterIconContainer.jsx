import React from "react";
import FooterIcon from "../FooterIcon/FooterIcon";

const FooterIconContainer = () => {
    return (
        <div className="FooterIconContainer p-1">
            <FooterIcon link="https://github.com/inknsharps/banneton" fontAwesomeClasses="fab fa-github fa-2x" />
            <FooterIcon link="https://www.linkedin.com/in/neil-chen-8a596b1b9/" fontAwesomeClasses="fab fa-linkedin fa-2x" />
        </div>
    )
};

export default FooterIconContainer;