import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//import { fetchUsers } from "../actions/userActions";
import { useParams } from "react-router-dom";

function ViewDetails() {
  const [data, setData] = useState({});
  const params = useParams();
  //const confirms = params.id;
  console.log(params.id);
  //const dispatch = useDispatch();

  const result = useSelector((state) => state.users.usersList);

  console.log(result);

  const matchAPI = () => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].id === parseInt(params.id)) {
        setData(result[i]);
      }
    }
  };

  useEffect(() => {
    matchAPI();
  }, []);

  console.log(data);

  return (
    <div>
      <p>
        <b>Name:</b> {data.name}
      </p>
      <p>
        <b>Username:</b> {data.username}
      </p>
      <p>
        <b>Email:</b> {data.email}
      </p>
      <p>
        <b>Phone:</b> {data.phone}
      </p>
      <p>
        <b>Address:</b> {data.address.street}, {data.address.city}
      </p>
    </div>
  );
}
export default ViewDetails;
