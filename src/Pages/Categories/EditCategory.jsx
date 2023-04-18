import React, { useState, useContext, useEffect } from 'react';
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
import axios from 'axios';
function AddSubmission(props) {
    const [categoryName, setCategoryname] = useState('');
    const navigate = useNavigate();
    const sendDatatoApi = () => {

        axios.post(`https://unibackend.azurewebsites.net/api/category`, {
            categoryName
        })
        // addSubmission(newSubmission);
        navigate("/category");
    };
    useEffect(() => {
        setCategoryname(localStorage.getItem('categoryName'))

        console.log(setCategoryname)
    }, [])
    return (
        <Form >
            <FormGroup>
                <div className='name'>
                    <Label>name</Label>
                    <Input type='text' placeholder='Enter Name Staff'
                        size="50"
                        maxLength="50" value={categoryName} onChange={(e) => setCategoryname(e.target.value)}></Input>
                </div>
            </FormGroup>
            <div className='btn'>
                <Button type='submit' onClick={sendDatatoApi}>Submiss</Button>
                <Button><Link to="/category">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddSubmission;