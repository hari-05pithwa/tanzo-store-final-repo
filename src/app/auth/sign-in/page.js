import { SignIn } from "@clerk/nextjs";
import React from "react";

const Signin = () => {
  return (
    <div>
      <SignIn routing="path" path="/auth/sign-in" signUpUrl="/auth/sign-up"  />
    </div>
  );
};

export default Signin;
