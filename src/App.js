import React from "react";
import Profile from "./components/social-profile/Profile";
import user from "./components/social-profile/user";

import Statistics from "./components/statistics/Statistics";
import statisticalData from "./components/statistics/statistical-data.json";

import FriendList from "./components/friend-list/FriendList";
import friends from "./components/friend-list/friends.json";

import TransactionHistory from "./components/transaction-history/TransactionHistory";
import transactions from "./components/transaction-history/transactions.json";

const App = () => {
  return (
    <div>
      <h1>Привет Мир</h1>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;
