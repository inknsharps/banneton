import React from "react";

const FormTextarea = ({ labelName, htmlFor, rows = 5, cols = 50, placeholder = "" }) => {
    return (
        <div className="FormTextarea flex flex-col content-center p-2 m-2">
            <label className="text-left border-b-2 border-gray-200 p-1 m-2" htmlFor={ htmlFor }>{ labelName }</label>
            <textarea className="border-2 text-left p-2 m-2" style={ {resize:"none"} } name={ htmlFor } placeholder={ placeholder } rows={ rows } cols={ cols }></textarea>
        </div>
    )
};

export default FormTextarea;