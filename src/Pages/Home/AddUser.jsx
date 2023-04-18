import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
    Dropdown,
} from 'reactstrap';
import './AddUser.scss';
import { GlobalContext } from '../../Context/GlobalState';
import { v4 as uuid } from 'uuid'
import axios from 'axios';
import '../Departments/Department'
import Department from '../Departments/Department';
function AddUser() {
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState([]);
    const [role, setRole] = useState('');

    const navigate = useNavigate();
    const optionData = () => {
        axios.get('https://unibackend.azurewebsites.net/api/department')
            .then((res) => {
                setDepartment(res.data)
            })
            .catch(error => {
                // handle error here, such as logging or displaying an error message to the user
                console.error(error);
            });
    }
    useEffect(() => {
        optionData();
    }, [])
    const onSubmit = () => {
        axios.post('https://unibackend.azurewebsites.net/api/user', {
            fullName,
            password,
            department,
            role
        })
        // addSubmission(newSubmission);
        navigate("/");
    };

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <div className='name'>
                    <Label>name</Label>
                    <Input type='text' placeholder='Enter Name Staff'
                        size="50"
                        maxLength="50" value={fullName} onChange={(e) => setFullName(e.target.value)}></Input>
                </div>
                <div className='name'>
                    <Label>password</Label>
                    <Input type='password' placeholder='Enter password'
                        size="50"
                        maxLength="50" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                </div>

                <select className="exampleSelect">
                    <option>Department</option>
                    {department.map((department) => {
                        <option value={department.departmentName}>
                            {department.departmentName}
                        </option>
                    })}
                </select>
            </FormGroup>

            <div className='btn'>
                <Button type='submit'>Submiss</Button>
                <Button><Link to="/">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddUser;