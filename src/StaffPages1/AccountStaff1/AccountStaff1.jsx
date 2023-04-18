import React, { useState } from "react";
import "./AccountStaff1.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const AccountStaff1 = () => {
    const shoot = () => {
        alert("Verification email sent. Please check your email.");
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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

            <div className="accordion">
                <Accordion>
                    <h1>Account Edit</h1>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h2>Profile</h2></Accordion.Header>
                        <Accordion.Body>

                            <div className="form-profile">
                                <form action="">
                                    <h1>Profile</h1>
                                    <label className="form-email" htmlFor="email">Email: </label>
                                    <input className="input-email-profile" htmlFor="email" type="text" Value={"Staff1@gmail.com"} />
                                    <br />
                                    <label htmlFor="phone">Phone number: </label>
                                    <input className="input-phone-profile" id="phone" name="phone" type="tel" placeholder="phone number..." />
                                    <br />
                                    <button className="btn-profile" type="submit">Save</button>
                                </form>
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h2>Email</h2></Accordion.Header>
                        <Accordion.Body>

                            <div className="email-form">
                                <h1>Change Email</h1>
                                <form action="">
                                    <label htmlFor="email-staff" className="emailstaff">Email:</label>
                                    <input type="email" name="email-staff" id="email-staff"
                                        className="input-email-form" defaultValue={"Staff1@gmail.com"} /> <br />
                                    <button className="btn-alert" onClick={shoot}>Send verification email</button>
                                </form>
                                <form action="">
                                    <label htmlFor="new-email" className="newemail">New email:</label>
                                    <input type="email" name="new-email" id="new-email" className="input-new-email" placeholder="abc123@gmail.com" />
                                </form>
                                <button className="btn-changeemail" type="submit" onClick={handleShow}>Change email</button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header>
                                        <Modal.Title>Save</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Are you agree to save changes?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" size="lg" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" type="submit" size="lg" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h2>Change Password</h2></Accordion.Header>
                        <Accordion.Body>
                            <div className="form-changepassword">
                                <h1>Change Password</h1>
                                <form action="">
                                    <label htmlFor="currentpassword">Current password</label> <br />
                                    <input type="password" name="currentpassword" id="currentpassword" className="input-currentpassword" /> <br />
                                    <label htmlFor="newpassword">New password</label> <br />
                                    <input type="password" name="newpassword" id="newpassword" className="input-newpassword" /> <br />
                                    <label htmlFor="">Confirm new password</label><br />
                                    <input type="password" name="newpassword" id="newpassword" className="input-confirm" /> <br />
                                </form>
                                <button className="btn-changepassword" type="submit">Change Password</button>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><h2>Two-Factor authentication</h2></Accordion.Header>
                        <Accordion.Body>
                            <h1>Two-factor authentication (2FA)</h1>
                            <h2>Authenticator app</h2>
                            <div className="setup-reset-authen">
                                <form action="">
                                    <button className="btn-setupauthen">
                                        <Link className="setuplink" to={"/EnableAuthenticator"}>Set up authenticator app</Link>
                                    </button>
                                    <button className="btn-resetauthen">
                                        <Link className="resetlink" to={"/ResetAuthenticator"}>Resut authenticator app</Link>
                                    </button>
                                </form>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><h2>Personal data</h2></Accordion.Header>
                        <Accordion.Body>
                            <div className="body-main">
                                <h1>Personal Data</h1>
                                <p>Your account contains personal data that you have given us. This page allows you to download or delete that data.</p>
                                <p><strong>Deleting this data will permanently remove your account, and this cannot be recovered.</strong></p>
                                <form action="" className="confirm-data">
                                    <button className="btn-downloaddata">Down load</button>
                                    <button className="btn-deletedata">
                                        <Link className="link-deletedata" to={"/DeletePersonalData"}>
                                            Delete
                                        </Link>
                                    </button>
                                </form>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default AccountStaff1