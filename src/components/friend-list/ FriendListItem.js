import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../images/default.jpeg";

const FriendListItem = ({ name, isOnline, avatar }) => (
  <>
    <span>{isOnline}</span>
    <img src={avatar} alt="foto" width="48" />
    <p>{name}</p>
  </>
);

FriendListItem.defaultProps = {
  avatar: defaultImg,
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
