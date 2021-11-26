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
import PlacementOverview from "../Placement/PlacementStatstics/PlacementOverview";
import { Overley } from "../Overley/Overley";
import { DarkThemeToggle } from "../DarkThemeUsingMui/DarkThemeToggle";
import { FetchDataUsingApi } from "../fetchDataUsingApi/FetchDataUsingApi";
import { Interview } from "./Interview";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FetchingDataFromReduxParent from "../MainBody/FetchingGroupsDataFromRedux/FetchingDataFromReduxParent";
import { EmpCard } from "../EmpCard/EmpCard";
import { StopWatch } from "../StopWatch/StopWatch";
import { TagFromAntd } from "../TagFromAntd/TagFromAntd";
import { Tagcomp } from "../TagFromAntd/Tag";
import { Marque } from "../MarqueWidget/Marque";
import { TransferList } from "../TranferList/TransferList";

const HeaderSection = () => {
  return (
    <React.Fragment>
      <div>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/classMates"> classmate</Link>
              </li>
              <li>
                <Link to="/overlay">Overlay</Link>
              </li>
              <li>
                <Link to="/darktheme">DarkTheme</Link>
              </li>
              <li>
                <Link to="/EmpCard">EmpCard</Link>
              </li>
              <li>
                <Link to="/StopWatch">StopWatch</Link>
              </li>
              <li>
                <Link to="/Marque">Marque</Link>
              </li>
            </ul>
          </nav>
          {/* amjad sir class tutorial */}

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
          {/* <SlickCarousel /> */}
          {/* <MegaFair2018 /> */}
          {/* <Placement /> */}
          {/* <PlacementCarasoul /> */}
          {/* <PlacementOverview /> */}
          {/* <PlacementStats /> */}

          {/* <FetchDataUsingApi /> */}
          {/* <Interview /> */}
          {/* <TagFromAntd /> */}
          {/* <Tagcomp /> */}
          <TransferList />
          <Switch>
            <Route path="/classMates">
              <ClassMates />
            </Route>
            <Route path="/overlay">
              <Overley />
            </Route>
            <Route path="/darktheme">
              <DarkThemeToggle />
            </Route>
            <Route path="/EmpCard"></Route>
            <Route path="/StopWatch">
              <StopWatch />
            </Route>
            <Route path="/Marque">
              <Marque />
            </Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
};

export default HeaderSection;
