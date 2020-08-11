import React from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomeButton";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils"

import "./sign.up.styles.scss";

class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName: "",
            email: "",
            password:"",
            confirmPassword:""

        }
    }
    handleSubmit=async event =>{
        event.preventDefault();

        const {displayName, email, password, confirmPassword}= this.state;
        
        if(password!== confirmPassword){
            alert("password don't  match")
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email, password
            );

            await createUserProfileDocument(user,{displayName})

            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
            })
        }
        catch(error){
            console.error(error)
        }
    }


    handleChange=event=>{
        event.preventDefault();
        const {value, name}=event.target;
        this.setState({[name]:value})
    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span> Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange}
                                label="Display Name" require />
                    <FormInput type="text" name="email" value={email} onChange={this.handleChange}
                                label="Email" require />
                    <FormInput type="text" name="password" value={password} onChange={this.handleChange}
                                label="Password" require />
                    <FormInput type="text" name="confirmPassword" value={confirmPassword} onChange={this.handleChange}
                                label="Confirm Password" require />
                    <CustomButton type="submit">Sign Up</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;