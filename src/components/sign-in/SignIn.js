import React from "react";

import "./sign-in.styles.scss"
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomeButton";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:"",
            password: ""
        }
    }

    handleSubmit =event=>{
        event.preventDefault();
        this.setState({email:"", password:""})

    }

    handleChange=event=>{
        const {name, value}=event.target; //will take the name from input and value from input 

        this.setState({[name]:value}) //set the name of field and value
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="email"
                    required />
                    <FormInput name="password" 
                    value={this.state.password} 
                    type="password" 
                    handleChange={this.handleChange} 
                    label="password"
                    required />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignIn;