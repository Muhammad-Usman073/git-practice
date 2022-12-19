import React from "react";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../firebase/utils/Firebase.utils";

const SignUp = () => {
  const onSignUpWithGoogle = async () => {
    const {user} = await signInWithGooglePopUp();
    const setData = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>SignUp with Google:</h1>
      <button onClick={onSignUpWithGoogle}>SignUp with google</button>
    </div>
  );
};

export default SignUp;
