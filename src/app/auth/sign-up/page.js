import { SignUp } from "@clerk/nextjs";
import React from "react";

const Signup = () => {
  return (
    <div>
      <SignUp routing="path" path="/auth/sign-up" signInUrl="/auth/sign-in" />
    </div>
  );
};

export default Signup;
