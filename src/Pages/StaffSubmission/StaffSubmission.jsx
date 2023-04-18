import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./StaffSubmission.css"

const StaffSubmission = () => {
    const staffsubmissionitem = [
        {
            number: "1",
            name: "Nguyễn Văn Trung",
            deadline_1: "3/10/2023 11:50:00 AM",
            deadline_2: "3/10/2023 6:00:00 PM"
        },
        {
            number: "2",
            name: "Trần Thị Hồng",
            deadline_1: "3/11/2023 12:30:00 AM",
            deadline_2: "3/11/2023 5:30:00 PM"
        },
        {
            number: "3",
            name: "Trần Văn Hoàng",
            deadline_1: "3/12/2023 9:45:00 AM",
            deadline_2: "3/12/2023 5:00:00 PM"
        },
    ]

    return (
        <div className=''>
            <div className='staffsubmission'>
                <div className='header'>
                    <h1>Staff Submission</h1>
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Deadline_1</th>
                            <th>Deadline_2</th>
                            <th></th>
                        </tr>
                    </thead>

                    {
                        staffsubmissionitem.map((staffsubmissionitem, index) => (
                            <tbody>
                                <tr>
                                    <td>{staffsubmissionitem.number}</td>
                                    <td>{staffsubmissionitem.name}</td>
                                    <td>{staffsubmissionitem.deadline_1}</td>
                                    <td>{staffsubmissionitem.deadline_2}</td>
                                    <td>
                                        <Button className='btn-button' href="ListStaffSubmission" size="lg" variant="light">View Ideas</Button>
                                        <Button className='btn-button' type="button" value="submit" variant="light" size='lg'>Export ZIP</Button>
                                        <Button className='btn-button' type="button" value="submit" variant="light" size='lg'>Expot Excel</Button>
                                    </td>
                                </tr>

                            </tbody>
                        ))
                    }

                </Table>
            </div>
        </div>
    );
};

export default StaffSubmission;