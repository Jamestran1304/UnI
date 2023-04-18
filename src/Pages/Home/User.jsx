import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/GlobalState";

import { FaTrash, FaEdit, FaInfoCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./User.css";
import { Button } from "reactstrap";
import axios from "axios";
function User() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://unibackend.azurewebsites.net/api/user")
      .then((getData) => {
        setData(getData.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const deleteItem = (id) => {
    axios
      .delete(`https://unibackend.azurewebsites.net/api/user/${id}`)
      .then(() => {
        getData();
      });
  };
  const { submission } = useContext(GlobalContext);
  console.log(submission);
  return (
    <div className="">
      <h1>User page</h1>
      <div className="user">
        <div className="btn">
          <Button>
            <NavLink to="/addUser">new add</NavLink>
          </Button>
        </div>
        {data && data.length ? "" : "No Item..."}
        {data.map((data) => (
          <div className="icons">
            <strong key={data.id}>{data.fullName}</strong>
            <div className="icon-cate">
              <Link to={`/viewUser/${data.id}`}>
                <span title="view">
                  <Button>
                    <FaInfoCircle />
                  </Button>
                </span>
              </Link>
              <Link>
                <span title="edit">
                  <Button>
                    <FaEdit />
                  </Button>
                </span>
              </Link>
              <span title="delete">
                <Button onClick={() => deleteItem(data.id)}>
                  <FaTrash />
                </Button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
