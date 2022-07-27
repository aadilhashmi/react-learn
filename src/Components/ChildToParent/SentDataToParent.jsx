import React, { useState, useEffect } from "react";
import axios from "axios";

export const SentDataToParent = (props) => {
  const [name, setName] = useState([]);

  const withAxiosAndAsync = async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/users");
    setName(result.data);
    console.log("second call", result.data);
  };
  useEffect(() => {
    withAxiosAndAsync();
  }, []);
  const handler = () => {
    props.setDataFromChild(name);
  };
  return (
    <div>
      <button onClick={handler}>Change</button>
      <ul>
        {name &&
          name.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
      </ul>
    </div>
  );
};
