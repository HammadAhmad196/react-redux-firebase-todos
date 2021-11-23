// import Button  from "styled-components";
import React from "react";
import styled from "styled-components";
import {
  auth,
  googleAuthProvider,
} from "../../../config/firebase";

function GoogleAuth() {
  const googleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <>
      <LoginContainer>
        <LoginInnerContainer>
          <button onClick={googleSignIn}>Sign in with Google</button>
        </LoginInnerContainer>
      </LoginContainer>
    </>
  );
}

export default GoogleAuth;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LoginInnerContainer = styled.div`
  button {
    text-transform: inherit !important;
    background-color: #21283e;
    width: 100%;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px;
    color: white;
    margin: 10px;
    :hover {
      opacity: 1 !important;
      color: greenyellow;
    }
  }
`;
