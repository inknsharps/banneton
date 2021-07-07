import React from "react";
import UpdateForm from "../UpdateForm/UpdateForm";

const UpdateContainer = ({ title, method, ingredients, tags, _id, setEditMode }) => {
    return (
        <div className="UpdateContainer mt-4">
            <h3 className="text-left italic border-b-2 border-gray-200">Updating Post:</h3>
            <UpdateForm _id={ _id } title={ title } ingredients={ ingredients } method={ method } tags={ tags } setEditMode={ setEditMode } />
        </div>
    )
};

export default UpdateContainer;