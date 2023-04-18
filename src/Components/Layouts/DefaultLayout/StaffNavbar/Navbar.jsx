import React from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="">
            <div className="topnav">
                <NavLink to={"/HomePageStaff1"}>Home</NavLink>
                <NavLink to={"/StaffSubmission1"}>Staff Submission</NavLink>
                <div className="edit-acc">
                    <p>Xin chào</p><a href="AccountStaff1">Nguyễn Văn A</a>
                    <Link to={"/login"}>Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar