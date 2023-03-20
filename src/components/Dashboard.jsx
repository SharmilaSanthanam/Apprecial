import React from 'react'

const Dashboard = (props) => {
  window.localStorage.setItem("loggedIn", true);
  // window.sessionStorage.setItem("loggedIn", true);
  // window.localStorage.setItem("userdata", props.user.uid);

  // const logOut = (event) => {
  //   window.localStorage.clear();
  //   window.location.href = "/";
  // }
  // window.addEventListener("storage", logOut);

   return (
    <div>
      <h1>Dashboard</h1>
      <div>User Email : {props.user.email}</div>
      <div>User UID : {props.user.uid}</div>
      {/* <div className='rounded-md border-2 border-red-700 w-16'>
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
          </div> */}
     
    </div>
  )
}

export default Dashboard