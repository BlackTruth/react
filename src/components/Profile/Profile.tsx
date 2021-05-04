import * as React from "react";
import { Link } from "react-router-dom";

const Profile: React.FC = () => {
  return (
    <>
      <h2>Profile</h2>
      <p>First sentence. Second sentence. It&apos;s all about me xD</p>
      <Link to="/cards">Go to Cards</Link>
    </>
  );
};

export default Profile;
