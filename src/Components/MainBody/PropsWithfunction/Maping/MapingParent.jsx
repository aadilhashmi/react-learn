import React, { useState } from "react";
import MapingChild from "./MapingChild";

const MapingParent = () => {
  const [personData, setPersonData] = useState({
    person: [
      { name: "AAMER ", age: 25 },
      { name: "RIZWAN", age: 20 },
      { name: "MAZHAR", age: 20 },
      { name: "AADIL", age: 20 },
      { name: "KHAWAJA", age: 20 },
      { name: "SALMAN", age: 20 },
    ],
  });

  return (
    <div>
      {/* maping stars from here ] */}
      {personData.person.map((pickupbizzData) => {
        //   another return for maping
        return (
          <MapingChild name={pickupbizzData.name} age={pickupbizzData.age} />
        );
      })}
    </div>
  );
};

export default MapingParent;
