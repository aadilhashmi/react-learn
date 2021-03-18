import React, { useState } from "react";
import { PropsWithClassParent } from "../MainBody/PropsWithClassComponent/PropsWithClassParent";
import { ClassMates } from "../ClassMates/ClassMates";
import { Col, Row } from "react-bootstrap";
import { Parent } from "../MainBody/PropsWithfunction/Parent";
import ParentBind from "../MainBody/PropsWithBind/ParentBind";
import UseStateParentFunc from "../MainBody/PropsWithfunction/UseState/UseStateParentFunc";

import InlineCss from "../MainBody/PropsWithfunction/DirectCss/InlineCss";
import UseStateParentPractice from "../MainBody/PropsWithfunction/UseStatePractice/UseStateParentPractice";
import MapingPrent from "../MainBody/PropsWithfunction/Maping/MapingParent";
import FetchingDataFromJsonParent from "../MainBody/FetchingDataFromJSON/FetchingDataFromJsonParent";
import FetchingDataFromReduxParent from "../MainBody/FetchingGroupsDataFromRedux/FetchingDataFromReduxParent";
import FetchingEmployeParent from "../MainBody/FetchingEmployeData/FetchingEmployeParent";
import FetchingUserParent from "../MainBody/FetchingUserDataFromRedux/FetchingUserParent";
import Enable_Disable from "../MainBody/PropsWithClassComponent/enable-disableButtonWithClassFunction/Enable_Disable";
import StudentsAdmissionForm from "../MainBody/StudentsAdmissionForm/StudentsAdmissionForm";
import AdmissionPage from "../MainBody/StudentsAdmissionForm/AdmissionPage";

import Module4Landing from "../MainBody/Module4Landing/Module4Landing";
import SlickCarousel from "../MainBody/React-Slick/SlickCarousel";
import MegaFair2018 from "../Placement/MegaFair2018";
import Placement from "../Placement/Placement";
import PlacementCarasoul from "../Placement/PlacementCarasoul";
import PlacementStats from "../Placement/PlacementStatstics/PlacementStats";

const HeaderSection = () => {
  return (
    <React.Fragment>
      <div>
        {/* amjad sir class tutorial */}
        {/* <ClassMates /> */}
        {/* class components */}
        {/* <PropsWithClassParent /> */}
        {/* funtion components */}
        {/* <Parent /> */}
        {/* react binding tutorial */}
        {/* <ParentBind /> */}
        {/* usestate on click on change  tutorial starts  */}
        {/* <UseStateParentFunc /> */}
        {/* <UseStateParentPractice /> */}
        {/* <InlineCss /> */}
        {/* <MapingPrent /> */}
        {/* <FetchingDataFromJsonParent /> */}
        {/* <FetchingDataFromReduxParent /> */}
        {/* <FetchingEmployeParent /> */}
        {/* <FetchingUserParent /> */}
        {/* <Enable_Disable /> */}
        {/* <AdmissionPage /> */}
        {/* <StudentsAdmissionForm /> */}

        {/* <Module4Landing /> */}
        {/* <SlickCarousel/> */}
        {/* <MegaFair2018 /> */}
        {/* <Placement /> */}
        {/* <PlacementCarasoul /> */}
        <PlacementStats />
      </div>
    </React.Fragment>
  );
};

export default HeaderSection;
