import React from "react";

const Dashboard = (props) => {
  window.localStorage.setItem("loggedIn", true);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>User Email : {props.user.email}</div>
      <div>User UID : {props.user.uid}</div>
    </div>
  );
};

export default Dashboard;
