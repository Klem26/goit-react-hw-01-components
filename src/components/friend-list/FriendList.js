import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./ FriendListItem";
import defaultImg from "../../images/default.jpeg";

import styles from "./Friends.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ name, isOnline, avatar, id }) => {
        return (
          <li key={id} className={styles.item}>
            <FriendListItem name={name} isOnline={isOnline} avatar={avatar} />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.defaultProps = {
  avatar: defaultImg,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
