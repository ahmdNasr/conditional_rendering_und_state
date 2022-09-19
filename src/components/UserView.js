import React from "react";

const UserView = ({ user }) => {
  return (
    <div className={user.alter >= 18 ? "user-view-adult" : "user-view-child"}>
      <h1>
        {user.name} {user.status !== "private" && "(" + user.alter + ")"}
      </h1>
      {user.status !== "private" && <p>{user.email}</p>}
    </div>
  );
};

export default UserView;
