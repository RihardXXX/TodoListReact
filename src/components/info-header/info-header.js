import React from "react";
import './info-header.css'

const InfoHeader = () => {
    return (
        <div className="info-header">
            <span className="badge badge-danger badge-pill">1 more</span>
            <span className="badge badge-primary badge-pill">3 done</span>
        </div>
    );
};

export default InfoHeader;