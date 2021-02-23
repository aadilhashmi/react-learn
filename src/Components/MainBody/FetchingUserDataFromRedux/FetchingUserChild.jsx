import React from "react";

const FetchingUserChild = ({ userData }) => {
  return (
    <div>
      <h2>{userData.name}</h2>
      {userData.desc}
    </div>
  );
};

export default FetchingUserChild;
