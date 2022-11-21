import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import {BaseUrl} from "./constants";

function Login(props) {
    const [token, setToken] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            setHasToken(true);
        }
    }, [token]);


    function usernameHandler(event) {
        setUsername(event.target.value);
    }

    function passwordHandler(event) {
        setPassword(event.target.value);
    }

    function login() {
        axios.post(
            BaseUrl + 'api-token-auth/',
            {
                username: username,
                password: password,
            },
            {
                // headers: {
                //     xsrfCookieName: 'csrftoken',
                //     xsrfHeaderName: 'X-CSRFTOKEN',
                //     withCredentials: true
                // },
            }
        ).then(response => {
            console.log(response.data);
            setToken(response.data);
            setHasToken(true);
            localStorage.setItem("token", response.data.token);
        }).catch(error => {
            console.log(error);
        });
    }

    function logout() {
        let login_token =  localStorage.getItem('token');
        axios.get(
            BaseUrl + 'auth/logout/',
            {
                headers: {
                    'Authorization': 'Token ' + login_token,
                },
            }
        ).then(response => {
            console.log(response);
            setHasToken(false);
            localStorage.removeItem("token");
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <div>
            {hasToken ?
                <Fragment>
                    <button onClick={logout}>Logout</button>
                </Fragment>
                :
                <Fragment>
                    <p>Username:<input className={"form-control"} name={"username"} onChange={usernameHandler}/></p>
                    <p>Password:<input className={"form-control"} name={"password"} onChange={passwordHandler}/></p>
                    <p>
                        <button onClick={login}>Login</button>
                    </p>
                </Fragment>
            }
        </div>
    );
}

export default Login;
