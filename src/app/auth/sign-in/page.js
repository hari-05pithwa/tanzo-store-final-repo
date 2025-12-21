// import { SignIn } from "@clerk/nextjs";
// import React from "react";

// const Signin = () => {
//   return (
//     <div>
//       <SignIn routing="path" path="/auth/sign-in" signUpUrl="/auth/sign-up"  />
//     </div>
//   );
// };

// export default Signin;

"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";

const Signin = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-[#FAFAFA] px-6 py-12">
      <div className="text-center mb-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-2">
          Welcome Back
        </span>
        <h2 className="text-3xl font-light tracking-tight text-gray-900">
          Sign In
        </h2>
      </div>
      
      <div className="w-full max-w-md">
        <SignIn 
          routing="path" 
          path="/auth/sign-in" 
          signUpUrl="/auth/sign-up"  
        />
      </div>
    </div>
  );
};

export default Signin;