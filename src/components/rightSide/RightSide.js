import React, { useState } from "react";
import "./rightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../trendCard/TrendCard";
import ShareModal from "../shareModal/ShareModal";
import { Link } from "react-router-dom";
function RightSide() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="rightSide">
        <div className="navIcons">
          <Link to="../home">
            {" "}
            <img src={Home} alt="home icon" />
          </Link>

          <UilSetting />
          <img src={Noti} alt="notification" />
          <img src={Comment} alt="comment" />
        </div>

        <TrendCard />

        <button className="button r-button" onClick={() => setModalOpen(true)}>
          Share
        </button>
        <ShareModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </>
  );
}

export default RightSide;
