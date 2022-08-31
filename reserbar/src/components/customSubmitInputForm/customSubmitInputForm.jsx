import React from "react";

const CustomSubmitInputForm = ({ text }) => {
    return (
        <button className="submitButton" type="submit">
            {text}
        </button>
    );
};

export default CustomSubmitInputForm;
