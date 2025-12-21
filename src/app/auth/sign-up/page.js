// import { SignUp } from "@clerk/nextjs";
// import React from "react";

// const Signup = () => {
//   return (
//     <div>
//       <SignUp routing="path" path="/auth/sign-up" signInUrl="/auth/sign-in" />
//     </div>
//   );
// };

// export default Signup;

"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const Signup = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-[#FAFAFA] px-6 py-12">
      <div className="text-center mb-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-2">
          New Member
        </span>
        <h2 className="text-3xl font-light tracking-tight text-gray-900">
          Create Account
        </h2>
      </div>

      <div className="w-full max-w-md">
        <SignUp 
          routing="path" 
          path="/auth/sign-up" 
          signInUrl="/auth/sign-in" 
        />
      </div>
    </div>
  );
};

export default Signup;