import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
} from 'reactstrap';
import './AddDepartment.scss';
import { GlobalContext } from '../../Context/GlobalState';
import axios from 'axios';
function AddSubmission(props) {
    const [departmentName, setDepartmentName] = useState('');
    const navigate = useNavigate();
    const sendDatatoApi = () => {

        axios.post(`https://unibackend.azurewebsites.net/api/department`, {
            departmentName
        })
        // addSubmission(newSubmission);
        navigate("/department");
    };
    useEffect(() => {
        setDepartmentName(localStorage.getItem('departmentName'))

        console.log(setDepartmentName)
    }, [])
    return (
        <Form>
            <FormGroup>
                <div className='name'>
                    <Label>name</Label>
                    <Input type='text' placeholder='Enter Name Staff'
                        size="50"
                        maxLength="50" value={departmentName} onChange={(e) => setDepartmentName(e.target.value)}></Input>
                </div>
            </FormGroup>
            <div className='btn'>
                <Button type='submit' onClick={sendDatatoApi}>Submiss</Button>
                <Button><Link to="/submission">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddSubmission;