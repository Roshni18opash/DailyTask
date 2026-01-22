import type React from "react";
import "./style.css";

type ProfileProps = {
  name?: string;
  age: number;
  status: "Coder" | "Single" | "Commited";
  children?: React.ReactNode;
};

const Profile = ({ name, age, status, children }: ProfileProps) => {
  return (
    <div className="profile-card">
      <h2 className="profile-name">Name: {name ?? "User"}</h2>
      <p className="profile-age">Age: {age}</p>
      <p className="profile-status">Status: {status}</p>

      {children && <div className="profile-children">{children}</div>}
    </div>
  );
};

export default Profile;
