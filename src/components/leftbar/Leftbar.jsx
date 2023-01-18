import React from "react";
import "./leftbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import VideoSettingsOutlinedIcon from "@mui/icons-material/VideoSettingsOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import HearingOutlinedIcon from "@mui/icons-material/HearingOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useSelector } from "react-redux";

const Leftbar = () => {
  const name = useSelector((state) => state.user.name);

  const lists = [
    {
      title: "Homepage",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "Lists",
      icon: <FormatListBulletedOutlinedIcon />,
    },
    {
      title: "Products",
      icon: <CategoryOutlinedIcon />,
    },
    {
      title: "Groups",
      icon: <Groups2OutlinedIcon />,
    },
    {
      title: "Pages",
      icon: <LayersOutlinedIcon />,
    },
    {
      title: "Photos",
      icon: <PhotoSizeSelectActualOutlinedIcon />,
    },
    {
      title: "Videos",
      icon: <VideoSettingsOutlinedIcon />,
    },
    {
      title: "Schedule",
      icon: <ScheduleOutlinedIcon />,
    },
    {
      title: "Wishlist",
      icon: <HearingOutlinedIcon />,
    },
    {
      title: "Settings",
      icon: <SettingsOutlinedIcon />,
    },
    {
      title: `Log out`,
      icon: <ExitToAppOutlinedIcon />,
    },
  ];

  return (
    <div className="left__bar">
      <ul>
        {lists.map((list, index) => (
          <li key={index} className="list">
            <span>{list.icon}</span>
            <p>
              {list.title === "Log out"
                ? `${list.title} (${name})`
                : list.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leftbar;
