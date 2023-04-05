import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";
import './Friends.css'

const Friends = () => {
  const friends = useLoaderData();
  return (
    <div>
      <h2>This is friends ral page </h2>

      <div className="friends-container">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
