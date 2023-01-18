import React from "react";
import "./user.css";

const User = () => {
  return (
    <>
      <div className="user">
        <h3>Update Your Account</h3>
        <p className="details">
          Deleting your account cannot be undone. John you should confirm your
          account
        </p>
        <button className="btn">Delete Account</button>

        <div className="user-left">
          <div className="image-container">
            <img src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </div>

          <p style={{ marginLeft: "10px" }}>Change Profile</p>
        </div>

        <div className="form">
          <form>
            <div className="input_container">
              <label>Username</label>
              <br />
              <input type="text" placeholder="John" />
            </div>

            <div className="input_container">
              <label>Email</label>
              <br />
              <input type="email" placeholder="Email" />
            </div>

            <div className="input_container">
              <label>Password</label>
              <br />
              <input type="password" />
            </div>

            <button>Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default User;
