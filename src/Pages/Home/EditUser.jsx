import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
} from 'reactstrap';
import './AddUser.scss';
import { GlobalContext } from '../../Context/GlobalState';

function AddSubmission(props) {
    const [selectedName, setSelectedName] = useState({
        id: '',
        name: '',
        deadline_1: '',
        deadline_2: ''
    });

    useEffect(() => {
        const submissionsId = currentSubmissionId;
        const selectedName = submission.find(submissions => submissions.id === Number(submissionsId))
        setSelectedName(selectedName)
    }, [currentSubmissionId, submission])
    const { submission, editSubmission } = useContext(GlobalContext);
    const currentSubmissionId = props.match.params.id;
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/submission");
    };
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <div className='name'>
                    <Label>name</Label>
                    <Input type='text' placeholder='Enter Name Staff'
                        size="50"
                        maxLength="50" value={selectedName.name} onChange={(e) => setSelectedName(e.target.value)}></Input>
                </div>
                <div className='deadline_1'>
                    <Label>deadline_1</Label>
                    <Input type='date' placeholder='Enter Name Staff' value={selectedName.deadline_1} onChange={(e) => setSelectedName(e.target.value)}></Input>
                </div>
                <div className='deadline_2'>
                    <Label>deadline_2</Label>
                    <Input type='date' placeholder='Enter Name Staff' value={selectedName.deadline_2} onChange={(e) => setSelectedName(e.target.value)}></Input>
                </div>
            </FormGroup>
            <div className='btn'>
                <Button type='submit'>Submiss</Button>
                <Button><Link to="/submission">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddSubmission;