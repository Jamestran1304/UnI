import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa'
import './Department.css'
import { NavLink } from 'react-router-dom';
import { Button, } from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Department() {
    const [name, setName] = useState([])
    const [id, setId] = useState('')
    const getData = () => {

        axios.get('https://unibackend.azurewebsites.net/api/department')
            .then((getData) => {
                setName(getData.data)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    const setToLocalStorage = (id, departmentName) => {
        localStorage.setItem('id', id)
        localStorage.setItem('departmentName', departmentName)


    }
    const deleteItem = () => {
        axios.delete(`https://unibackend.azurewebsites.net/api/department/${id}`)
            .then(() => {
                getData();
            })
    }
    // const setId = (id) => {
    //     console.log(id)
    // }
    return (

        <div className=''>

            <h1>Department page</h1>

            <div className='department'>

                <div className='btn'>
                    <Button>
                        <NavLink to='/addDepartment'>
                            new add
                        </NavLink>
                    </Button>
                </div>
                {name && name.length ? '' : 'No Item...'}
                {name.map((department) => (
                    <div className='icons' >
                        <strong key={department.id}>{department.departmentName}</strong>
                        <div className='icon-cate'>
                            <NavLink to={`/editDepartment/${department.id}`} onChange={() => setToLocalStorage(department.id, department.departmentName)}><span title="edit"><Button><FaEdit /></Button></span></NavLink>
                            <Button><span title="delete" onClick={() => deleteItem(department.id)}><FaTrash /></span></Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Department;