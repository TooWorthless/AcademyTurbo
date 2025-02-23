import React, { useContext } from "react";
import { AuthContext } from "./Auth";


interface AuthButtonProps { }


const AuthButton: React.FC<AuthButtonProps> = () => {

    const auth = useContext(AuthContext);


    return auth?.isAuth ? (
        <button onClick={auth?.logout}>Выйти</button>
    ) : (
        <button onClick={auth?.login}>Войти</button>
    );
}


export default AuthButton;