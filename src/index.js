import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./tailwind.css";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/navBar";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Courses from "./pages/Courses";
import CourseViewer from "./pages/courses";
import OnBoarding from "./pages/onBoarding";
import MarketPlace from "./pages/marketplace";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App/>}></Route>
          <Route path="/courses" element={<Courses/>}></Route>
          <Route path="/courses/:course/:hash" element={<CourseViewer/>}></Route>
          <Route path="/courses/onboarding/:course" element={<OnBoarding/>}></Route>
          <Route path="/marketplace" element={<MarketPlace/>}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
