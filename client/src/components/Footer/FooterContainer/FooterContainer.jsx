import React from "react";
import FooterCopyright from "../FooterCopyright/FooterCopyright";
import FooterIconContainer from "../FooterIconContainer/FooterIconContainer";

const FooterContainer = () => {
    return (
        <footer className="FooterContainer grid grid-cols-1 bg-gray-200 bg-opacity-50 border-t-2 border-gray-300 pt-5">
            <FooterCopyright />
            <FooterIconContainer />
        </footer>
    )
};

export default FooterContainer;