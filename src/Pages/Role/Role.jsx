import React, { useState, useContext, useEffect } from 'react';
import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa'
import './Role.css'
import { NavLink } from 'react-router-dom';
import { Button, } from 'reactstrap';
import { GlobalContext } from '../../Context/GlobalState';
import axios from 'axios';
function Role() {
    const [role, setrole] = useState([])
    const [id, setId] = useState('')
    const getData = () => {

        axios.get('https://unibackend.azurewebsites.net/api/role')
            .then((getData) => {
                setrole(getData.data)
            })
    }
    useEffect(() => {
        getData();
    }, [])
    const setToLocalStorage = (id, roleName) => {
        localStorage.setItem('id', id)
        localStorage.setItem('roleName', roleName)


    }
    // const setId = (id) => {
    //     console.log(id)
    // }
    const deleteItem = () => {
        axios.delete(`https://unibackend.azurewebsites.net/api/role/${id}`)
            .then(() => {
                getData();
            })
    }
    const { submission } = useContext(GlobalContext);
    console.log(submission)

    return (
        <div className=''>

            <h1>Role page</h1>

            <div className='role'>

                <div className='btn'>
                    <Button>
                        <NavLink to='/addRole'>
                            new add
                        </NavLink>
                    </Button>
                </div>

                {role && role.length ? '' : 'No Item...'}
                {role.map((role) => (
                    <div className='icons' key={role.id}>
                        <div className='id'> {role.id}</div>
                        <div className='name'>{role.roleName}</div>
                        <div className='icon-cate'>
                            <NavLink to={`/editRole/${role.id}`} onChange={() => setToLocalStorage(role.id, role.roleName)}><span title="edit"><Button><FaEdit /></Button></span></NavLink>
                            <span title="delete" ><Button onClick={() => deleteItem(role.id)}><FaTrash /></Button></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Role;