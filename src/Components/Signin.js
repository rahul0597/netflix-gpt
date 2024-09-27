import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkFields } from "../utils/validate";

const Signin = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [isError, setError] = useState({
    email:false,password:false
  });
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  const handleForm = (e) => {
    e.preventDefault();

    const result = checkFields(email.current.value, password.current.value);
    if (result) {
      setError({...isError,email:true});
    } else {
      setError(false);
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg"
          alt="bg"
        />
      </div>

      <form className="p-12 w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Name"
            className="p-3 my-4 w-full bg-gray-950 border border-gray-500 rounded-sm "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-gray-950 border border-gray-500 rounded-sm"
        />
        {isError&&<small className="text-red-600">Email not valid</small>}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-950 border border-gray-500 rounded-sm"
        />
         {isError&&<small className="text-red-600">Password not valid</small>}
        <button
          onClick={(e) => {
            handleForm(e);
          }}
          className="p-2 my-4 bg-red-600 w-full rounded-sm"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer"
          onClick={() => {
            toggleSignInForm();
          }}
        >
          {isSignInForm
            ? " New to Netflix ? Sign Up Now"
            : "Already Registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Signin;
