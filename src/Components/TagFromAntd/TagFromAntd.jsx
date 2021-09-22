import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

export const TagFromAntd = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1>Add</h1>

      {/* <pre>{JSON.stringify(selected)}</pre> */}

      <TagsInput
        value={selected}
        onChange={setSelected}
        name="tags"
        placeHolder="Add New tags"
      />
      {/* <em>press enter to add new tag</em> */}
    </div>
  );
};

