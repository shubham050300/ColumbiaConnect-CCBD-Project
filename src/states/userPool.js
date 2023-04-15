import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_4XHPSeDOO",
    ClientId: "23jsf7ag8c7miq9f8v9j6lghrn"
}

export default new CognitoUserPool(poolData);