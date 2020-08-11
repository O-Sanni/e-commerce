import React from "react"

import "./sign.in.and.sign.up.styles.scss"
import SignIn from "../sign-in/SignIn"
import SignUp from "../sign-up/SignUp"

const SignInAndSignUp =()=>{
   return   <div className="sign-in-and-sign-up"> 
               <SignIn />
               <SignUp />
            </div>
}

export default SignInAndSignUp;