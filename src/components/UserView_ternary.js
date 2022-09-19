import React from "react";

const UserView = ({ user }) => {
  return (
    <div className={user.alter >= 18 ? "user-view-adult" : "user-view-child"}>
      {user.status === "private" ? (
        <h1>{user.name}</h1>
      ) : (
        <>
          {/* <></> ist die React.Fragment Kurzschreibweise */}
          <h1>
            {user.name} ({user.alter})
          </h1>
          <p>{user.email}</p>
        </>
      )}
    </div>
  );
};

export default UserView;
