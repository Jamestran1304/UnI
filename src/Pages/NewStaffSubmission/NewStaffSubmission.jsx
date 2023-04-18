import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewStaffSubmission = () => {
    return (
        <div className="">
            <div className="header">
                <h1>Add Idea</h1>
            </div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="ListStaffSubmission">
                    List of Ideads
                </Breadcrumb.Item>
                <Breadcrumb.Item >Add Idea</Breadcrumb.Item>
            </Breadcrumb>
            <div className="input-addidea">
                <h2>Title</h2>
                <Form.Control type='text' placeholder="Input title" size='lg' />
                <h2>Brief</h2>
                <Form.Control type='text' placeholder="Input brief" size='lg' />
                <h2>Content</h2>
                <Form.Control size='lg' type="text" placeholder="Input content" />
                <h2>File</h2>
                <Form.Control type='file' />
                <Form>
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                type={type}
                                id={`Choose-${type}`}
                                label={`Choose ${type}`}
                            />
                        </div>
                    ))}
                </Form>
                <h2>Category</h2>
                <Form.Select aria-label="Default select example" size="lg">
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <button className="btn-createidea" type="submit">Create</button>
            </div>
        </div>
    );
};

export default NewStaffSubmission