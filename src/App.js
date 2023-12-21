import LayoutDashboard from "layout/LayoutDashboard";
import CampaignView from "modules/campaign/CampaignView";
import CampaignPage from "pages/CampaignPage";
import DashBoard from "pages/DashBoard";
import PaymentPage from "pages/PaymentPage";
import Profile from "pages/Profile";
import StartCampaign from "pages/StartCampaign";
import WithdrawPage from "pages/WithdrawPage";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const customStyles = {
  content: {},
};
Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashBoard></DashBoard>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaign></StartCampaign>}
          ></Route>
          <Route
            path="/withdraw"
            element={<WithdrawPage></WithdrawPage>}
          ></Route>
          <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
