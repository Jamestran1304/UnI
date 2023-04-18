import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
} from 'reactstrap';
import './AddRole.scss';
import { GlobalContext } from '../../Context/GlobalState';
import { v4 as uuid } from 'uuid'
import axios from 'axios';
function AddSubmission() {
    const [roleName, setRoleName] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setRoleName(localStorage.getItem('roleName'))
    }, [])
    const sendDatatoApi = () => {

        axios.post(`https://unibackend.azurewebsites.net/api/role`, {
            roleName
        })
        // addSubmission(newSubmission);
        navigate("/role");
    };
    return (
        <Form>
            <FormGroup>
                <div className='name'>
                    <Label>name</Label>
                    <Input type='text' placeholder='Enter Name Staff'
                        size="50"
                        maxLength="50" value={roleName} onChange={(e) => setRoleName(e.target.value)}></Input>
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