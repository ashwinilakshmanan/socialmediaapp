import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profile2.jpg";
import "./profileCard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProfileCard({location}) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state)=>state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div className="profileCard">
        {/* profile image and cover img */}
        <div className="profileImage">
          <img
          className="coverimg"
            src={
              user.coverPicture
                ? serverPublic + user.coverPicture
                : serverPublic + "defaultCover.jpg"
            }
            alt=""
          />
          <img
            src={
              user.profilePicture
                ? serverPublic + user.profilePicture
                : serverPublic + "defaultProfile.png"
            }
            alt=""
          />
        </div>

        {/* profile name */}
        <div className="profileName">
          <span>
            {user.firstname} {user.lastname}
          </span>
          <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
        </div>

        {/* followers and following */}
        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>{user.followers.length}</span>
              <span>Followers</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>{user.following.length}</span>
              <span>Following</span>
            </div>

            {location === 'profilePage' && (
              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>{posts.filter((post)=>post.userId === user._id).length}</span>
                  <span>Posts</span>
                </div>
              </>
            )}
          </div>
          <hr />
        </div>

        {location === 'profilePage' ? (
          ""
        ) : (
          
           
            <span><Link style={{textDecoration: "none", color:"inherit"}} to={`/profile/${user._id}`}>MyProfile </Link></span>
         
        )}
      </div>
    </>
  );
}

export default ProfileCard;
