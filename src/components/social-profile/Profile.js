import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../images/default.jpeg";

const Profile = ({
  avatar,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="Аватар пользователя"></img>
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
