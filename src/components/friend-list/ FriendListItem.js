import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../images/default.jpeg";

import styles from "./Friends.module.css";

const FriendListItem = ({ name, isOnline, avatar }) => (
  <>
    <span
      className={styles.status}
      style={{ backgroundColor: isOnline ? "green" : "red" }}
    ></span>
    <img src={avatar} alt="foto" width="48" className={styles.avatar} />
    <p className={styles.name}>{name}</p>
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
