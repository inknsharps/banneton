import React from "react";
import UpdateForm from "../UpdateForm/UpdateForm";

const UpdateContainer = ({ title, method, ingredients, tags, _id, setEditMode }) => {
    return (
        <div className="UpdateContainer">
            <UpdateForm _id={ _id } title={ title } ingredients={ ingredients } method={ method } tags={ tags } setEditMode={ setEditMode } />
        </div>
    )
};

export default UpdateContainer;