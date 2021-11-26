import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
// import "./Marque.css";

export const Marque = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [data]);

  const handler = () => {
    setData(data + 1);
  };

  return (
    <div style={{ height: "1000px" }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eum modi
        consequuntur debitis neque temporibus non illo reiciendis libero, aut
        maiores, dolore exercitationem. Placeat ut libero deleniti nesciunt.
        Incidunt, maxime?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet pariatur
        repellat sint rerum iusto dolorem! Voluptates rem modi, atque minima
        eaque nemo corrupti, ullam dolores incidunt labore, aut quos
        voluptatibus!
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad pariatur
        qui iure tenetur rem itaque, velit nihil quaerat sapiente deserunt nisi
        deleniti repellendus, expedita eaque dolores! Soluta, nihil totam!
        Earum?
      </p>
      <h3>{data}</h3>

      <button style={{ marginTop: "250rem" }} onClick={handler}>
        Top
      </button>
    </div>
  );
};
