import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Signip() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/user/signup", {
        email,
        password,
      });
      console.log(response.data);
      
      alert('Bienvenue, ${email}! Votre compte a été créé avec succès.');

      //redicrection to home page
      navigate('/home', {state: {userEmail: email}})

    } catch (error) {
      console.error("Error during signup:", error);

      //si l'user est deja cree 
        if (error.response && error.response.status === 400) {
            alert("Cet email est déjà utilisé. Veuillez en choisir un autre.");
            navigate('/login');
        } else {
            alert("Une erreur s'est produite lors de la création de votre compte. Veuillez réessayer.");
        }
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          width: "350px",
          maxWidth: "90%",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#fff", marginBottom: "24px" }}>
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="email" style={{ fontWeight: 500, color: "#fff" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "rgba(255,255,255,0.8)",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label htmlFor="password" style={{ fontWeight: 500, color: "#fff" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "rgba(255,255,255,0.8)",
                outline: "none",
              }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#8a65ff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Sign Up
          </motion.button>

          <p style={{ marginTop: "16px", textAlign: "center", color: "#000" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#fff", fontWeight: "bold", textDecoration: "underline" }}>
              Login
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Signip;
