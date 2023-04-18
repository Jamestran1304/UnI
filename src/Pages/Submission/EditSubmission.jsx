import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dispatch } from 'react';
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
} from 'reactstrap';
import './Addsubmission.scss';
import { GlobalContext } from '../../Context/GlobalState';
import axios from 'axios';

const AddSubmission = () => {
    const [topicName, setTopicName] = useState('');
    const [closureDate, setClosureDate] = useState('');
    const [finalClosureDate, setFinalClosureDate] = useState('');
    // const { addSubmission } = useContext(GlobalContext);
    const navigate = useNavigate();
    const sendDatatoApi = () => {

        axios.post(`https://unibackend.azurewebsites.net/api/topic`, {
            topicName,
            closureDate,
            finalClosureDate
        })
        // addSubmission(newSubmission);
        navigate("/submission");
    };
    useEffect(() => {
        setTopicName(localStorage.getItem('topicName'))
        setTopicName(localStorage.getItem('closureDate'))
        setFinalClosureDate(localStorage.getItem('finalClosureDate'))
        console.log(setTopicName, setTopicName, setFinalClosureDate)
    }, [])
    return (
        <React.Fragment>
            <Form>
                <FormGroup>
                    <div className='name'>
                        <Label>name</Label>
                        <Input type='text' placeholder='Enter Name Staff'
                            size="50"
                            maxLength="50"
                            value={topicName}
                            onChange={(e) => setTopicName(e.target.value)}></Input>
                    </div>
                    <div className='deadline_1'>
                        <Label>deadline_1</Label>
                        <Input type='date' placeholder='Enter Name Staff'
                            value={closureDate}
                            onChange={(e) => setClosureDate(e.target.value)}></Input>
                    </div>
                    <div className='deadline_2'>
                        <Label>deadline_2</Label>
                        <Input type='date' placeholder='Enter Name Staff'
                            value={finalClosureDate}
                            onChange={(e) => setFinalClosureDate(e.target.value)}></Input>
                    </div>
                </FormGroup>
                <div className='btn'>
                    <Button type='submit' onClick={sendDatatoApi}>Submiss</Button>
                    <Button><Link to="/submission">cancel</Link></Button>
                </div>
            </Form>
        </React.Fragment>
    );
}

export default AddSubmission;