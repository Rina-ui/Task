import React from "react";
import { Link } from "react-router";

function Login(){
    return(
        <div>
            <h1>Login</h1>
            <fieldset>
                <legend>Login Form</legend>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <br />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    <br />

                    <button type="submit">Login</button>
                    <p>Don't you have a compte?</p>
                    <Link to = "/Signip"> Sign up</Link>

                </form>
            </fieldset>
        </div>
    )
}

export default Login;