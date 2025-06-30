import React from "react";

function Signip(){
   return(
    <div>
        <h1>Sign Up</h1>
        <fieldset>
            <legend>Sign Up Form</legend>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <br />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
                <br />
            </form>
        </fieldset>
    </div>
   )
}

export default Signip;