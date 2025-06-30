import React, { useState } from "react";
import axios from "axios";


function Signip(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/api/auth/signup', {
                email,
                password,

            });
            console.log(response.data);
        } catch (error) {
            console.error("Error during signup:", error);
            alert("An error occurred during signup. Please try again.");
        }
    }

   return(
    <div>
        <h1>Sign Up</h1>
        <fieldset>
            <legend>Sign Up Form</legend>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />

                <button type="submit">Sign Up</button>
            </form>
        </fieldset>
    </div>
   )
}

export default Signip;