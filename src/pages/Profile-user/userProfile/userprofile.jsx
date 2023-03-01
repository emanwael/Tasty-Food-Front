import React from "react";
// import axios from 'axios'
import "./userprofile.css";

export default function Userprofile() {
  //  const baseUrl='https://localhost:5100/restaurants' ;
  //  axios.get(baseUrl).then((response)=>{
  //   console.log(response.data)
  //  }).catch((error)=>{
  //   console.log(error)
  //  })

  return (
    <>
      <div className="container container-fluid userProfile">
        <h3 className="profile "> My Profile</h3>
        <div className="row justify-content-around mt-5 user-info">
          <div className="avatar avatar-profile ">
            <img
              className="rounded-circle img-fluid"
              src="../images/ava-2.jpg"
              alt=""
            />
          </div>
          <div className=" data">
            <div>
              <h4>
                {" "}
                <span>User</span> Name
              </h4>
              <p>lorem</p>
            </div>

            <div>
              <h4>
                {" "}
                <span>Email</span> Address{" "}
              </h4>
              <p>lorem@gmail.com</p>
            </div>
          </div>
          <div className="btn">
            <button>Edit Profile</button>
          </div>
        </div>
      </div>
    </>
  );
}
