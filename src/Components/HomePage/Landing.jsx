import React from "react";
import { PropsWithClassParent } from "./Components/MainBody/PropsWithClassComponent/PropsWithClassParent";
import { ClassMates } from "../ClassMates/ClassMates";

export const Landing = () => {
  return (
    <React.Fragment>
      <ClassMates />
      <PropsWithClassParent />
      <HeaderSection />
      <RightNavigation />
    </React.Fragment>
  );
};
