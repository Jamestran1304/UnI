import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
} from 'reactstrap';
import './AddCategory.scss';
import { GlobalContext } from '../../Context/GlobalState';
import { v4 as uuid } from 'uuid'
import axios from 'axios';
function AddCategory() {
    const [name, setName] = useState('');
    const { addCategory } = useContext(GlobalContext);
    const navigate = useNavigate();

    const onSubmit = () => {
        axios.post('https://unibackend.azurewebsites.net/api/category', {
            name
        })
        // addSubmission(newSubmission);
        navigate("/category");
    };
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <div className='name'>
                    <Label>name category</Label>
                    <Input type='text' placeholder='Enter Name Department'
                        size="50"
                        maxLength="50" value={name} onChange={(e) => setName(e.target.value)}></Input>
                </div>
            </FormGroup>
            <div className='btn'>
                <Button type='submit'>Submiss</Button>
                <Button><Link to="/category">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddCategory;