import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";   
import TaskForm from "../components/TaskForm.jsx"; // Import the TaskForm component

export default function Home() {
    
  const containerStyle = {
    position: "relative",
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
    textAlign: "center",
  };

  const splashStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(306deg, #7F00FF, #00BFFF)", 
    clipPath:
      'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")',
    opacity: 0.3,
    zIndex: -1,
    borderRadius: 20,
  };

  const buttonStyle = {
    margin: "10px",
    padding: "12px 24px",
    fontSize: "1rem",
    borderRadius: 15,
    border: "none",
    cursor: "pointer",
    backgroundColor: "#7F00FF", 
    color: "white",
  };

  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };


  //pour afficher le formulaire modal 
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div style={containerStyle}>
      <div style={splashStyle} />
      <motion.h1
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardVariants}
      >
        Welcome to the Task Manager
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        This is a simple task management application.
      </motion.p>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardVariants}
      >
        <motion.button style={buttonStyle} 
          onClick={openModal}
        >
          Ajouter une tache
        </motion.button>
        <button style={buttonStyle}>Voir les taches</button>
        <button style={buttonStyle}>Voir la liste des taches</button>
        <div style={{ marginTop: 10 }}>
          <Link to="/theme" style={{ color: "#00BFFF" }}>
            Theme
          </Link>
        </div>
        <div style={{ marginTop: 10 }}>
          <Link to="/login" style={{ color: "#00BFFF" }}>
            Se connecter
          </Link>
        </div>
      </motion.div>
       {/* Modal for adding a task */}
        <AnimatePresence>
          {isModalOpen && (
             <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-container"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <TaskForm onClose={closeModal} />
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
}

