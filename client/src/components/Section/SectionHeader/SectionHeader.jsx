import React from "react";

const SectionHeader = ({ headerText }) => {
    return (
        <div className="SectionHeader text-5xl p-10">
            <h3>{ headerText }</h3>
        </div>
    )
};

export default SectionHeader;