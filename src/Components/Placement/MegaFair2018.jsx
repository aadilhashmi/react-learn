import React from "react";
import { PlacementReducer } from "../../State/Reducers/PlacementRedeucer";
import "./MegaFair.css";

const MegaFair2018 = () => {
  return (
    <div>
      {PlacementReducer.PDF.map((PdfData) => {
        return (
          <div>
            <iframe className="pdf" src={PdfData.pdf} frameborder="0"></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default MegaFair2018;
