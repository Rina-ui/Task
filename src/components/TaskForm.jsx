import React from "react";   
import { motion } from "framer-motion";
import { useState } from "react";

function TaskForm({ onClose }) {  
const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = fetch("http://localhost:3000/api/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`, // Assurez-vous que le token est stocké dans le localStorage
        },

        body: JSON.stringify({
          description: description.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création de la tâche.");
      };

      const data = await response.json();
      console.log(data);
      alert("Tâche ajoutée avec succès !");
      setDescription(""); 
      onClose(); 
    }catch (error) {
      console.error("Erreur lors de la création de la tâche :", error);
      alert("Une erreur s'est produite lors de l'ajout de la tâche. Veuillez réessayer.");
    }
  }


return (
    <motion.fieldset
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      style={styles.fieldset}
    >
      <motion.legend style={styles.legend}>
        Tache
        <motion.button
          onClick={onClose}
          style={styles.closeButton}
          whileHover={{ scale: 1.1 }}
        >
          ×
        </motion.button>
      </motion.legend>

      <motion.label htmlFor="description" style={styles.label}>
        Description :
      </motion.label>

      <motion.textarea
        id="description"
        name="description"
        rows="4"
        cols="35"
        placeholder="Entrez votre tâche ici..."
        onChange={(e) => setDescription(e.target.value)}
        style={styles.textarea}
        whileFocus={{ borderColor: "#7F00FF" }}
      />

      <div style={styles.buttonContainer}>
        <motion.button
          type="submit"
          style={styles.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
        >
          Ajouter
        </motion.button>

        <motion.button
          type="reset"
          style={{ ...styles.button, backgroundColor: "#ccc", color: "#000" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Annuler
        </motion.button>
      </div>
    </motion.fieldset>
  );
}

const styles = {
  fieldset: {
    border: "2px solid #7F00FF",
    borderRadius: "15px",
    padding: "20px",
    margin: "0 auto",
    width: "90%",
    maxWidth: "400px",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // semi-transparent
    backdropFilter: "blur(10px)", // flou pour un bel effet de verre
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    position: "relative",
  },
  legend: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#FF6347",
    border: "none",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    fontSize: "1rem",
    color: "#fff",
    cursor: "pointer",
    marginLeft: "10px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "500",
    color: "#333",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    resize: "vertical",
    marginBottom: "15px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#7F00FF",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "0.95rem",
  },
};


export default TaskForm;