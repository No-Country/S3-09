import React from "react";

const IconSocial = ({ icon, text, onClick }) => {
    return (
        <div className="boxSocialIcon" onClick={onClick}>
            {icon}
            {text}
        </div>
    );
};

export default IconSocial;
