import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const ListStaffSubmission = () => {
    const liststaffsubmissionitem = [
        {
            Title: "abc",
            Brief: "def",
            Views: "0",
            Like: "0",
            Dislike: "0"
        },
        {
            Title: "Visit",
            Brief: "Company",
            Views: "0",
            Like: "0",
            Dislike: "0"
        },
        {
            Title: "Book",
            Brief: "Travel",
            Views: "0",
            Like: "0",
            Dislike: "0"
        }
    ]

    return (
        <div className=''>
            <div className='header'>
                <h1>List of Ideas</h1>
            </div>
            <div className="info">
                <div className="info-name">
                    <p>Name: { }</p>
                </div>
                <div className="info-deadline1">
                    <p>Deadline 1: { }</p>
                </div>
                <div className="info-deadline2">
                    <p>Deadline 2: { }</p>
                </div>
            </div>
            <div className="wrapper">
                <Table striped>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Brief</th>
                            <th>Views</th>
                            <th>Like</th>
                            <th>Dislike</th>
                            <th></th>
                        </tr>
                    </thead>

                    {
                        liststaffsubmissionitem.map((liststaffsubmissionitem, index) => (
                            <tbody>
                                <tr>
                                    <td>{liststaffsubmissionitem.Title}</td>
                                    <td>{liststaffsubmissionitem.Brief}</td>
                                    <td>{liststaffsubmissionitem.Views}</td>
                                    <td>{liststaffsubmissionitem.Like}</td>
                                    <td>{liststaffsubmissionitem.Dislike}</td>
                                    <td>
                                        <Button className='btn-details' href='DetailsStaffSubmission' size='lg' variant='light'>Details</Button>
                                        <Button className='btn-like' size='lg'>Like</Button>
                                        <Button className='btn-dislike' size='lg' >Dislike</Button>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </Table>
            </div>

            <Button className='add-idea' href='NewStaffSubmission' variant='success' size='lg'>Add Idea</Button>
            <Button className='back-to-list' href='StaffSubmission' variant='light' size='lg'>Back to List</Button>
        </div>
    );
};

export default ListStaffSubmission;