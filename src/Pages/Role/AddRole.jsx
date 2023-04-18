import React, { useContext, useState } from 'react';
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


    const [id, setId] = useState('');
    const [roleName, setRoleName] = useState('');

    const navigate = useNavigate();

    const onSubmit = () => {

        axios.post('https://unibackend.azurewebsites.net/api/role', {
            roleName,
            id,
        })
        // addSubmission(newSubmission);
        navigate("/role");
    };
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <div className='name'>
                    <Label>id</Label>
                    <Input type='text' placeholder='Enter Id Role'
                        size="50"
                        maxLength="50" value={id} onChange={(e) => setId(e.target.value)}></Input>
                </div>
                <div className='name'>
                    <Label>name</Label>
                    <Input type='text' placeholder='Enter Name Role'
                        size="50"
                        maxLength="50" value={roleName} onChange={(e) => setRoleName(e.target.value)}></Input>
                </div>
            </FormGroup>
            <div className='btn'>
                <Button type='submit'>Submiss</Button>
                <Button><Link to="/role">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddSubmission;