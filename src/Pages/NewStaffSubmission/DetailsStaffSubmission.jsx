import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailsStaffSubmission = () => {
    return (
        <div className="">
            <div className="header">
                <h1>Details</h1>
            </div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="ListStaffSubmission">
                    List of Ideads
                </Breadcrumb.Item>
                <Breadcrumb.Item >Details</Breadcrumb.Item>
            </Breadcrumb>
            <div className="info-idea">
                <h2><strong>Title</strong>: </h2>
                <h2><strong>Brief</strong>: </h2>
                <h2><strong>Content</strong>: </h2>
                <h2><strong>File path</strong>: </h2>
                <h2><strong>View</strong>: </h2>
                <h2><strong>Submission</strong>: </h2>
                <h2><strong>Category</strong>: </h2>
            </div>
            <hr />
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>
            <button className="submit-comment" type="submit">Gửi</button>
            <hr />
        </div>
    );
};

export default DetailsStaffSubmission