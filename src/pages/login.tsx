import { BaseForm } from "../types/forms/base.type";
import FormComponent from "../components/form";
import logo from "../assets/logo.png"
import { useEffect, useState } from "react";

function LoginPage () {
    const [loginState, setLoginState] = useState(false);
    
    const handleLoginState = (state:boolean) => {
        setLoginState(state);
    }

    useEffect(() => {
        if(loginState){
            window.location.href = "/dashboard";
        }
    }
    , [loginState]);
    
    //Set Form Data
    const data:BaseForm = {
        FormName: "Login",
        FormUrl: "/auth/login",
        FormId: "login",
        FormType: "api",
        FormFields: [
          {
            FieldName: "Email",
            FieldId: "email",
            FieldType: "email",
            FieldValue: "",
            FieldRequired: true,
          },
          {
            FieldName: "Password",
            FieldId: "password",
            FieldType: "password",
            FieldValue: "",
            FieldRequired: true,
          },
          {
              FieldName: "Submit",
              FieldId: "submit",
              FieldType: "submit",
              FieldValue: "Submit",
              FieldRequired: false,
          },
        ],
        extraProps: {
            loginState: loginState,
            handleLoginState: handleLoginState
        }
    }
    
  return (
    <div className="loginPage">
       <div className="loginContain">
          <div className="brand">
             <img src={logo} alt="" />
          </div>
          <FormComponent {...data} />
       </div>
    </div>
  )
}

export default LoginPage;