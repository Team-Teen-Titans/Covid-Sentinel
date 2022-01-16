import React from "react";
import { render } from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./components/App";
import About from "./components/About";
import VaccineMap from "./components/VaccineMap";
import HomepageContainer from "./components/HomepageContainer";
import Login from "./components/Login";
import Styles from "./stylesheets/styles.css";
import SignUp from "./components/SignUp";
import FlightResults from "./components/FlightResults";
import TestContainer from "./components/TestContainer";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomepageContainer />} />
        <Route path="home" element={<HomepageContainer />} />
        <Route
          path="country"
          element={<VaccineMap />}
          render={(props) => <VaccineMap {...props} />}
        />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route
          path="flights"
          element={<FlightResults />}
          render={(props) => <FlightResults {...props} />}
        />
        <Route
          path="test"
          element={<TestContainer />}
          render={(props) => <TestContainer {...props} />}
        />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
