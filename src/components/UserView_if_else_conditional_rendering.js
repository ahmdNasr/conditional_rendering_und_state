const UserView = ({ user }) => {
  if (user.status === "private") {
    // Render mir dieses html... (nur name)
    return (
      <div className={user.alter >= 18 ? "user-view-adult" : "user-view-child"}>
        <h1>{user.name}</h1>
      </div>
    );
  } else {
    return (
      <div className={user.alter >= 18 ? "user-view-adult" : "user-view-child"}>
        <h1>
          {user.name} ({user.alter})
        </h1>
        <p>{user.email}</p>
      </div>
    );
  }
};

export default UserView;
