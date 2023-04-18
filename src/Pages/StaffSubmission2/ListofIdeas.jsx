import React from "react";
import { NavLink } from "react-router-dom";

const ListofIdeas = () => {
    return (
        <div>
            <NavLink to='/staffsubmission'>Call back</NavLink>
            <h1>List of Ideas</h1>
            <div>
                <div className="name">
                    <div className="Titile_name">{this.props.name}</div>
                </div>
            </div>
        </div>
    );
};

export default ListofIdeas;