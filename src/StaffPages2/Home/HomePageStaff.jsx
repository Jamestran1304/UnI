import React from "react";
import "./HomePageStaff.css";
import { Link, NavLink } from "react-router-dom";

const HomePageStaff = () => {
    const homepagestaffitem = [
        {
            name: 'Nguyễn Văn B',
            age: '22 tuổi',
            phone: '09012345678',
            createdate: 'Ngày gia nhập: 2/4/2023',
        }

    ]
    return (
        <div className="">
            <div className="">
                <div className="topnav">
                    <NavLink to={"/HomePageStaff"}>Home</NavLink>
                    <NavLink to={"/StaffSubmissionPage"}>Staff Submission</NavLink>
                    <div className="edit-acc">
                        <p>Xin chào</p><a href="AccountInfo">Nguyễn Văn B</a>
                        <Link to={"/login"}>Logout</Link>
                    </div>
                </div>
                {
                    homepagestaffitem.map((homepagestaffitem, index) => (
                        <div className="info-table">
                            <h3>{homepagestaffitem.name}</h3>
                            <p><strong>{homepagestaffitem.age}</strong></p>
                            <p><strong>{homepagestaffitem.phone}</strong></p>
                            <span>{homepagestaffitem.createdate}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePageStaff