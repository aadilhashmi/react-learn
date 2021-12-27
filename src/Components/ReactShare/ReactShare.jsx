import React from "react";
import { LinkedinShareButton, LinkedinIcon } from "react-share";

export const ReactShare = () => {
  const shareurl = "https://youtu.be/9WzIACv_mxs";
  const Test = "testing";
  const summary = "preparing linked in share widget";
  const source = "linkedin";
  return (
    <div>
      <LinkedinShareButton
        title={Test}
        summary={summary}
        source={source}
        url={shareurl}
      >
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
    </div>
  );
};
