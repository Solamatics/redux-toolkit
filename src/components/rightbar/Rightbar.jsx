import React from "react";
import "./rightbar.css";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const Rightbar = () => {
  return (
    <div className="right__bar">
      <div className="rightbar__wrapper">
        <div>
          <h2>Reccomended for John</h2>
          <div className="img_wrapper">
            <img
              src="https://images.pexels.com/photos/5797991/pexels-photo-5797991.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="image-1"
            />
          </div>
        </div>

        
      </div>

      <div className="rightbar__wrapper">
        <div>
          <h2>Popular on Lama App</h2>
          <div className="img_wrapper">
            <img
              src="https://images.pexels.com/photos/5191390/pexels-photo-5191390.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="image-1"
            />
          </div>
        </div>
      </div>

      <div className="rightbar__wrapper">
        <div>
          <h2>Editor's Choice</h2>
          <div className="img_wrapper">
            <img
              src="https://images.pexels.com/photos/2733659/pexels-photo-2733659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="image-1"
            />
          </div>
        </div>
      </div>

    <div className="btn__wrapper">
    <div className="btn">
        <p>See More <span><ArrowDropDownOutlinedIcon /></span></p>
      </div>
    </div>
      
    </div>
  );
};

export default Rightbar;
