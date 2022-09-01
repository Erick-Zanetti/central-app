import { ParcelConfig } from 'single-spa';
import Parcel from 'single-spa-react/parcel';
import { UserContext } from './contexts/UserContext';
import Welcome from "./components/Welcome";
import styled from "styled-components";
import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export const lightTheme = {
  bg: "#EAEDEE",
  fg: "#FFF",
  bold: "#d9d9d9",
  bolder: "#6d6d6d",
  text: "#000",
  shadow: "rgba(0,0,0,0.5)",
  shadowInverted: "rgba(255,255,255,1)",
  white: "#FFF",
  black: "#000",
};



import "./root.css";
import ContextProvider from './contexts/ContextProvider';
import App from './components/App';

export default function Root(props) {
  const parcelProps = {
    title: 'TODO List'
  }

  return <section>
    <Parcel config={(() => System.import('@central-app/parcel-header')) as ParcelConfig<{}>} parcelProps={parcelProps} />
    <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </React.StrictMode>
  </section>;
}
