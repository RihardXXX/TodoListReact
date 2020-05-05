import React from "react";
import './item-status-filter.css'

const ItemStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">all</button>
            <button type="button" className="btn btn-outline-secondary">active</button>
            <button type="button" className="btn btn-outline-secondary">done</button>
        </div>
    );
};

export default ItemStatusFilter;