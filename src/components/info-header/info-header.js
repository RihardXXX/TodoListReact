import React from "react";
import './info-header.css'

const InfoHeader = ({ more, done }) => {
    return (
        <div className="info-header">
            <span className="badge badge-danger badge-pill">{`more: ${more}`}</span>
            <span className="badge badge-primary badge-pill">{`done: ${done}`}</span>
        </div>
    );
};

export default InfoHeader;