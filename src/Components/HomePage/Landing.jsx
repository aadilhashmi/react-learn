import React from "react";
import { PropsWithClassParent } from "../MainBody/PropsWithClassComponent/PropsWithClassParent";
import { ClassMates } from "../ClassMates/ClassMates";

export const Landing = () => {
  return (
    <React.Fragment>
      <ClassMates />
      <PropsWithClassParent />
      {/* <HeaderSection />
      <RightNavigation /> */}
    </React.Fragment>
  );
};
