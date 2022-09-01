import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Sidebar from "../Sidebar";
import Main from "../Main";
import Welcome from "../Welcome";
import { lightTheme } from "../../root.component";
import styled from "styled-components";

const AppStyles = styled.main`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  max-height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: ${(props) => props.theme.bg};
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

function App() {
    const { user } = useContext(UserContext);

    return (
        <AppStyles theme={lightTheme}>
            <Sidebar />
            <Main />
            {!user.name && <Welcome />}
        </AppStyles>
    );
}

export default App;