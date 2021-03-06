import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../actions/userActions";
import { NavLink } from "react-router-dom";
//import './index.css';

const UserData = () => {
  const dispatch = useDispatch();

  const result = useSelector((state) => state.users.usersList);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {loading ? (
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        result.map((elem) => (
          <>
            <div class="card mb-2">
              <div class="row">
                <div class="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1656931251449-07493b9f6caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" key={elem}>
                      {elem.name}
                    </h5>
                    <NavLink to={`/viewdetails/${elem.id}`}>
                      <button>
                        Click here
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))
      )}
    </div>
  );
};

export default UserData;
