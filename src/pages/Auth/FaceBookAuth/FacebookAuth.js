// import Button  from "styled-components";
import React from "react";
import styled from "styled-components";
import {
  auth,
  facebookAuthProvider,
} from "../../../config/firebase";

function FacebookAuth() {

  const fbSignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(facebookAuthProvider);
  };
  return (
    <>
      <LoginContainer>
        <LoginInnerContainer>
          <button className="fb" onClick={fbSignIn}>Sign in with Facebook</button>
        </LoginInnerContainer>
      </LoginContainer>
    </>
  );
}

export default FacebookAuth;

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
