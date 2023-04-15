import React from "react";
import AccountContext from "../context/AccountContext";
import userPool from "./userPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

const AccountState = (props) => {
    
    //user registration
    const signup = async(email, name, password, profile)=> {
        return await new Promise((resolve, reject) => {
            var attributeList = [];

            var userName = {
                Name: "name",
                Value: name
            }

            var userProfile = {
                Name: "profile",
                Value: profile
            }

            attributeList.push(userName);
            attributeList.push(userProfile);

            userPool.signUp(email, password, attributeList, null, (err, data) => {
                if(err) {
                    console.log("Failed to register", err.message);
                    reject();
                } else {
                    console.log("Account Created Successfully", data);
                    resolve();
                }
            })

        })
    }

    //user confirmation
    const confirmRegistration = async(email, code)=> {
        return await new Promise((resolve, reject) => {
            
            var userData = {
                Username: email,
                Pool: userPool
            }

            var cognitoUser = new CognitoUser(userData);

            cognitoUser.confirmRegistration(code, true, (err, data) => {
                if(err) {
                    console.log("Failed to confirm user", err.message);
                    reject();
                } else {
                    console.log("Account Verified Successfully", data);
                    resolve();
                }
            })

        })
    }

    //user login
    const authenticate = async(Username, Password)=> {
        return await new Promise((resolve, reject) => {

            const user = new CognitoUser({
                Username,
                Pool: userPool
            })
            const authDetails = new AuthenticationDetails({
                Username,
                Password
            })
            
            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log("Login Successful", data);
                    resolve(data);
                },
                onFailure: (err) => {
                    console.log("Failure", err.message);
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    console.log("New Password Required", data);
                    resolve(data);
                }
            })

        })
    }

    return (
        <AccountContext.Provider value={{signup, confirmRegistration, authenticate}}>
            {props.children}
        </AccountContext.Provider>
    )
}

export default AccountState;